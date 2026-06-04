import React from "react";
import EMICalculator from "./EmiCalculator";
import EMICalculatorArticlePage from "./EmiArticle";
export default function EMIPage() {
  return (
    <div className="space-y-12">
      {/* Calculator on top */}
      <EMICalculator />

      {/* Article below */}
      <EMICalculatorArticlePage />
    </div>
  );
}
