import React from "react";
import BonusAdjustmentPriceCalculator from "./BonusAdjustment";
import BonusAdjustmentPriceArticle from "./Article";

export default function BonusAdjustmentPricePage() {
  return (
    <div className="space-y-12">
      {/* Calculator on top */}
      <BonusAdjustmentPriceCalculator />

      {/* Article below */}
      <BonusAdjustmentPriceArticle />
    </div>
  );
}
