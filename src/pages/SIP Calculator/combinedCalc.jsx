import React from "react";
import SIPCalculator from "./SipCalculator";
import SIPCalculatorArticlePage from "./Article";

export default function SIPPage() {
  return (
    <div className="space-y-12">
      {/* Calculator on top */}
      <SIPCalculator />

      {/* Article below */}
      <SIPCalculatorArticlePage />
    </div>
  );
}
