"use client";

import React from "react";
import { Helmet } from "react-helmet-async";
 // adjust import path

export default function RightsShareAdjustmentArticle() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Rights Share Adjustment Calculator – Guide to Adjusted Share Price",
    description: "Free online calculator to find adjusted share price after a rights issue. Learn the formula, see examples, and understand the theoretical value of rights shares.",
    author: { "@type": "Organization", name: "Your Brand Name" },
    datePublished: "2026-06-03",
    mainEntityOfPage: "https://prakash404.com.np/rights-share-adjustment-calculator",
    image: "https://prakash404.com.np/rights-share-guide-og.jpg",
  };

  return (
    <>
      <Helmet>
        <title>Rights Share Adjustment Calculator | Adjusted Share Price After Rights Issue</title>
        <meta
          name="description"
          content="Calculate the adjusted market price after a rights share issue and the theoretical value of each right. Free online tool with formula, examples, and detailed guide."
        />
        <meta
          name="keywords"
          content="rights share adjustment calculator, adjusted share price, rights issue formula, theoretical value of right, ex-rights price, Nepal rights share"
        />
        <meta name="author" content="Your Brand Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://prakash404.com.np/rights-share-adjustment-calculator" />
        <meta property="og:title" content="Rights Share Adjustment Calculator – Free Tool & Guide" />
        <meta
          property="og:description"
          content="Easily compute the adjusted share price after a rights issue. Instant results with formula breakdown and real examples."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prakash404.com.np/rights-share-adjustment-calculator" />
        <meta property="og:image" content="https://prakash404.com.np/rights-share-guide-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rights Share Adjustment Calculator" />
        <meta name="twitter:description" content="Free tool to calculate adjusted share price and theoretical value of rights shares." />
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Rights Share Adjustment Calculator & Guide
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Understand how a rights issue affects your share price. Use our free calculator to find the 
            <strong> adjusted share price (ex‑rights price)</strong> and the 
            <strong> theoretical value of each right</strong>.
          </p>
        </div>

        {/* Two‑column layout: Left = Article, Right = Calculator */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Section 1 – What is a Rights Issue */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-blue-500 pl-3 mb-3">
                What Is a Rights Issue?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                A <strong>rights issue</strong> is a corporate action where a company offers existing shareholders the 
                right to purchase additional shares at a discounted price, typically in proportion to their current holdings. 
                For example, a <strong>1:2 rights issue</strong> means you can buy 1 new share for every 2 shares you already own.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                This method allows companies to raise capital without diluting existing shareholders disproportionately – 
                those who don't subscribe can sell their rights in the market.
              </p>
            </section>

            {/* Section 2 – How the Adjusted Price Is Calculated */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-blue-500 pl-3 mb-3">
                Formula for Adjusted Share Price
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The adjusted price (also called the <strong>ex‑rights price</strong>) is the weighted average of the old market price 
                and the rights issue price, based on the number of shares.
              </p>
              <div className="bg-gray-700 p-4 rounded-md my-4 text-center font-mono text-base md:text-lg">
                Adjusted Price = (Current Price × Existing Shares + Rights Price × Rights Shares) / (Existing Shares + Rights Shares)
              </div>
              <p className="text-gray-700 leading-relaxed mt-2">
                The <strong>theoretical value of a right</strong> is simply the difference between the current market price 
                and the adjusted price: <code className="bg-gray-100 px-1">Theoretical Right Value = Current Price – Adjusted Price</code>.
              </p>
            </section>

            {/* Section 3 – Example */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-blue-500 pl-3 mb-3">
                Real‑World Example
              </h2>
              <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <p className="font-semibold text-blue-800">📊 Suppose:</p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Current Market Price = <strong>Rs. 1,000</strong></li>
                  <li>Rights Issue Price = <strong>Rs. 500</strong></li>
                  <li>Existing Shares Held = <strong>10 shares</strong></li>
                  <li>Rights Shares Offered = <strong>3 shares</strong> (i.e., 3:10 ratio)</li>
                </ul>
                <p className="mt-3 text-gray-700">
                  Adjusted Price = (1000×10 + 500×3) / (10+3) = (10,000 + 1,500) / 13 = <strong>Rs. 884.62</strong><br />
                  Theoretical Right Value = 1000 – 884.62 = <strong>Rs. 115.38</strong>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Each right (entitlement to buy one new share) is theoretically worth Rs. 115.38. Shareholders can sell their rights if they don’t want to subscribe.
                </p>
              </div>
            </section>

            {/* Section 4 – Why Companies Issue Rights Shares */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-blue-500 pl-3 mb-3">
                Why Do Companies Use Rights Issues?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <span className="font-bold text-green-600">✓</span> <span className="font-bold text-gray-600"><strong>Raise Capital</strong> – Funds for expansion, debt repayment, or working capital. </span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <span className="font-bold text-green-600">✓</span> <span className="font-bold text-gray-600"><strong>Fair Treatment</strong> – Existing shareholders get first priority, avoiding dilution. </span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <span className="font-bold text-green-600">✓</span> <span className="font-bold text-gray-600"><strong>Lower Cost</strong> – Rights issues are cheaper than public offers (no underwriting fees in many cases). </span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <span className="font-bold text-green-600">✓</span> <span className="font-bold text-gray-600"><strong>Discount Incentive</strong> – Shareholders are encouraged to participate due to the discounted price. </span>
                </div>
              </div>
            </section>

            {/* Section 5 – Frequently Asked Questions */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-blue-500 pl-3 mb-3">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">1. What is the ex‑rights date?</h3>
                  <p className="text-gray-700">
                    The ex‑rights date is the first day when shares trade without the rights entitlement. If you buy shares on or after this date, you will not receive the rights.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">2. Can I sell my rights?</h3>
                  <p className="text-gray-700">
                    Yes, rights are usually tradable on the stock exchange during the rights trading period. You can sell your rights to other investors.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">3. What happens if I ignore a rights issue?</h3>
                  <p className="text-gray-700">
                    If you do nothing, your rights may expire worthless, or the company may sell them on your behalf and give you the proceeds (depending on regulations). However, your shareholding will be diluted because more shares are issued.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">4. Is the theoretical right value always accurate?</h3>
                  <p className="text-gray-700">
                    No, it is a theoretical calculation based on the current market price just before the ex‑rights date. Actual market prices can differ due to supply/demand, company news, and market sentiment.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 – SEO Keywords */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-blue-500 pl-3 mb-3">
                Key Terms
              </h2>
              <p className="text-gray-700">
                Rights share adjustment, adjusted share price, ex‑rights price, theoretical value of right, rights issue formula, 
                rights trading Nepal, NEPSE rights adjustment, share dilution calculator.
              </p>
            </section>
          </div>

          {/* Right Column – Calculator Sidebar */}
          
        </div>

        {/* Disclaimer Footer */}
        <footer className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-500">
          <p>
            <strong>Disclaimer:</strong> This tool and article are for educational purposes only. Rights issue terms, tax treatments, 
            and market prices may vary. Always consult a financial advisor before making investment decisions.
          </p>
          
        </footer>
      </div>
    </>
  );
}