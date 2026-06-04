"use client";

import { useState } from "react";

export default function RightsShareAdjustmentCalculator() {
  const [marketPrice, setMarketPrice] = useState("");
  const [rightPercent, setRightPercent] = useState("");
  const [paidUpValue, setPaidUpValue] = useState("100");
  const [adjustedPrice, setAdjustedPrice] = useState(null);
  const [rightValue, setRightValue] = useState(null);

  const handleCalculate = () => {
    const mp = parseFloat(marketPrice);
    const rp = parseFloat(rightPercent);
    const puv = parseFloat(paidUpValue);

    if (isNaN(mp) || isNaN(rp) || isNaN(puv) || mp <= 0 || rp <= 0 || puv <= 0) {
      alert("Please enter valid positive numbers in all fields.");
      return;
    }

    const rightRatio = rp / 100;
    const adjPrice = (mp + puv * rightRatio) / (1 + rightRatio);
    const theoreticalRightValue = mp - adjPrice;

    setAdjustedPrice(adjPrice.toFixed(2));
    setRightValue(theoreticalRightValue.toFixed(2));
  };

  const handleClear = () => {
    setMarketPrice("");
    setRightPercent("");
    setPaidUpValue("100");
    setAdjustedPrice(null);
    setRightValue(null);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-200 mt-16">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Right Share Adjustment Calculator
      </h2>

      <div className="space-y-4">
        {/* Market Price */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Market Price (Before Book Closure)
          </label>
          <input
            type="number"
            value={marketPrice}
            onChange={(e) => setMarketPrice(e.target.value)}
            placeholder="Numbers Only"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white text-gray-900"
            style={{ appearance: "textfield", MozAppearance: "textfield" }}
            onWheel={(e) => e.target.blur()}
          />
          <p className="text-xs text-gray-400 mt-1">Numbers Only</p>
        </div>

        {/* % of Right Share */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            % of Right Share
          </label>
          <input
            type="number"
            value={rightPercent}
            onChange={(e) => setRightPercent(e.target.value)}
            placeholder="Numbers Only"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white text-gray-900"
            style={{ appearance: "textfield", MozAppearance: "textfield" }}
            onWheel={(e) => e.target.blur()}
          />
          <p className="text-xs text-gray-400 mt-1">Numbers Only</p>
        </div>

        {/* Paid-up Value per Share */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Paid-up Value per Share
          </label>
          <input
            type="number"
            value={paidUpValue}
            onChange={(e) => setPaidUpValue(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white text-gray-900"
            style={{ appearance: "textfield", MozAppearance: "textfield" }}
            onWheel={(e) => e.target.blur()}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <button
            onClick={handleCalculate}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Calculate
          </button>
          <button
            onClick={handleClear}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Results Section */}
      {(adjustedPrice !== null || rightValue !== null) && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 space-y-2">
          <h3 className="font-semibold text-gray-700">Adjusted Price (Ex‑Rights)</h3>
          <p className="text-2xl font-bold text-blue-600">
            Rs. {adjustedPrice !== null ? adjustedPrice : "—"}
          </p>
          <h3 className="font-semibold text-gray-700 mt-3">Theoretical Value of Right</h3>
          <p className="text-2xl font-bold text-green-600">
            Rs. {rightValue !== null ? rightValue : "—"}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            * Adjusted Price = (Market Price + (Right Price × Right%)) / (1 + Right%)
          </p>
        </div>
      )}
    </div>
  );
}