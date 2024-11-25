'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface NotebookCell {
  cell_type: string;
  source: string[];
  outputs?: Array<{
    output_type: string;
    text?: string[];
    data?: {
      'text/plain'?: string[];
      'image/png'?: string;
    };
  }>;
}

interface NotebookData {
  cells: NotebookCell[];
}

export function NotebookViewer({ notebookPath }: { notebookPath: string }) {
  const [notebook, setNotebook] = useState<NotebookData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNotebook() {
      try {
        const response = await fetch(notebookPath);
        if (!response.ok) {
          throw new Error('Failed to load notebook');
        }
        const data = await response.json();
        setNotebook(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load notebook');
      } finally {
        setLoading(false);
      }
    }

    fetchNotebook();
  }, [notebookPath]);

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-[200px] w-full" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Card className="p-4 text-red-500">
        Error loading notebook: {error}
      </Card>
    );
  }

  if (!notebook) {
    return null;
  }

  return (
    <ScrollArea className="h-[800px] w-full rounded-md border">
      <div className="space-y-6 p-4">
        {notebook.cells.map((cell, index) => (
          <Card key={index} className="p-4">
            {cell.cell_type === 'markdown' && (
              <div className="prose dark:prose-invert max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {cell.source.join('')}
                </ReactMarkdown>
              </div>
            )}
            {cell.cell_type === 'code' && (
              <div className="space-y-2">
                <SyntaxHighlighter 
                  language="python" 
                  style={tomorrow}
                  customStyle={{ margin: 0 }}
                  wrapLongLines={true}
                >
                  {cell.source.join('')}
                </SyntaxHighlighter>
                {cell.outputs?.map((output, outputIndex) => (
                  <div key={outputIndex} className="mt-2">
                    {output.text && (
                      <pre className="bg-muted p-2 rounded-md whitespace-pre-wrap break-words">
                        {output.text.join('')}
                      </pre>
                    )}
                    {output.data?.['image/png'] && (
                      <div className="flex justify-center">
                        <img 
                          src={`data:image/png;base64,${output.data['image/png']}`}
                          alt={`Output ${outputIndex}`}
                          className="max-w-full h-auto"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
}

