import React from "react";
import { Helmet } from "react-helmet-async";

export default function BonusAdjustmentArticlePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Bonus Price Adjustment: Complete Guide to Share Price After Bonus Issue",
    description: "Learn how bonus issues affect share prices, understand the adjustment formula, see real examples, and get answers to common questions about bonus shares.",
    author: { "@type": "Organization", name: "Your Brand Name" },
    datePublished: "2026-06-03",
    mainEntityOfPage: "https://prakash404.com.np/bonus-price-adjustment-guide",
    image: "https://prakash404.com.np/bonus-share-guide-og.jpg",
  };

  return (
    <>
      <Helmet>
        <title>Bonus Price Adjustment Guide | How Bonus Issues Affect Share Prices</title>
        <meta name="description" content="Complete guide to bonus price adjustment. Learn the formula behind adjusted share price after bonus issue, see examples, and understand why companies issue bonus shares." />
        <meta name="keywords" content="bonus price adjustment, bonus share price calculation, adjusted share price, bonus issue formula, stock price after bonus" />
        <meta name="author" content="Your Brand Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://prakash404.com.np/bonus-price-adjustment-guide" />
        <meta property="og:title" content="Bonus Price Adjustment Guide | How Bonus Issues Affect Share Prices" />
        <meta property="og:description" content="Understand the exact formula used to adjust share prices after a bonus announcement. Includes real-world examples and FAQs." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://prakash404.com.np/bonus-price-adjustment-guide" />
        <meta property="og:image" content="https://prakash404.com.np/bonus-share-guide-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bonus Price Adjustment Guide" />
        <meta name="twitter:description" content="Learn how bonus issues affect share prices with formula, examples, and detailed explanations." />
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      </Helmet>

      <div className="p-6 max-w-4xl mx-auto text-gray-900">
        {/* SEO Optimized Title */}
        <h1 className="text-3xl font-bold mb-4 text-center">
          Bonus Price Adjustment – Complete Guide to Share Price After Bonus Issue
        </h1>

        <p className="mb-6 text-gray-700 text-center">
          Understand how <strong>bonus issues</strong> affect share prices. Learn the exact formula, see real examples, 
          and discover why companies issue bonus shares – all in one simple guide.
        </p>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">What Is a Bonus Issue?</h2>
          <p className="text-gray-700">
            A <strong>bonus issue</strong> (also called a <em>scrip issue</em> or <em>capitalization issue</em>) occurs 
            when a company distributes additional free shares to existing shareholders in proportion to their holdings. 
            For example, a <strong>1:1 bonus</strong> means you receive one extra share for every share you already own.
          </p>
          <p className="text-gray-700 mt-2">
            While the number of shares increases, the company’s total market capitalization remains unchanged. 
            Therefore, the share price <strong>adjusts downward</strong> to reflect the larger number of shares outstanding.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">The Bonus Price Adjustment Formula</h2>
          <p className="text-gray-700">
            The adjusted price after a bonus issue is based on <strong>market capitalization conservation</strong>:
          </p>
          <div className="bg-gray-100 p-4 rounded-md my-4 text-center font-mono text-lg">
            Adjusted Price = Old Price ÷ (1 + Bonus Percentage / 100)
          </div>
          <p className="text-gray-700">
            For instance, a <strong>1:2 bonus</strong> (1 bonus share for every 2 held) equals a 50% bonus. 
            If the old price is ₹1,200, the adjusted price becomes ₹1,200 / 1.5 = <strong>₹800</strong>.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">How to Calculate Adjusted Price – Step by Step</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Step 1:</strong> Find the bonus percentage – e.g., a 2:5 bonus = 40%.</li>
            <li><strong>Step 2:</strong> Note the current share price – e.g., ₹500.</li>
            <li><strong>Step 3:</strong> Apply formula: ₹500 / (1 + 0.40) = ₹500 / 1.40 = <strong>₹357.14</strong>.</li>
          </ul>
          <p className="text-gray-700 mt-3">
            If you held 100 shares before the bonus, you receive 40 bonus shares (total 140 shares). 
            Your total investment value remains the same: 100 × ₹500 = ₹50,000 before; 140 × ₹357.14 ≈ ₹50,000 after.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Why Do Companies Issue Bonus Shares?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <span className="font-bold text-green-600">✓</span> <strong>Improve Liquidity</strong> – More shares available for trading.
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <span className="font-bold text-green-600">✓</span> <strong>Affordable Price</strong> – Lower per‑share price attracts retail investors.
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <span className="font-bold text-green-600">✓</span> <strong>Signal Confidence</strong> – Shows strong retained earnings and future prospects.
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <span className="font-bold text-green-600">✓</span> <strong>No Cash Outflow</strong> – Rewards shareholders without spending cash.
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Bonus vs. Stock Split – What’s the Difference?</h2>
          <p className="text-gray-700 mb-3">
            Many investors confuse bonus issues with stock splits. Here’s a quick comparison:
          </p>
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-2 text-left">Aspect</th>
                <th className="border border-gray-300 p-2 text-left">Bonus Issue</th>
                <th className="border border-gray-300 p-2 text-left">Stock Split</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Accounting Entry</td>
                <td className="border border-gray-300 p-2">Reserves converted to share capital</td>
                <td className="border border-gray-300 p-2">No change – only par value adjusted</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Total Shareholder Value</td>
                <td className="border border-gray-300 p-2">Unchanged</td>
                <td className="border border-gray-300 p-2">Unchanged</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Reason</td>
                <td className="border border-gray-300 p-2">Capitalize retained earnings</td>
                <td className="border border-gray-300 p-2">Make price more accessible</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Common Questions About Bonus Adjustments</h2>
          
          <h3 className="text-xl font-semibold mb-1">1. Does the total value of my investment change after a bonus?</h3>
          <p className="text-gray-700 mb-3">
            No. Immediately after the bonus, the total value stays the same because the share price adjusts proportionally. 
            Future price movements determine actual gains or losses.
          </p>

          <h3 className="text-xl font-semibold mb-1">2. When does the price adjustment happen?</h3>
          <p className="text-gray-700 mb-3">
            On the <strong>ex‑bonus date</strong>. If you buy shares on or after that date, you are not entitled to the bonus shares, 
            and the price already reflects the adjustment.
          </p>

          <h3 className="text-xl font-semibold mb-1">3. Can a bonus issue be in fractions?</h3>
          <p className="text-gray-700 mb-3">
            Generally, bonus shares are issued in whole numbers. Any fractional entitlement is usually settled in cash or rounded down.
          </p>

          <h3 className="text-xl font-semibold mb-1">4. Is a bonus issue good or bad for investors?</h3>
          <p className="text-gray-700">
            It is generally positive for liquidity and may indicate a healthy company, but it does not add immediate value. 
            Over time, if the company performs well, the price may rise from the adjusted level.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Why Use a Bonus Price Adjustment Guide?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Estimate the corrected share price accurately.</li>
            <li>Understand the impact of bonus announcements on your portfolio.</li>
            <li>Make informed investment decisions based on post-bonus valuations.</li>
          </ul>
        </section>

        {/* SEO Keywords Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Key Points</h2>
          <p className="text-gray-700">
            Bonus price adjustment, share price after bonus, bonus issue formula, adjusted share price, 
            stock price calculation, bonus shares Nepal, NEPSE bonus adjustment.
          </p>
        </section>

        {/* Disclaimer */}
        <div className="text-sm text-gray-600 mt-4 pt-4 border-t border-gray-200">
          <strong>Disclaimer:</strong> This article is for informational purposes only. Bonus rules and tax treatments may vary. 
          Always consult official sources or a financial advisor before making investment decisions.
        </div>
      </div>
    </>
  );
}