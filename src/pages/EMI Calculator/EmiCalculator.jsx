import { useState } from 'react';

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};
    if (!loanAmount || loanAmount <= 0) newErrors.loanAmount = 'Enter a positive loan amount';
    if (!interestRate || interestRate <= 0) newErrors.interestRate = 'Enter a positive interest rate (%)';
    if (!loanTenure || loanTenure <= 0) newErrors.loanTenure = 'Enter a positive loan tenure';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateEMI = () => {
    if (!validateInputs()) return;

    const P = Number(loanAmount);
    const annualRate = Number(interestRate);
    const years = Number(loanTenure);

    const monthlyRate = annualRate / 12 / 100;
    const months = years * 12;

    let emi;
    if (monthlyRate === 0) {
      emi = P / months;
    } else {
      emi = (P * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    }

    setResult({
      loanAmount: P,
      interestRate: annualRate,
      loanTenure: years,
      monthlyEMI: emi,
    });
  };

  const clearAll = () => {
    setLoanAmount('');
    setInterestRate('');
    setLoanTenure('');
    setResult(null);
    setErrors({});
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value) => {
    return new Intl.NumberFormat('en-IN').format(value);
  };

  return (
    <div className="max-w-[550px] mx-auto my-10 p-6 bg-white rounded-2xl shadow-lg font-sans text-gray-900 mt-16">
      <h1 className="text-[1.8rem] font-bold text-center mb-6 text-gray-900">
        EMI Calculator
      </h1>

      {/* Loan Amount */}
      <div className="mb-5">
        <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-1.5">
          Loan Amount
        </label>
        <input
          id="loanAmount"
          type="number"
          value={loanAmount}
          onChange={(e) => {
            setLoanAmount(e.target.value);
            if (errors.loanAmount) setErrors({ ...errors, loanAmount: null });
          }}
          placeholder="e.g., 500000"
          className={`w-full px-3 py-2 text-base rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
            errors.loanAmount ? 'border-red-500' : 'border-gray-300'
          } bg-white text-gray-900`}
        />
        {errors.loanAmount && (
          <p className="text-red-500 text-xs mt-1">{errors.loanAmount}</p>
        )}
        <p className="text-gray-400 text-xs mt-1">Numbers only – no commas or symbols</p>
      </div>

      {/* Interest Rate */}
      <div className="mb-5">
        <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700 mb-1.5">
          Interest Rate (%)
        </label>
        <input
          id="interestRate"
          type="number"
          value={interestRate}
          onChange={(e) => {
            setInterestRate(e.target.value);
            if (errors.interestRate) setErrors({ ...errors, interestRate: null });
          }}
          placeholder="e.g., 10.5"
          step="any"
          className={`w-full px-3 py-2 text-base rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
            errors.interestRate ? 'border-red-500' : 'border-gray-300'
          } bg-white text-gray-900`}
        />
        {errors.interestRate && (
          <p className="text-red-500 text-xs mt-1">{errors.interestRate}</p>
        )}
        <p className="text-gray-400 text-xs mt-1">Numbers only – e.g., 10.5 for 10.5%</p>
      </div>

      {/* Loan Tenure (in years) */}
      <div className="mb-6">
        <label htmlFor="loanTenure" className="block text-sm font-medium text-gray-700 mb-1.5">
          Loan Tenure (in years)
        </label>
        <input
          id="loanTenure"
          type="number"
          value={loanTenure}
          onChange={(e) => {
            setLoanTenure(e.target.value);
            if (errors.loanTenure) setErrors({ ...errors, loanTenure: null });
          }}
          placeholder="e.g., 5"
          step="any"
          className={`w-full px-3 py-2 text-base rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
            errors.loanTenure ? 'border-red-500' : 'border-gray-300'
          } bg-white text-gray-900`}
        />
        {errors.loanTenure && (
          <p className="text-red-500 text-xs mt-1">{errors.loanTenure}</p>
        )}
        <p className="text-gray-400 text-xs mt-1">Numbers only – e.g., 5 for 5 years</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={calculateEMI}
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
      {result && (
        <div className="mt-2 bg-gray-50 border border-gray-200 rounded-xl p-4">
          <h3 className="font-bold text-gray-700 mb-3">Details:</h3>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Loan Amount</span>
              <span className="font-bold text-gray-900">
                {formatCurrency(result.loanAmount)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Interest Rate %</span>
              <span className="font-bold text-gray-900">
                {result.interestRate}%
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Loan Tenure (in year)</span>
              <span className="font-bold text-gray-900">
                {result.loanTenure} {result.loanTenure === 1 ? 'year' : 'years'}
              </span>
            </div>
            <div className="flex justify-between border-t border-gray-200 pt-2 mt-1">
              <span className="font-semibold text-gray-800">Monthly EMI</span>
              <span className="font-bold text-green-600 text-lg">
                {formatCurrency(result.monthlyEMI)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}