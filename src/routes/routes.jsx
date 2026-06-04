import React, { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const PrivacyPolicy = lazy(() => import("../pages/Privacy"));
const DisclaimerPage = lazy(() => import("../pages/Disclaimer"));
const TermsAndConditions = lazy(() => import("../pages/Terms"));
const AboutUs = lazy(() => import("../pages/about"));
const ContactUs = lazy(() => import("../pages/contact"));

const DividendPage = lazy(() =>
  import("../pages/Dividends/combinedpage")
);

const StockAveragePage = lazy(() =>
  import("../pages/stock average/combineAverage")
);

const BonusAdjustmentPricePage = lazy(() =>
  import("../pages/Bonus Adjustment price/combinedpage")
);

const RightSharePriceAdjustmentPage = lazy(() =>
  import("../pages/Right share price adjustment/combinedClac")
);

const SIPPage = lazy(() =>
  import("../pages/SIP Calculator/combinedCalc")
);

const EMIPage = lazy(() =>
  import("../pages/EMI Calculator/combined")
);

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/privacy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/disclaimer",
    element: <DisclaimerPage />,
  },
  {
    path: "/terms",
    element: <TermsAndConditions />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/dividend",
    element: <DividendPage />,
  },
  {
    path: "/stock-average",
    element: <StockAveragePage />,
  },
  {
    path: "/bonus-adjustment-price",
    element: <BonusAdjustmentPricePage />,
  },
  {
    path: "/right-share-price-adjustment",
    element: <RightSharePriceAdjustmentPage />,
  },
  {
    path: "/sip-calculator",
    element: <SIPPage />,
  },
  {
    path: "/emi-calculator",
    element: <EMIPage />,
  },
];

export default routes;