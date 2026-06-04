import { useState } from 'react';

export default function BonusShareAdjustmentCalculator() {
  const [marketPrice, setMarketPrice] = useState('');
  const [bonusPercent, setBonusPercent] = useState('');
  const [result, setResult] = useState(null);

  const calculateAdjustedPrice = () => {
    const price = parseFloat(marketPrice);
    const bonus = parseFloat(bonusPercent);

    if (isNaN(price) || price <= 0 || isNaN(bonus) || bonus <= 0) {
      return;
    }

    const adjustedPrice = price / (1 + bonus / 100);
    setResult({
      marketPrice: price,
      bonusPercent: bonus,
      adjustedPrice: adjustedPrice,
    });
  };

  const clearAll = () => {
    setMarketPrice('');
    setBonusPercent('');
    setResult(null);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-200 mt-16">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Bonus Share Adjustment Calculator
      </h1>

      {/* Market Price */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Market Price (Before Book Closure)
        </label>
        <input
          type="number"
          value={marketPrice}
          onChange={(e) => setMarketPrice(e.target.value)}
          placeholder="e.g., 1500"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
        />
        <p className="text-xs text-gray-400 mt-1">Numbers only</p>
      </div>

      {/* Bonus Percentage */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          % of Bonus Share
        </label>
        <input
          type="number"
          value={bonusPercent}
          onChange={(e) => setBonusPercent(e.target.value)}
          placeholder="e.g., 25"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
        />
        <p className="text-xs text-gray-400 mt-1">Numbers only</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={calculateAdjustedPrice}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
        >
          Calculate
        </button>
        <button
          onClick={clearAll}
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded-lg transition"
        >
          Clear
        </button>
      </div>

      {/* Details Section */}
      {result && (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
          <h3 className="font-semibold text-gray-700 mb-3">Details:</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Market Price (Before Book Closure)</span>
              <span className="font-medium text-gray-900">
                {formatCurrency(result.marketPrice)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">% of Bonus Share</span>
              <span className="font-medium text-gray-900">
                {result.bonusPercent}%
              </span>
            </div>
            <div className="flex justify-between border-t border-gray-200 pt-2 mt-1">
              <span className="font-semibold text-gray-800">
                Market Price after Bonus Adjustment
              </span>
              <span className="font-bold text-green-600">
                {formatCurrency(result.adjustedPrice)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}