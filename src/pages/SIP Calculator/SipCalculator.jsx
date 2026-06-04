import { useState } from 'react';

export default function SIPCalculator() {
  // Input states
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [annualReturn, setAnnualReturn] = useState('');
  const [years, setYears] = useState('');
  const [frequency, setFrequency] = useState('monthly');
  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState({});

  const getPeriodsPerYear = (freq) => {
    switch (freq) {
      case 'monthly': return 12;
      case 'quarterly': return 4;
      case 'semi-annually': return 2;
      case 'annually': return 1;
      default: return 12;
    }
  };

  const validateInputs = () => {
    const newErrors = {};
    if (!investmentAmount || investmentAmount <= 0) newErrors.amount = 'Enter a positive investment amount';
    if (!annualReturn || annualReturn <= 0) newErrors.return = 'Enter a positive annual return (%)';
    if (!years || years <= 0) newErrors.years = 'Enter a positive number of years';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateSIP = () => {
    if (!validateInputs()) return;

    const amount = Number(investmentAmount);
    const rate = Number(annualReturn);
    const periodYears = Number(years);
    const periodsPerYear = getPeriodsPerYear(frequency);
    const totalPeriods = periodYears * periodsPerYear;
    const periodicRate = rate / 100 / periodsPerYear;

    let maturityAmount;
    if (periodicRate === 0) {
      maturityAmount = amount * totalPeriods;
    } else {
      maturityAmount =
        amount *
        ((Math.pow(1 + periodicRate, totalPeriods) - 1) / periodicRate) *
        (1 + periodicRate);
    }

    const totalInvested = amount * totalPeriods;
    const totalGain = maturityAmount - totalInvested;
    const totalGainPercent = totalInvested ? (totalGain / totalInvested) * 100 : 0;

    setResults({
      maturityAmount,
      totalInvested,
      totalGain,
      totalGainPercent,
    });
  };

  const clearAll = () => {
    setInvestmentAmount('');
    setAnnualReturn('');
    setYears('');
    setFrequency('monthly');
    setResults(null);
    setErrors({});
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getAmountLabel = () => {
    switch (frequency) {
      case 'monthly': return 'Monthly Investment Amount';
      case 'quarterly': return 'Quarterly Investment Amount';
      case 'semi-annually': return 'Semi-Annual Investment Amount';
      case 'annually': return 'Annual Investment Amount';
      default: return 'Investment Amount';
    }
  };

  return (
    <div className="max-w-[550px] mx-auto my-10 p-6 bg-white rounded-2xl shadow-lg font-sans text-gray-900 mt-16">
      <h1 className="text-[1.8rem] font-bold text-center mb-6 text-gray-900">
        SIP Calculator
      </h1>

      {/* Frequency Selection */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Investment Frequency
        </label>
        <div className="flex flex-wrap gap-4">
          {['monthly', 'quarterly', 'semi-annually', 'annually'].map((freq) => (
            <label key={freq} className="inline-flex items-center gap-1.5 cursor-pointer">
              <input
                type="radio"
                name="frequency"
                value={freq}
                checked={frequency === freq}
                onChange={() => setFrequency(freq)}
                className="cursor-pointer text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-900 capitalize">
                {freq === 'semi-annually' ? 'Semi-Annually' : freq}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Investment Amount */}
      <div className="mb-5">
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1.5">
          {getAmountLabel()}
        </label>
        <input
          id="amount"
          type="number"
          value={investmentAmount}
          onChange={(e) => {
            setInvestmentAmount(e.target.value);
            if (errors.amount) setErrors({ ...errors, amount: null });
          }}
          placeholder="e.g., 5000"
          className={`w-full px-3 py-2 text-base rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
            errors.amount ? 'border-red-500' : 'border-gray-300'
          } bg-white text-gray-900`}
        />
        {errors.amount && (
          <p className="text-red-500 text-xs mt-1">{errors.amount}</p>
        )}
        <p className="text-gray-400 text-xs mt-1">Numbers only – no commas or symbols</p>
      </div>

      {/* Expected Annual Return */}
      <div className="mb-5">
        <label htmlFor="return" className="block text-sm font-medium text-gray-700 mb-1.5">
          Expected Annual Return (%)
        </label>
        <input
          id="return"
          type="number"
          value={annualReturn}
          onChange={(e) => {
            setAnnualReturn(e.target.value);
            if (errors.return) setErrors({ ...errors, return: null });
          }}
          placeholder="e.g., 12"
          className={`w-full px-3 py-2 text-base rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
            errors.return ? 'border-red-500' : 'border-gray-300'
          } bg-white text-gray-900`}
        />
        {errors.return && (
          <p className="text-red-500 text-xs mt-1">{errors.return}</p>
        )}
      </div>

      {/* Years */}
      <div className="mb-6">
        <label htmlFor="years" className="block text-sm font-medium text-gray-700 mb-1.5">
          Years
        </label>
        <input
          id="years"
          type="number"
          value={years}
          onChange={(e) => {
            setYears(e.target.value);
            if (errors.years) setErrors({ ...errors, years: null });
          }}
          placeholder="e.g., 10"
          className={`w-full px-3 py-2 text-base rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
            errors.years ? 'border-red-500' : 'border-gray-300'
          } bg-white text-gray-900`}
        />
        {errors.years && (
          <p className="text-red-500 text-xs mt-1">{errors.years}</p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={calculateSIP}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-lg transition duration-200"
        >
          Calculate
        </button>
        <button
          onClick={clearAll}
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2.5 px-4 rounded-lg transition duration-200"
        >
          Clear
        </button>
      </div>

      {/* Results */}
      {results && (
        <div className="mt-2 bg-gray-50 border border-gray-200 rounded-xl p-4">
          <h3 className="font-bold text-gray-700 mb-3">Details:</h3>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Amount Expected</span>
              <span className="font-bold text-green-600">
                {formatCurrency(results.maturityAmount)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Amount Invested</span>
              <span className="font-bold text-gray-900">
                {formatCurrency(results.totalInvested)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Gain</span>
              <span className="font-bold text-blue-600">
                {formatCurrency(results.totalGain)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Gain %</span>
              <span className="font-bold text-purple-600">
                {results.totalGainPercent.toFixed(2)}%
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}