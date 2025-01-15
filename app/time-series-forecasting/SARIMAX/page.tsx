import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';
import Link from 'next/link';
import { NotebookViewer } from '@/components/notebook-viewer';

export default function SARIMAXPage() {
  return (
    <div className="container mx-auto px-4 mt-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl text-heading-1 mb-2">
            SARIMAX Time Series Forecasting
          </h1>
          <p className="text-sub-heading">
            Advanced time series analysis using SARIMAX (Seasonal AutoRegressive Integrated Moving Average with eXogenous factors)
          </p>
          <p className="text-red-500 font-semibold">
            Please note I am still working on commenting this code
          </p>
        </div>
      </div>

      <div className="grid gap-8">
        <Card className="p-6">
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-lg">
              This notebook demonstrates the implementation of SARIMAX modeling for time series forecasting that I used in previous work experience at <b>Mecca Brands</b>. I have used <a href="https://www.kaggle.com/competitions/rossmann-store-sales" className="text-blue-500">Rossman Sales Data</a> to showcase the application of this model. The model was used to improve sales prediction accuracy across all sales channels by over 90% and provide insights into incremental revenue generated through marketing campaigns.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Key Features</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Exploratory Data Analysis</li>
              <li>Seasonal decomposition of time series data</li>
              <li>Parameter optimization using grid search</li>
              <li>Integration with external factors (promotional events, holidays)</li>
              <li>Model validation and accuracy metrics</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Technical Implementation</h3>
            <p>
              The model was implemented using auto_arima by PMDARIMA. It incorporates multiple seasonal patterns and external regressors to capture complex relationships in the data.
            </p>

            <div className="bg-muted p-4 rounded-md mt-6">
              <h4 className="text-lg font-semibold mb-2">Business Impact</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>90%+ improvement in sales prediction accuracy</li>
                <li>Provided insights into revenue generated through promotional activities</li>
                <li>Used for financial planning and white paper sessions</li>
              </ul>
            </div>
          </div>
        </Card>
        <div>
          <hr className="border-3" />
          <br />
        </div>
      </div>
      <iframe src="/RossmanSARIMAX.html" width="100%" height="1000" frameBorder="0"></iframe>
    </div>
  );
}
