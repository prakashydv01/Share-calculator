import Header from "./components/Header";
import NepalStockCalculator from "./components/calculator";
import Footer from "./components/Footer";
import ArticlesPage from "./components/Article";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Stock Calculator</title>
          <meta name="description" content="Nepal Stock Calculator for Buy and Sell Shares" />
          <meta name="keywords" content="Nepal, Stock, Calculator, Shares, Buy" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
      </HelmetProvider>
      <Header />
      <NepalStockCalculator />
      <ArticlesPage />    
      <Footer />
    </>

  );
}
