import React from "react";

export default function DividendArticle() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-900">
      {/* SEO Optimized Title */}
      <h1 className="text-3xl font-bold mb-4 text-center">
        Dividend Calculator Nepal – Cash & Bonus Dividend Guide
      </h1>

      <p className="mb-6 text-gray-700 text-center">
        Discover how to use a <strong>Dividend Calculator in Nepal</strong> to estimate 
        <strong> cash dividends</strong>, <strong>bonus shares</strong>, and 
        understand tax implications for NEPSE-listed companies.
      </p>

      {/* Section 1 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">What Is a Dividend Calculator?</h2>
        <p className="text-gray-700">
          A <strong>dividend calculator</strong> is a tool that helps investors calculate the income 
          they can expect from stocks based on declared dividends. In Nepal, this is especially useful 
          for NEPSE-listed companies.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Types of Dividends in Nepal</h2>
        <h3 className="text-xl font-semibold mb-2">Cash Dividend</h3>
        <p className="text-gray-700">
          Cash dividends are payments made from company profits directly to shareholders. They are usually 
          declared as a percentage of the share's face value.
        </p>

        <h3 className="text-xl font-semibold mb-2 mt-4">Bonus Shares</h3>
        <p className="text-gray-700">
          Bonus shares are additional shares given to existing shareholders without cost. This increases 
          the total number of shares held and is commonly used by Nepali companies to reward shareholders.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">How to Use a Dividend Calculator in Nepal</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Enter your <strong>Share Quantity</strong>.</li>
          <li>Provide the <strong>Bonus Dividend Percentage</strong> and <strong>Cash Dividend Percentage</strong>.</li>
          <li>Select the <strong>Paid-up Value per Share</strong> (100, 50, or 10 NPR).</li>
        </ul>

        <p className="mt-4 text-gray-700">
          The calculator will show <strong>Cash Amount</strong>, <strong>Bonus Share Tax (5%)</strong>, 
          <strong>Cash Amount Tax (5%)</strong>, <strong>Total Payable Tax</strong>, and 
          <strong>Receivable Bonus Quantity</strong>.
        </p>
      </section>

      {/* Section 4 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Example Calculation</h2>
        <p className="text-gray-700">
          Suppose you own 100 shares with a 20% cash dividend, 10% bonus shares, and a paid-up value of 100 NPR. 
          With 5% tax:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li>Total Cash Dividend: Rs. 2,000</li>
          <li>Total Bonus Shares: 10 shares</li>
          <li>Cash Dividend Tax (5%): Rs. 100</li>
          <li>Bonus Share Tax (5%): Rs. 50</li>
          <li>Total Payable Tax: Rs. 150</li>
        </ul>
      </section>

      {/* Section 5 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Common Questions About Dividend Calculators</h2>
        <h3 className="text-xl font-semibold mb-1">1. How do dividends work in NEPSE?</h3>
        <p className="text-gray-700">
          Dividends are declared by companies based on annual profits. Shareholders receive dividends proportional 
          to their holdings.
        </p>

        <h3 className="text-xl font-semibold mb-1 mt-3">2. Are dividends taxable in Nepal?</h3>
        <p className="text-gray-700">
          Yes, dividends are subject to a 5% tax in Nepal, which applies to both cash and bonus dividends.
        </p>

        <h3 className="text-xl font-semibold mb-1 mt-3">3. Can I reinvest dividends?</h3>
        <p className="text-gray-700">
          NEPSE does not provide an automatic reinvestment plan. Investors can manually reinvest dividends 
          by purchasing additional shares.
        </p>
      </section>

      {/* Section 6 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Why Use a Dividend Calculator?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Estimate your income from shares accurately.</li>
          <li>Plan for taxes effectively.</li>
          <li>Make informed investment decisions based on dividend returns.</li>
        </ul>
      </section>

      {/* SEO Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Keywords for SEO</h2>
        <p className="text-gray-700">
          Dividend Calculator Nepal, Cash Dividend Calculator, Bonus Dividend Calculator, NEPSE Dividend Calculator, 
          Share Dividend Nepal
        </p>
      </section>

      <div className="text-sm text-gray-600 mt-4">
        <strong>Disclaimer:</strong> This article is for informational purposes only. Dividend rules and taxes may change. 
        Always consult official sources or a tax advisor before making financial decisions.
      </div>
    </div>
  );
}
