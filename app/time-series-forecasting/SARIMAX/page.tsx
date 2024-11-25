import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';
import Link from 'next/link';
import { NotebookViewer } from '@/components/notebook-viewer';

export default function SARIMAXPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">SARIMAX Time Series Forecasting</h1>
          <p className="text-muted-foreground">
            Advanced time series analysis using SARIMAX (Seasonal AutoRegressive Integrated Moving Average with eXogenous factors)
          </p>
        </div>
       
      </div>

      <div className="grid gap-8">
        <Card className="p-6">
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p>
              This notebook demonstrates the implementation of SARIMAX modeling for time series forecasting at Mecca Brands. 
              The model was used to improve sales prediction accuracy across all channels by over 90%.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Key Features</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Seasonal decomposition of time series data</li>
              <li>Parameter optimization using grid search</li>
              <li>Integration with external factors (promotional events, holidays)</li>
              <li>Model validation and accuracy metrics</li>
              <li>Deployment process using AWS SageMaker</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Technical Implementation</h3>
            <p>
              The model was implemented using Python&apos;s statsmodels library and deployed on AWS SageMaker. 
              It incorporates multiple seasonal patterns and external regressors to capture complex relationships in the data.
            </p>

            <div className="bg-muted p-4 rounded-md mt-6">
              <h4 className="text-lg font-semibold mb-2">Business Impact</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>90%+ improvement in sales prediction accuracy</li>
                <li>Enhanced inventory management</li>
                <li>Optimized promotional planning</li>
                <li>Better resource allocation</li>
              </ul>
            </div>
          </div>
        </Card>
        
      </div>
      <iframe src="/RevisedIncrementalityModel-SARIMAX" width="100%" height="1000" frameBorder="0"></iframe>
    </div>
      
   
  )
}