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
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden md:max-w-2xl my-8">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-30 mt-15 text-center">
          Nepal Share {mode === 'buy' ? 'Buy' : 'Sell'} Calculator
        </h2>
        
        {/* Mode Toggle */}
        <div className="flex justify-center mb-20">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => {setMode('buy'); setCalculated(false);}}
              className={`px-4 py-2 mr-2 text-sm font-medium rounded-l-lg ${mode === 'buy' ? 'bg-blue-700 text-white' : 'bg-blue-900 text-white'}`}
            >
              Buy Calculator
            </button>
            <button
              onClick={() => {setMode('sell'); setCalculated(false);}}
              className={`px-4 py-2 ml-5 text-sm font-medium rounded-r-lg ${mode === 'sell' ? 'bg-green-700 text-white' : 'bg-green-900 text-white'}`}
            >
              Sell Calculator
            </button>
          </div>
        </div>
        
        {/* Buy Section */}
        {mode === 'buy' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Buy Price (NPR)
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={buyPrice}
                  onChange={(e) => {setBuyPrice(e.target.value); setCalculated(false);}}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black [appearance:textfield]"
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={quantity}
                  onChange={(e) => {setQuantity(e.target.value); setCalculated(false);}}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black [appearance:textfield]"
                  placeholder="0"
                />
              </div>
            </div>
            
            <button
              onClick={handleCalculate}
              disabled={!buyPrice || !quantity}
              className={`w-full py-2 px-4 rounded-md text-white font-medium ${(!buyPrice || !quantity) ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
            >
              Calculate
            </button>
            
            {/* Buy Results */}
            {calculated && (
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Amount Before Commission:</span>
                    <span className="font-medium text-gray-950">{formatNPR(calculateBuyDetails().amount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">DP Charge:</span>
                    <span className="font-medium text-gray-950">{formatNPR(DP_CHARGE)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">SEBON Fee (0.015%):</span>
                    <span className="font-medium text-gray-950">{formatNPR(calculateBuyDetails().sebonFeeAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Broker Commission:</span>
                    <span className="font-medium text-gray-950">{formatNPR(calculateBuyDetails().commission)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Actual Price Per Share (WACC):</span>
                    <span className="font-medium text-gray-950">{formatNPR(calculateBuyDetails().actualPricePerShare)}</span>
                  </div>
                  <div className="flex justify-between pt-3 mt-3 border-t border-blue-200">
                    <span className="text-gray-700 font-semibold">Total Amount to Pay:</span>
                    <span className="text-blue-700 font-bold">{formatNPR(calculateBuyDetails().totalAmount)}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Sell Section */}
        {mode === 'sell' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sale Price (NPR)
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={sellPrice}
                  onChange={(e) => {setSellPrice(e.target.value); setCalculated(false);}}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black [appearance:textfield]"
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Purchase Price (NPR)
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={purchasePrice}
                  onChange={(e) => {setPurchasePrice(e.target.value); setCalculated(false);}}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black [appearance:textfield]"
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={quantity}
                  onChange={(e) => {setQuantity(e.target.value); setCalculated(false);}}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black [appearance:textfield]"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Investor Type
                </label>
                <select
                  value={investorType}
                  onChange={(e) => {setInvestorType(e.target.value); setCalculated(false);}}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                >
                  <option value="individual">Individual</option>
                  <option value="institution">Institution</option>
                </select>
              </div>
            </div>
            
            {/* Capital Gain Tax Note */}
            <div className="text-sm bg-yellow-50 p-3 rounded border border-yellow-200">
              <p className="text-yellow-700">
                Note: Capital gain tax of 7.5% applies for holdings less than 365 days. 
                Purchase price is converted to WACC internally before calculation.
              </p>
            </div>
            
            <button
              onClick={handleCalculate}
              disabled={!sellPrice || !purchasePrice || !quantity}
              className={`w-full py-2 px-4 rounded-md text-white font-medium ${(!sellPrice || !purchasePrice || !quantity) ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
            >
              Calculate
            </button>
            
            {/* Sell Results */}
            {calculated && (
              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Amount Before Commission:</span>
                    <span className="font-medium text-gray-950">{formatNPR(calculateSellDetails().saleAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Purchase Price (WACC):</span>
                    <span className="font-medium text-gray-950">{formatNPR(calculateSellDetails().waccPrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Purchase Amount:</span>
                    <span className="font-medium text-gray-950">{formatNPR(calculateSellDetails().purchaseAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">DP Charge:</span>
                    <span className="font-medium text-gray-950">{formatNPR(DP_CHARGE)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">SEBON Fee (0.015%):</span>
                    <span className="font-medium text-gray-950">{formatNPR(calculateSellDetails().sebonFeeOnSell)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Broker Commission:</span>
                    <span className="font-medium text-gray-950">{formatNPR(calculateSellDetails().commissionOnSell)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Capital Gain Tax (7.5%):</span>
                    <span className="font-medium text-gray-950">{formatNPR(calculateSellDetails().capitalGainTax)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Profit/Loss:</span>
                    <span className={`font-medium ${calculateSellDetails().profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {formatNPR(calculateSellDetails().profit)}
                    </span>
                  </div>
                  <div className="flex justify-between pt-3 mt-3 border-t border-green-200">
                    <span className="text-gray-700 font-semibold">Net Amount Received:</span>
                    <span className="text-green-700 font-bold">{formatNPR(calculateSellDetails().netAmount)}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Footer Notes */}
        <div className="mt-6 text-xs text-gray-500">
          <p>Note: DP charge NPR 25, SEBON fee 0.015%. Broker commission: 0.36% (≤50k), 0.33% (50k-500k), 0.31% (500k-2M), 0.27% (2M-10M), 0.24% (&gt;10M).</p>
        </div>
      </div>
    </div>
  );
};

export default NepalStockCalculator;
