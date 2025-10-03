import React, { useState, useMemo } from "react";

/**
 * DividendCalculatorNepal
 * - Allows decimal inputs for share quantity, bonus % and cash %
 * - Prevents multiple dots and non-numeric characters
 * - Uses parseFloat for calculations and formats outputs with Intl.NumberFormat
 */

export default function DividendCalculatorNepal() {
  // Inputs (strings to preserve user typing including partial decimals)
  const [shareQty, setShareQty] = useState("");
  const [bonusPercent, setBonusPercent] = useState("");
  const [cashPercent, setCashPercent] = useState("");
  const [paidUpValue, setPaidUpValue] = useState(100);
  const [submitted, setSubmitted] = useState(false);

  const TAX_RATE = 0.05; // 5% Nepal tax

  // sanitize to allow digits and a single dot, and to convert leading '.' to '0.'
  const sanitizeNumberInput = (val) => {
    if (typeof val !== "string") val = String(val);
    // remove everything except digits and dot
    let v = val.replace(/[^0-9.]/g, "");
    // keep only first dot
    v = v.replace(/(\..*)\./g, "$1");
    // if starts with dot, add leading zero
    if (v.startsWith(".")) v = "0" + v;
    return v;
  };

  // Handlers that sanitize input before setting state
  const handleShareQtyChange = (e) => {
    setShareQty(sanitizeNumberInput(e.target.value));
  };
  const handleBonusPercentChange = (e) => {
    setBonusPercent(sanitizeNumberInput(e.target.value));
  };
  const handleCashPercentChange = (e) => {
    setCashPercent(sanitizeNumberInput(e.target.value));
  };

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

  // numeric values used for calculations (fallback to 0 when invalid/empty)
  const numericShareQty = useMemo(
    () => (shareQty === "" ? 0 : parseFloat(shareQty) || 0),
    [shareQty]
  );
  const numericBonusPercent = useMemo(
    () => (bonusPercent === "" ? 0 : parseFloat(bonusPercent) || 0),
    [bonusPercent]
  );
  const numericCashPercent = useMemo(
    () => (cashPercent === "" ? 0 : parseFloat(cashPercent) || 0),
    [cashPercent]
  );

  // Calculations
  const bonusShares = useMemo(
    () => (numericShareQty * numericBonusPercent) / 100,
    [numericShareQty, numericBonusPercent]
  );

  const cashAmount = useMemo(
    () => (numericShareQty * paidUpValue * numericCashPercent) / 100,
    [numericShareQty, paidUpValue, numericCashPercent]
  );

  const bonusTax = useMemo(
    () => bonusShares * paidUpValue * TAX_RATE,
    [bonusShares, paidUpValue]
  );

  const cashTax = useMemo(() => cashAmount * TAX_RATE, [cashAmount]);
  const totalTax = useMemo(() => bonusTax + cashTax, [bonusTax, cashTax]);

  // Formatter with up to 2 fraction digits
  const fmt = (n) =>
    new Intl.NumberFormat("en-IN", { maximumFractionDigits: 2 }).format(
      Number(n || 0)
    );

  return (
    <div className="p-6 max-w-3xl mx-auto text-gray-900 mt-10">
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
              inputMode="decimal"
              value={shareQty}
              onChange={handleShareQtyChange}
              className="w-full p-2 border rounded mt-1 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. 123.45"
            />
            <small className="text-xs text-gray-500">
              Decimals allowed (e.g. fractional holdings)
            </small>
          </label>

          <label className="block">
            <span className="text-sm font-medium">% of Bonus Dividend</span>
            <input
              type="text"
              inputMode="decimal"
              value={bonusPercent}
              onChange={handleBonusPercentChange}
              className="w-full p-2 border rounded mt-1 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. 10 or 10.5"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">% of Cash Dividend</span>
            <input
              type="text"
              inputMode="decimal"
              value={cashPercent}
              onChange={handleCashPercentChange}
              className="w-full p-2 border rounded mt-1 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. 15 or 15.25"
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
              <span>Bonus Share Quantity</span>
              <span className="font-medium">{fmt(bonusShares)} Shares</span>
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
          </div>
        </div>
      )}

      {/* SEO Content */}
      <article className="prose max-w-none mt-20">
        <h1>About Dividend Calculator Nepal</h1>
        <p>
          This <strong>Dividend Calculator Nepal</strong> helps investors quickly
          calculate <strong>cash dividends</strong>, <strong>bonus shares</strong>,
          and <strong>5% dividend tax</strong> for NEPSE-listed companies or other
          Nepali corporations.
        </p>

        <h2>How to use the Cash & Bonus Dividend Calculator</h2>
        <ul>
          <li>Enter your <strong>share quantity</strong> (decimals allowed).</li>
          <li>Provide the <strong>bonus dividend percentage</strong> and <strong>cash dividend percentage</strong>.</li>
          <li>Select the <strong>paid-up value per share</strong> (100, 50, or 10 NPR).</li>
          <li>Click <strong>Calculate</strong> to see the dividend amounts and taxes.</li>
        </ul>

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
