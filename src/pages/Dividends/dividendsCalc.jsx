import React, { useState, useMemo } from "react";

export default function DividendCalculatorNepal() {
  // Inputs
  const [shareQty, setShareQty] = useState("");
  const [bonusPercent, setBonusPercent] = useState("");
  const [cashPercent, setCashPercent] = useState("");
  const [paidUpValue, setPaidUpValue] = useState(100);
  const [submitted, setSubmitted] = useState(false);

  const TAX_RATE = 0.05; // 5% Nepal tax

  // Handle calculation
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClear = () => {
    setShareQty("");
    setBonusPercent("");
    setCashPercent("");
    setPaidUpValue(100);
    setSubmitted(false);
  };

  // Calculations
  const cashAmount = useMemo(
    () => (shareQty * paidUpValue * cashPercent) / 100 || 0,
    [shareQty, paidUpValue, cashPercent]
  );

  const bonusShares = useMemo(
    () => (shareQty * bonusPercent) / 100 || 0,
    [shareQty, bonusPercent]
  );

  const bonusTax = useMemo(
    () => bonusShares * paidUpValue * TAX_RATE,
    [bonusShares, paidUpValue]
  );

  const cashTax = useMemo(() => cashAmount * TAX_RATE, [cashAmount]);
  const totalTax = useMemo(() => bonusTax + cashTax, [bonusTax, cashTax]);

  const fmt = (n) =>
    new Intl.NumberFormat("en-IN", { maximumFractionDigits: 2 }).format(
      Number(n || 0)
    );

  return (
    <div className="p-6 max-w-3xl mx-auto text-gray-900 mt-30">
      {/* SEO optimized heading */}
      <h1 className="text-3xl font-bold mb-4 text-center">
        Dividend Calculator Nepal – Cash & Bonus Dividend Calculator
      </h1>
      <p className="mb-6 text-center text-gray-700">
        Use this free <strong>Dividend Calculator Nepal</strong> to calculate{" "}
        <strong>cash dividends</strong>, <strong>bonus shares</strong>, and the{" "}
        <strong>5% dividend tax</strong> applicable under Nepal tax laws.
      </p>

      {/* Input Form */}
      <form
        className="bg-gray-50 p-6 rounded-xl shadow mb-8 border"
        onSubmit={handleSubmit}
      >
        <h2 className="text-lg font-semibold mb-4">Enter Dividend Details</h2>

        <div className="grid sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm font-medium">Share Quantity</span>
            <input
              type="text"
              value={shareQty}
              onChange={(e) =>
                setShareQty(e.target.value.replace(/\D/, ""))
              }
              className="w-full p-2 border rounded mt-1 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Numbers Only"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">% of Bonus Dividend</span>
            <input
              type="text"
              value={bonusPercent}
              onChange={(e) =>
                setBonusPercent(e.target.value.replace(/\D/, ""))
              }
              className="w-full p-2 border rounded mt-1 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. 10"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">% of Cash Dividend</span>
            <input
              type="text"
              value={cashPercent}
              onChange={(e) =>
                setCashPercent(e.target.value.replace(/\D/, ""))
              }
              className="w-full p-2 border rounded mt-1 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. 15"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Paid-up Value per Share</span>
            <select
              value={paidUpValue}
              onChange={(e) => setPaidUpValue(Number(e.target.value))}
              className="w-full p-2 border rounded mt-1 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={100}>100 NPR</option>
              <option value={50}>50 NPR</option>
              <option value={10}>10 NPR</option>
            </select>
          </label>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Calculate
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
          >
            Clear
          </button>
        </div>
      </form>

      {/* Results */}
      {submitted && (
        <div className="bg-white p-6 rounded-xl shadow border mb-8">
          <h2 className="text-lg font-semibold mb-4">Dividend Details</h2>

          <div className="space-y-3">
            <div className="flex justify-between border-b pb-2">
              <span>Cash Amount</span>
              <span className="font-medium">{fmt(cashAmount)} NPR</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>Bonus Share Tax (5%)</span>
              <span className="font-medium text-red-600">{fmt(bonusTax)} NPR</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>Cash Amount Tax (5%)</span>
              <span className="font-medium text-red-600">{fmt(cashTax)} NPR</span>
            </div>
            <div className="flex justify-between border-b pb-2 font-semibold">
              <span>Total Payable Tax</span>
              <span>{fmt(totalTax)} NPR</span>
            </div>
            <div className="flex justify-between">
              <span>Receivable Bonus Quantity</span>
              <span className="font-medium">{fmt(bonusShares)} Shares</span>
            </div>
          </div>
        </div>
      )}

      {/* SEO Content */}
      <article className="prose max-w-none mt-25">
        <h1>About Dividend Calculator Nepal</h1>
        <br></br>
        <p>
          This <strong>Dividend Calculator Nepal</strong> helps investors quickly
          calculate <strong>cash dividends</strong>, <strong>bonus shares</strong>,
          and <strong>5% dividend tax</strong> for NEPSE-listed companies or other
          Nepali corporations.
        </p>
        <br></br>
        <h2>How to use the Cash & Bonus Dividend Calculator</h2>
        <br></br>
        <ul>
          <li>Enter your <strong>share quantity</strong>.</li>
          <li>Provide the <strong>bonus dividend percentage</strong> and <strong>cash dividend percentage</strong>.</li>
          <li>Select the <strong>paid-up value per share</strong> (100, 50, or 10 NPR).</li>
          <li>Click <strong>Calculate</strong> to see the dividend amounts and taxes.</li>
        </ul>
        <br></br>
        <h3>Key Points</h3>
        <p>
          Dividend Calculator Nepal, Cash Dividend Calculator, Bonus Dividend Calculator, 
          NEPSE Dividend Calculator, Share Dividend Nepal
        </p>
        <div className="text-sm text-gray-600 mt-4">
          <strong>Disclaimer:</strong> This calculator is for educational purposes only. Tax rules may change — verify with official sources before making financial decisions.
        </div>
      </article>
    </div>
  );
}
