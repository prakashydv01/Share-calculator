import React from "react";
import RightSharePriceAdjustmentCalculator from "./rightShareAdjustmentCalc";
import RightSharePriceAdjustmentArticle from "./Article";

export default function RightSharePriceAdjustmentPage() {
  return (
    <div className="space-y-12">
      {/* Calculator on top */}
      <RightSharePriceAdjustmentCalculator />

      {/* Article below */}
      <RightSharePriceAdjustmentArticle />
    </div>
  );
}
