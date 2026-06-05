import { useState, useEffect, useRef } from "react";
import { TrendingUp, TrendingDown, Landmark, Receipt, CreditCard, BarChart2, ArrowUpRight, ArrowDownRight } from "lucide-react";

const DP_CHARGE = 25;
const SEBON_RATE = 0.015 / 100;
const CGT_RATE = 0.075;

function brokerCommission(amt) {
  if (amt <= 50_000) return amt * 0.0036;
  if (amt <= 500_000) return amt * 0.0033;
  if (amt <= 2_000_000) return amt * 0.0031;
  if (amt <= 10_000_000) return amt * 0.0027;
  return amt * 0.0024;
}

function fmtNPR(n, fallback = "—") {
  if (n === null || n === undefined || isNaN(n) || n === 0) return fallback;
  return "Rs\u202f" + n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function fmtNPRAlways(n) {
  return "Rs\u202f" + n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function NumberInput({ label, value, onChange, placeholder, isQty }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-semibold tracking-widest uppercase text-gray-400">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[13px] font-medium text-gray-300 pointer-events-none select-none">
          {isQty ? "qty" : "Rs"}
        </span>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full h-11 pl-9 pr-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-[15px] font-medium placeholder:text-gray-300 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-150 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
      </div>
    </div>
  );
}

function ResultRow({ label, value, icon: Icon, valueClass = "text-gray-800" }) {
  return (
    <div className="flex items-center justify-between px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors duration-100 group">
      <span className="flex items-center gap-2 text-[13px] text-gray-400 group-hover:text-gray-500 transition-colors">
        {Icon && <Icon size={13} className="text-gray-300 shrink-0" />}
        {label}
      </span>
      <span className={`text-[13px] font-medium tabular-nums ${valueClass}`}>{value}</span>
    </div>
  );
}

function Divider() {
  return <div className="h-px bg-gray-100 mx-4 my-1" />;
}

function WaccBadge({ wacc, isBuy }) {
  if (!wacc) return null;
  return (
    <span
      className={`text-[11px] font-semibold rounded-full px-2.5 py-0.5 tabular-nums ${
        isBuy
          ? "bg-blue-50 border border-blue-100 text-blue-500"
          : "bg-emerald-50 border border-emerald-100 text-emerald-600"
      }`}
      style={{ fontFamily: "'DM Mono', monospace" }}
    >
      WACC {fmtNPRAlways(wacc)}
    </span>
  );
}

export default function NepalShareCalculator() {
  const [mode, setMode] = useState("buy");
  const [buyPrice, setBuyPrice] = useState("");
  const [qty, setQty] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");

  const prevMode = useRef(mode);
  useEffect(() => {
    if (prevMode.current !== mode) {
      setBuyPrice(""); setSellPrice(""); setPurchasePrice(""); setQty("");
      prevMode.current = mode;
    }
  }, [mode]);

  const q = parseFloat(qty) || 0;
  const isBuy = mode === "buy";

  const buyCalc = (() => {
    const price = parseFloat(buyPrice) || 0;
    const amt = q * price;
    const com = brokerCommission(amt);
    const seb = amt * SEBON_RATE;
    const total = amt + com + seb + DP_CHARGE;
    return {
      amt,
      com: amt ? com : null,
      seb: amt ? seb : null,
      total: amt ? total : null,
      wacc: amt && q ? total / q : null,
    };
  })();

  const sellCalc = (() => {
    const sell = parseFloat(sellPrice) || 0;
    const purch = parseFloat(purchasePrice) || 0;
    const buyAmt = q * purch;
    const buyCom = brokerCommission(buyAmt);
    const buySeb = buyAmt * SEBON_RATE;
    const adjBuy = buyAmt + buyCom + buySeb + DP_CHARGE;
    const wacc = buyAmt && q ? adjBuy / q : null;
    const saleAmt = q * sell;
    const sellCom = brokerCommission(saleAmt);
    const sellSeb = saleAmt * SEBON_RATE;
    const profitBefore = saleAmt - adjBuy - sellCom - sellSeb - DP_CHARGE;
    const tax = profitBefore > 0 ? profitBefore * CGT_RATE : 0;
    const netProfit = profitBefore - tax;
    const netReceived = saleAmt - sellCom - sellSeb - DP_CHARGE - tax;
    const hasData = saleAmt > 0 && buyAmt > 0;
    return {
      saleAmt: saleAmt || null,
      adjBuy: buyAmt ? adjBuy : null,
      sellCom: saleAmt ? sellCom : null,
      sellSeb: saleAmt ? sellSeb : null,
      tax: hasData && tax > 0 ? tax : null,
      netProfit: hasData ? netProfit : null,
      netReceived: hasData ? netReceived : null,
      wacc,
      isProfit: netProfit >= 0,
    };
  })();

  return (
    <div className="min-h-screen bg-white flex justify-center py-8 px-4 mt-16">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap'); * { font-family: 'DM Sans', sans-serif; }`}</style>

      <div className="w-full max-w-sm">

        {/* header */}
        <div className="mb-7">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md shadow-blue-200 shrink-0">
              <BarChart2 size={15} className="text-white" />
            </div>
            <h1 className="text-[19px] font-semibold text-gray-900 tracking-tight">
              Nepal Share Calculator
            </h1>
          </div>
          <p className="text-[13px] text-gray-400 pl-11">NEPSE · costs &amp; profit estimator</p>
        </div>

        {/* mode toggle */}
        <div className="grid grid-cols-2 gap-1 bg-gray-100 border border-gray-200 rounded-xl p-1 mb-5">
          {[
            {
              key: "buy",
              label: "Buy",
              Icon: TrendingUp,
              activeClass: "bg-white text-blue-600 border border-gray-200 shadow-sm",
              inactiveClass: "text-gray-400 hover:text-gray-600 border border-transparent",
            },
            {
              key: "sell",
              label: "Sell",
              Icon: TrendingDown,
              activeClass: "bg-white text-emerald-600 border border-gray-200 shadow-sm",
              inactiveClass: "text-gray-400 hover:text-gray-600 border border-transparent",
            },
          ].map(({ key, label, Icon, activeClass, inactiveClass }) => (
            <button
              key={key}
              onClick={() => setMode(key)}
              className={`flex items-center justify-center gap-2 py-2.5 rounded-lg text-[14px] font-semibold transition-all duration-150 cursor-pointer ${
                mode === key ? activeClass : inactiveClass
              }`}
            >
              <Icon size={14} />
              {label}
            </button>
          ))}
        </div>

        {/* inputs */}
        <div className="flex flex-col gap-3 mb-5 text-gray-900">
          {isBuy ? (
            <>
              <NumberInput label="Buy price" value={buyPrice} onChange={setBuyPrice} placeholder="2500" />
              <NumberInput label="Quantity" value={qty} onChange={setQty} placeholder="100" isQty />
            </>
          ) : (
            <>
              <NumberInput label="Sell price" value={sellPrice} onChange={setSellPrice} placeholder="3200" />
              <NumberInput label="Purchase price" value={purchasePrice} onChange={setPurchasePrice} placeholder="2500" />
              <NumberInput label="Quantity" value={qty} onChange={setQty} placeholder="100" isQty />
            </>
          )}
        </div>

        {/* result card */}
        <div className="bg-white border border-gray-300 rounded-2xl overflow-hidden shadow-sm">

          {/* card header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-gray-600">
              {isBuy ? "Purchase summary" : "Sale summary"}
            </span>
            {isBuy
              ? <WaccBadge wacc={buyCalc.wacc} isBuy />
              : <WaccBadge wacc={sellCalc.wacc} isBuy={false} />
            }
          </div>

          {/* rows */}
          <div className="py-2 text-gray-900">
            {isBuy ? (
              <>
                <ResultRow label="Share amount" value={fmtNPR(buyCalc.amt)} icon={Receipt} />
                <ResultRow label="Broker commission" value={fmtNPR(buyCalc.com)} icon={Landmark} />
                <ResultRow label="SEBON fee" value={fmtNPR(buyCalc.seb)} icon={Landmark} />
                <ResultRow label="DP charge" value={fmtNPR(DP_CHARGE, "Rs\u202f25.00")} icon={CreditCard} valueClass="text-gray-400" />
              </>
            ) : (
              <>
                <ResultRow label="Gross sale amount" value={fmtNPR(sellCalc.saleAmt)} icon={Receipt} />
                <ResultRow label="Adjusted buy cost" value={fmtNPR(sellCalc.adjBuy)} icon={Receipt} />
                <Divider />
                <ResultRow label="Sell commission" value={fmtNPR(sellCalc.sellCom)} icon={Landmark} />
                <ResultRow label="SEBON fee" value={fmtNPR(sellCalc.sellSeb)} icon={Landmark} />
                <ResultRow label="DP charge" value={fmtNPR(DP_CHARGE, "Rs\u202f25.00")} icon={CreditCard} valueClass="text-gray-400" />
                <ResultRow label="Capital gain tax (7.5%)" value={fmtNPR(sellCalc.tax)} icon={Receipt} />
                <Divider />
                <ResultRow
                  label="Profit / Loss"
                  value={sellCalc.netProfit !== null ? fmtNPRAlways(sellCalc.netProfit) : "—"}
                  icon={
                    sellCalc.netProfit !== null
                      ? sellCalc.isProfit ? ArrowUpRight : ArrowDownRight
                      : BarChart2
                  }
                  valueClass={
                    sellCalc.netProfit !== null
                      ? sellCalc.isProfit
                        ? "text-emerald-900 font-semibold"
                        : "text-red-500 font-semibold"
                      : "text-gray-900"
                  }
                />
              </>
            )}
          </div>

          {/* total footer */}
          <div
            className={`flex items-center justify-between px-4 py-4 border-t border-gray-100 ${
              isBuy ? "bg-blue-50" : "bg-emerald-50"
            }`}
          >
            <span className={`text-[14px] font-semibold ${isBuy ? "text-blue-700" : "text-emerald-700"}`}>
              {isBuy ? "Total payable" : "Net received"}
            </span>
            <span
              className={`text-[18px] font-semibold tabular-nums ${isBuy ? "text-blue-600" : "text-emerald-600"}`}
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {isBuy
                ? buyCalc.total ? fmtNPRAlways(buyCalc.total) : "—"
                : sellCalc.netReceived !== null ? fmtNPRAlways(sellCalc.netReceived) : "—"
              }
            </span>
          </div>
        </div>

        {/* info chips */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {["DP Rs 25", "SEBON 0.015%", "Commission 0.24–0.36%", "CGT 7.5%"].map((chip) => (
            <span key={chip} className="text-[11px] text-gray-400 bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
              {chip}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}