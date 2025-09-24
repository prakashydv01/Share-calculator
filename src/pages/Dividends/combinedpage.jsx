import React from "react";
import DividendCalculatorNepal from "./dividendsCalc";
import DividendArticle from "./articleDividend";

export default function DividendPage() {
  return (
    <div className="space-y-12">
      {/* Calculator on top */}
      <DividendCalculatorNepal />

      {/* Article below */}
      <DividendArticle />
    </div>
  );
}
