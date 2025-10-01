import React from 'react';
import { Helmet } from 'react-helmet';

export default function StockAverageArticle() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white text-gray-800">
      <Helmet>
        <title>Stock Average Calculator — How to Average Down & Calculate Share Price</title>
        <meta name="description" content="Learn how to use a stock average calculator and stock average down calculator to compute your new average price, manage average down strategies, and track total cost basis." />
        <meta name="keywords" content="stock average calculator, stock average down calculator, stocks price average calculator, average down stock calculator, average stock price calculator" />
        <link rel="canonical" href="https://yourdomain.com/stock-average-calculator-article" />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Article",
          "mainEntityOfPage": "https://yourdomain.com/stock-average-calculator-article",
          "headline": "Stock Average Calculator — How to Average Down & Calculate Share Price",
          "description": "Step-by-step guide to calculate average stock price, average down safely, and use a stock average calculator effectively.",
          "author": { "@type": "Person", "name": "Your Brand" },
          "publisher": { "@type": "Organization", "name": "Your Brand" }
        }`}</script>

        {/* FAQ structured data for SEO */}
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is a stock average calculator?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A stock average calculator computes your new average buy price after adding one or more purchases. It helps you understand the impact of additional buys on your cost basis."
              }
            },
            {
              "@type": "Question",
              "name": "How do I use a stock average down calculator?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Enter the quantity and price of your existing holdings and any new buys. The calculator will return the new average price, total shares, and total cost — useful when averaging down."
              }
            },
            {
              "@type": "Question",
              "name": "Is averaging down a safe strategy?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Averaging down can lower your average cost, but it increases exposure to a single stock. Consider fundamentals, risk tolerance, and have an exit plan before averaging down."
              }
            }
          ]
        }`}</script>
      </Helmet>

      <article className="prose prose-blue max-w-none">
        <header>
          <h1 className="text-2xl font-bold">Stock Average Calculator — Calculate Your New Average Price</h1>
          <p className="mt-2 text-gray-700">Use our <strong>stock average calculator</strong> (also called a <em>stock average down calculator</em> or <em>stocks price average calculator</em>) to quickly find your updated cost basis after additional buys.</p>
        </header>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Why use a stock average calculator?</h2>
          <p>
            When you buy the same stock at different prices, your overall cost per share becomes a weighted average. A <strong>stock average calculator</strong> removes manual math and shows the exact new average price, total shares you hold, and total cost. This is essential when you plan to <strong>average down</strong> during dips.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">How the calculation works</h2>
          <ol className="list-decimal list-inside">
            <li>Multiply quantity × price for each purchase to get the cost per purchase.</li>
            <li>Sum all quantities to get total shares.</li>
            <li>Sum all costs to get total cost.</li>
            <li>Divide total cost by total shares to get the average stock price.</li>
          </ol>
          <p className="mt-2">Example: Buying 100 shares at 120 and 50 shares at 100 results in a weighted average price of <strong>(100×120 + 50×100) ÷ 150 = 113.33</strong>.</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Practical tips for averaging down</h2>
          <ul className="list-disc list-inside">
            <li>Only average down if the company's fundamentals remain intact.</li>
            <li>Use a fixed budget rather than chasing falling prices endlessly.</li>
            <li>Diversify — avoid concentrating too much in a single position even when prices seem attractive.</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Try the calculator</h2>
          <p>
            Ready to compute? Use the interactive <a href="/stock-average-calculator" className="text-blue-600 hover:underline">Stock Average Calculator</a> to enter multiple buys and see live results.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">FAQ — (stock average down calculator, stocks price average calculator)</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">What is a stock average down calculator?</h3>
              <p>A tool to calculate how additional share purchases at different prices influence your overall average price.</p>
            </div>

            <div>
              <h3 className="font-medium">How many purchases can I include?</h3>
              <p>Most calculators allow multiple entries — our tool supports adding several rows so you can model many buys.</p>
            </div>

            <div>
              <h3 className="font-medium">Does the calculator show profit/loss?</h3>
              <p>You can enter the current market price in some calculators to see unrealized profit or loss based on the new average price.</p>
            </div>
          </div>
        </section>

        <footer className="mt-8 text-sm text-gray-600">
          Keywords: stock average calculator, stock average down calculator, stocks price average calculator, average down stock calculator.
        </footer>
      </article>
    </div>
  );
}
