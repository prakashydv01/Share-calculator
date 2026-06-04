import { useState } from 'react';

const NepalStockCalculator = () => {
  const [mode, setMode] = useState('buy');
  const [calculated, setCalculated] = useState(false);
  
  // Buy Section State
  const [buyPrice, setBuyPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  
  // Sell Section State
  const [investorType, setInvestorType] = useState('individual');
  const [sellPrice, setSellPrice] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');

  // Constants
  const DP_CHARGE = 25;
  const SEBON_FEE = 0.015; // 0.015%
  const CAPITAL_GAIN_TAX_RATE = 0.075; // 7.5%

  // Calculate broker commission based on amount (Nepal rates)
  const calculateBrokerCommission = (amount) => {
    amount = parseFloat(amount) || 0;
    if (amount <= 50000) return amount * 0.0036;
    if (amount <= 500000) return amount * 0.0033;
    if (amount <= 2000000) return amount * 0.0031;
    if (amount <= 10000000) return amount * 0.0027;
    return amount * 0.0024;
  };

  // Format currency in English
  const formatNPR = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'NPR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  // Buy Calculations
  const calculateBuyDetails = () => {
    const qty = parseFloat(quantity) || 0;
    const price = parseFloat(buyPrice) || 0;
    const amount = qty * price;
    const commission = calculateBrokerCommission(amount);
    const sebonFeeAmount = (amount * SEBON_FEE) / 100;
    const totalAmount = amount + commission + DP_CHARGE + sebonFeeAmount;
    const actualPricePerShare = qty > 0 ? totalAmount / qty : 0;

    return {
      amount,
      commission,
      sebonFeeAmount,
      actualPricePerShare,
      totalAmount
    };
  };

  // Sell Calculations
  const calculateSellDetails = () => {
    const qty = parseFloat(quantity) || 0;
    const sell = parseFloat(sellPrice) || 0;
    const enteredPurchase = parseFloat(purchasePrice) || 0;

    // --- Convert entered purchase price into WACC price ---
    const amount = qty * enteredPurchase;
    const commissionOnBuy = calculateBrokerCommission(amount);
    const sebonFeeOnBuy = (amount * SEBON_FEE) / 100;
    const totalBuyAmount = amount + commissionOnBuy + DP_CHARGE + sebonFeeOnBuy;
    const waccPrice = qty > 0 ? totalBuyAmount / qty : 0;
    // ------------------------------------------------------

    const saleAmount = qty * sell;
    const purchaseAmount = qty * waccPrice;
    const commissionOnSell = calculateBrokerCommission(saleAmount);
    const sebonFeeOnSell = (saleAmount * SEBON_FEE) / 100;
    const profitBeforeTax = saleAmount - purchaseAmount - commissionOnSell - DP_CHARGE - sebonFeeOnSell;
    const capitalGainTax = profitBeforeTax > 0 ? profitBeforeTax * CAPITAL_GAIN_TAX_RATE : 0;
    const profit = saleAmount - purchaseAmount - commissionOnSell - DP_CHARGE - sebonFeeOnSell- capitalGainTax;
    const netAmount = saleAmount - commissionOnSell - DP_CHARGE - sebonFeeOnSell - capitalGainTax;

    return {
      saleAmount,
      purchaseAmount,
      commissionOnSell,
      sebonFeeOnSell,
      profitBeforeTax,
      profit,
      capitalGainTax,
      netAmount,
      waccPrice
    };
  };

  const handleCalculate = () => {
    if (
      (mode === 'buy' && buyPrice && quantity) ||
      (mode === 'sell' && sellPrice && purchasePrice && quantity)
    ) {
      setCalculated(true);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br text-center from-gray-50 to-blue-50 py-8 px-4 font-sans mt-8">
      <title>Nepal Share Calculator</title>
      <meta 
        name="description" 
        content="Nepal Stock Buy/Sell Calculator - Calculate total costs, commissions, taxes, and net amounts for stock transactions in Nepal."
      />

      <div className="max-w-lg mx-auto">
        {/* Card Container */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="p-6 pb-0">
            <div className="flex items-center justify-center mb-2">
              <svg className="w-8 h-8 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700">
                Nepal Share Calculator
              </h1>
            </div>
            <p className="text-center text-sm text-gray-500 mb-6">
              Buy & sell cost estimation with taxes and commissions
            </p>

            {/* Mode Toggle - Segmented Control Style */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 p-1 rounded-xl inline-flex shadow-inner">
                <button
                  onClick={() => { setMode('buy'); setCalculated(false); }}
                  className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 flex items-center gap-2 ${
                    mode === 'buy'
                      ? 'bg-white text-blue-700 shadow-md'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                  Buy
                </button>
                <button
                  onClick={() => { setMode('sell'); setCalculated(false); }}
                  className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 flex items-center gap-2 ${
                    mode === 'sell'
                      ? 'bg-white text-green-700 shadow-md'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Sell
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 pt-0">
            {/* Buy Section */}
            {mode === 'buy' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Buy Price per Share (NPR)
                    </label>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={buyPrice}
                      onChange={(e) => { setBuyPrice(e.target.value); setCalculated(false); }}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-gray-900 placeholder:text-gray-400 transition-all [appearance:textfield]"
                      placeholder="e.g., 2,500.00"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Quantity (Kitta)
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={quantity}
                      onChange={(e) => { setQuantity(e.target.value); setCalculated(false); }}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-gray-900 placeholder:text-gray-400 transition-all [appearance:textfield]"
                      placeholder="e.g., 100"
                    />
                  </div>
                </div>
                
                <button
                  onClick={handleCalculate}
                  disabled={!buyPrice || !quantity}
                  className={`w-full py-3.5 px-6 rounded-xl text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
                    !buyPrice || !quantity
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Calculate Buy Cost
                </button>
                
                {/* Buy Results */}
                {calculated && (
                  <div className="mt-4 bg-gradient-to-br from-blue-50 to-blue-100/50 p-5 rounded-2xl border border-blue-200 shadow-inner">
                    <h3 className="text-sm font-semibold text-blue-800 mb-4">Purchase Breakdown</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Amount (Excl. Fees)</span>
                        <span className="font-medium text-gray-900">{formatNPR(calculateBuyDetails().amount)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">DP Charge</span>
                        <span className="font-medium text-gray-900">{formatNPR(DP_CHARGE)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">SEBON Fee (0.015%)</span>
                        <span className="font-medium text-gray-900">{formatNPR(calculateBuyDetails().sebonFeeAmount)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Broker Commission</span>
                        <span className="font-medium text-gray-900">{formatNPR(calculateBuyDetails().commission)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">WACC Price/Share</span>
                        <span className="font-medium text-blue-700">{formatNPR(calculateBuyDetails().actualPricePerShare)}</span>
                      </div>
                      <div className="pt-3 mt-3 border-t border-blue-200 flex justify-between">
                        <span className="text-base font-semibold text-gray-800">Total Payable</span>
                        <span className="text-lg font-bold text-blue-700">{formatNPR(calculateBuyDetails().totalAmount)}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Sell Section */}
            {mode === 'sell' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Sale Price per Share (NPR)
                    </label>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={sellPrice}
                      onChange={(e) => { setSellPrice(e.target.value); setCalculated(false); }}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 text-gray-900 placeholder:text-gray-400 transition-all [appearance:textfield]"
                      placeholder="e.g., 3,200.00"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Original Purchase Price (NPR)
                    </label>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={purchasePrice}
                      onChange={(e) => { setPurchasePrice(e.target.value); setCalculated(false); }}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 text-gray-900 placeholder:text-gray-400 transition-all [appearance:textfield]"
                      placeholder="e.g., 2,500.00"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Quantity (Kitta)
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={quantity}
                      onChange={(e) => { setQuantity(e.target.value); setCalculated(false); }}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 text-gray-900 placeholder:text-gray-400 transition-all [appearance:textfield]"
                      placeholder="e.g., 100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Investor Type
                    </label>
                    <select
                      value={investorType}
                      onChange={(e) => { setInvestorType(e.target.value); setCalculated(false); }}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 text-gray-900 cursor-pointer transition-all"
                    >
                      <option value="individual">Individual</option>
                      <option value="institution">Institution</option>
                    </select>
                  </div>
                </div>
                
                {/* Tax Note */}
                <div className="flex items-start gap-2 p-3 bg-amber-50 rounded-xl border border-amber-200 text-sm text-amber-800">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>
                    Capital gain tax of <strong>7.5%</strong> applies for holdings less than 365 days. 
                    Purchase price is internally adjusted to WACC (Weighted Average Cost of Capital).
                  </p>
                </div>
                
                <button
                  onClick={handleCalculate}
                  disabled={!sellPrice || !purchasePrice || !quantity}
                  className={`w-full py-3.5 px-6 rounded-xl text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
                    !sellPrice || !purchasePrice || !quantity
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-lg shadow-green-500/30 hover:shadow-green-500/40 hover:-translate-y-0.5 active:translate-y-0'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                  Calculate Sale Details
                </button>
                
                {/* Sell Results */}
                {calculated && (
                  <div className="mt-4 bg-gradient-to-br from-green-50 to-emerald-100/50 p-5 rounded-2xl border border-green-200 shadow-inner">
                    <h3 className="text-sm font-semibold text-green-800 mb-4">Sale Breakdown</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Gross Sale Amount</span>
                        <span className="font-medium text-gray-900">{formatNPR(calculateSellDetails().saleAmount)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Adjusted Purchase Price (WACC)</span>
                        <span className="font-medium text-green-800">{formatNPR(calculateSellDetails().waccPrice)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Total Purchase Value</span>
                        <span className="font-medium text-gray-900">{formatNPR(calculateSellDetails().purchaseAmount)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">DP Charge</span>
                        <span className="font-medium text-gray-900">{formatNPR(DP_CHARGE)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">SEBON Fee (0.015%)</span>
                        <span className="font-medium text-gray-900">{formatNPR(calculateSellDetails().sebonFeeOnSell)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Broker Commission</span>
                        <span className="font-medium text-gray-900">{formatNPR(calculateSellDetails().commissionOnSell)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Capital Gain Tax (7.5%)</span>
                        <span className="font-medium text-red-600">{formatNPR(calculateSellDetails().capitalGainTax)}</span>
                      </div>
                      <div className="flex justify-between text-sm font-semibold">
                        <span className="text-gray-700">Profit / Loss</span>
                        <span className={`${
                          calculateSellDetails().profit >= 0 ? 'text-emerald-700' : 'text-red-700'
                        }`}>
                          {formatNPR(calculateSellDetails().profit)}
                        </span>
                      </div>
                      <div className="pt-3 mt-3 border-t border-green-200 flex justify-between">
                        <span className="text-base font-semibold text-gray-800">Net Amount You Receive</span>
                        <span className="text-lg font-bold text-green-700">{formatNPR(calculateSellDetails().netAmount)}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong>Fees & Rates:</strong> DP charge NPR 25, SEBON fee 0.015%. 
              Broker commission: 0.36% (≤50k), 0.33% (50k–500k), 0.31% (500k–2M), 0.27% (2M–10M), 0.24% (&gt;10M). 
              All calculations are for estimation purposes only.
            </p>
          </div>
        </div>
        
        <p className="text-center text-xs text-gray-400 mt-4">
          Built for Nepalese stock market investors · Not financial advice
        </p>
      </div>
    </main>
  );
};

export default NepalStockCalculator;