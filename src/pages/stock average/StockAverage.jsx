import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

export default function StockAverageCalculator() {
  const [stocks, setStocks] = useState([
    { quantity: '', price: '' },
    { quantity: '', price: '' }
  ]);

  const [result, setResult] = useState(null);

  const handleChange = (index, field, value) => {
    const newStocks = [...stocks];
    newStocks[index][field] = value.replace(/[^0-9.]/g, '');
    setStocks(newStocks);
  };

  const addStock = () => {
    setStocks([...stocks, { quantity: '', price: '' }]);
  };

  const removeStock = (index) => {
    if (stocks.length === 1) return;
    setStocks(prev => prev.filter((_, idx) => idx !== index));
  };

  const reset = () => {
    setStocks([
      { quantity: '', price: '' },
      { quantity: '', price: '' }
    ]);
    setResult(null);
  };

  const calculate = () => {
    let totalShares = 0;
    let totalCost = 0;

    stocks.forEach((s) => {
      const q = parseFloat(s.quantity || '0');
      const p = parseFloat(s.price || '0');
      totalShares += q;
      totalCost += q * p;
    });

    if (totalShares === 0) {
      setResult(null);
      return;
    }

    setResult({
      average: totalCost / totalShares,
      totalShares,
      totalCost,
    });
  };

  const format = (n) => {
    if (!isFinite(n)) return '-';
    return n.toLocaleString(undefined, {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
  };

  return (
    <>
      <Helmet>
        <title>Stock Average Calculator — Calculate Share Price Average Easily</title>
        <meta name="description" content="Free Stock Average Calculator — compute your average buy price, average down, and total cost. Use the stock average down calculator and stocks price average calculator to manage your investments." />
        <meta name="keywords" content="stock average calculator, stock average down calculator, stocks price average calculator, average stock price calculator, share average calculator" />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Stock Average Calculator",
          "url": "https://yourdomain.com/stock-average-calculator",
          "description": "An easy stock average calculator to compute new average price after additional buys (average down)."
        }`}</script>
      </Helmet>

      <div className="max-w-lg mx-auto bg-white border border-gray-600 rounded-lg shadow p-6 mt-30">
        <h1 className="text-xl font-semibold mb-6 text-gray-800">Stock Average Calculator</h1>

        {stocks.map((stock, i) => (
          <div
            key={i}
            className="mb-6 p-4 rounded-md border border-gray-600 bg-white shadow-sm relative"
          >
            <label className="block mb-3">
              <span className="block text-sm font-medium text-gray-700 mb-1">Stock Quantity</span>
              <input
                type="text"
                value={stock.quantity}
                onChange={(e) => handleChange(i, 'quantity', e.target.value)}
                placeholder="e.g. 100"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </label>
            <label className="block">
              <span className="block text-sm font-medium text-gray-700 mb-1">Price per Stock</span>
              <input
                type="text"
                value={stock.price}
                onChange={(e) => handleChange(i, 'price', e.target.value)}
                placeholder="e.g. 120.50"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </label>

            {/* Delete / remove row button */}
            <button
              onClick={() => removeStock(i)}
              aria-label={`Remove stock row ${i + 1}`}
              className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-red-500 hover:text-white transition"
              title="Remove this stock"
            >
              ✕
            </button>
          </div>
        ))}

        <button
          onClick={addStock}
          className="text-sm text-blue-600 hover:underline mb-6"
        >
          + Add More Stocks
        </button>

        <div className="flex gap-4 mt-4 mb-6">
          <button
            onClick={calculate}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium"
          >
            Calculate
          </button>
          <button
            onClick={reset}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-medium"
          >
            Reset
          </button>
        </div>

        {/* SEO friendly explanatory content containing target keywords */}
        <div className="text-sm text-gray-600 mb-4">
          <p>
            Use this <strong>stock average calculator</strong> to quickly compute your new average price after additional purchases. This <strong>stock average down calculator</strong> and <strong>stocks price average calculator</strong> helps investors see how buying more shares affects their overall cost basis.
          </p>
          <p className="mt-2">
            Enter multiple stock purchases and click Calculate. The tool will provide the <em>average stock price</em>, <em>total shares</em>, and <em>total cost</em> to help with investment decisions.
          </p>
        </div>

        {result && (
          <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md" role="status" aria-live="polite">
            <p className="text-sm text-gray-600">New Average Price</p>
            <p className="text-lg font-semibold text-gray-800">{format(result.average)}</p>

            <p className="text-sm text-gray-600 mt-2">Total Shares</p>
            <p className="text-lg font-semibold text-gray-800">{format(result.totalShares)}</p>

            <p className="text-sm text-gray-600 mt-2">Total Cost</p>
            <p className="text-lg font-semibold text-gray-800">{format(result.totalCost)}</p>
          </div>
        )}
      </div>
    </>
  );
}