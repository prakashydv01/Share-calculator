import React from "react";
import StockAverageCalculator from "./StockAverage";
import StockAverageArticle from "./articleAverage";

export default function StockAveragePage() {
  return (
    <div className="space-y-12">
      {/* Calculator on top */}
        <StockAverageCalculator />
        {/* Article below */}
        <StockAverageArticle />
      
    </div>
  );
}
