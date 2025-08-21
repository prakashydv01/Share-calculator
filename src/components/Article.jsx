import { Helmet } from "react-helmet";

const ArticlesPage = () => {
  const articles = [
    {
      id: 1,
      title: "How to Analyze Stocks Before Investing in Nepal",
      description: "Learn how to analyze NEPSE stocks, check financial statements, valuation metrics, and make informed investments in Nepal.",
      content: `Investing in the Nepal Stock Exchange (NEPSE) can be rewarding, but it requires careful study before buying shares. Many beginners rush to buy popular stocks without proper research, which often results in losses. A proper analysis can help reduce risk and improve returns.

1. Check Financial Statements
Every listed company must publish quarterly and annual financial reports. Look at revenue growth, debt-to-equity ratio, and profit margins. For example, a company with consistent revenue growth and low debt is generally more stable. Always verify audited reports on NEPSE or company websites.

2. Industry and Management
Compare the company’s performance with competitors in the same sector, such as hydropower, commercial banks, or insurance companies. A strong management team with good governance practices is a major plus. In Nepal, family-run businesses dominate, so understanding ownership structure is important.

3. Valuation Metrics
Use ratios such as Price-to-Earnings (P/E), Price-to-Book (P/B), and Dividend Yield. If a company’s P/E is much higher than the sector average, it may be overvalued. On the other hand, a stock with a reasonable P/E and strong dividend history could be a safer bet.

4. Risk and Market Trends
NEPSE is sensitive to political changes, banking liquidity, and interest rates. Diversify across sectors instead of investing in just one. A long-term investment strategy generally performs better than short-term speculation in the Nepali market.

Overall, proper stock analysis requires patience, but it increases your chances of earning steady returns in the Nepali stock market.`
    },
    {
      id: 2,
      title: "Understanding NEPSE Index: A Beginner's Guide",
      description: "A complete beginner's guide to understanding the NEPSE Index, trading hours, sectors, and market trends in Nepal.",
      content: `The NEPSE Index is the most widely used measure of the Nepal stock market’s performance. It tracks the price movement of all listed companies, giving higher weight to larger firms.

Base Year: 1994, with an initial value of 100
Trading Hours: Sunday to Thursday, 11:00 AM – 3:00 PM
Settlement Period: T+2 (trades are settled within two business days)
Listed Companies: Over 200 across 13 sectors including Banking, Hydropower, Hotels, and Insurance
Record High: 3,198 points in August 2021

Why it matters:
When the NEPSE Index rises, it means most shares are gaining value; when it falls, overall sentiment is weak. Investors use it to track market performance and compare returns. Beginners should follow NEPSE daily to understand how political events, economic policy, and liquidity affect the market.`
    },
    {
      id: 3,
      title: "Tax Implications for Stock Investors in Nepal",
      description: "Understand capital gains tax, dividend tax, and other tax rules for share trading in Nepal to maximize profits legally.",
      content: `Taxation is a key part of stock investing in Nepal. Many beginners calculate only profit but forget about taxes and fees. Here are the main taxes you should know:

1. Capital Gains Tax (CGT):
7.5% if you sell shares within 1 year (≤ 365 days).
5% if you sell after holding more than 1 year (> 365 days).

2. Dividend Tax:
5% is deducted at source whenever a company distributes cash dividends.

3. Bonus Shares:
No tax at allotment. However, if you later sell bonus shares, CGT applies.

Tip: Keep accurate records of purchase and selling prices, along with broker contract notes. The Inland Revenue Department allows losses to be carried forward for up to 7 years, so you can offset them against future gains. This is a valuable benefit for long-term investors.`
    },
    {
      id: 4,
      title: "How to Buy and Sell Shares Online in Nepal’s Secondary Market",
      description: "Step-by-step guide on buying and selling shares online in Nepal using NEPSE Online Trading System for beginners.",
      content: `Since 2018, the NEPSE Online Trading System (NOTS) has allowed investors to buy and sell shares electronically. This has made investing much more convenient.

Steps to Start Trading Online:
1. Open a Demat account with a Depository Participant (usually a bank or broker).
2. Obtain a CRN (C-ASBA Registration Number) from your bank.
3. Open a Broker Account with a licensed broker listed on NEPSE.
4. Log in to your broker’s TMS (Trading Management System) portal.
5. Place Buy/Sell Orders by entering the stock symbol, number of shares, and price.
6. Settlement is on a T+2 basis – meaning funds and shares are exchanged two business days later.

Pro Tip: Always use limit orders instead of market orders, especially in volatile stocks. Limit orders give you more control over the price you pay or receive.`
    },
    {
      id: 5,
      title: "Why Should Investors or Traders Use a Share Calculator?",
      description: "Learn why using a share calculator helps investors in Nepal calculate profits, taxes, and net returns accurately.",
      content: `A share calculator is an essential tool for anyone trading in the Nepal Stock Exchange. It helps calculate exact profits, losses, and taxes before executing a trade.

Benefits of a Share Calculator:
1. Quickly calculate net profit after deducting broker commission, DP charges, and SEBON fees.
2. Estimate Capital Gains Tax before selling.
3. Compare potential returns between different stocks.
4. Avoid hidden surprises, especially for beginners.

Example:
Suppose you bought shares worth NPR 100,000 and sold them at NPR 120,000. Your gross profit is NPR 20,000. After deducting CGT and fees, your actual net profit will be lower. A calculator helps you see the real numbers instantly.`
    },
    {
      id: 6,
      title: "What is the Capital Gains Tax on Shares in Nepal?",
      description: "Detailed guide on capital gains tax rates in Nepal for short-term and long-term share holdings.",
      content: `Capital Gains Tax (CGT) is a government tax on profits from selling shares. In Nepal, brokers automatically deduct CGT during settlement and pay it to the Inland Revenue Department.

Individual Investors:
7.5% if shares are held for ≤ 365 days.
5% if held for more than 365 days.

Institutional Investors:
Higher rates may apply depending on company tax laws.

Understanding CGT is important before selling, so that you do not overestimate profits.`
    },
    {
      id: 7,
      title: "How Much Tax Do I Pay When I Sell Shares?",
      description: "Know all fees and taxes including broker commission, SEBON fees, DP charges, and CGT when selling shares in Nepal.",
      content: `When selling shares in Nepal, multiple fees and taxes are deducted:

1. Broker Commission: Between 0.27% and 0.40% depending on transaction size.
2. SEBON Fee: 0.015% of the transaction value.
3. DP Charge: NPR 25 per transaction.
4. Capital Gains Tax:
7.5% for holdings ≤ 1 year.
5% for holdings > 1 year.

Example:
If you sell NPR 100,000 worth of shares for NPR 120,000:
- Gross Profit = NPR 20,000
- CGT (7.5%) = NPR 1,500
- Other Fees ≈ NPR 400
- Net Profit = NPR 18,100

This calculation shows why it’s essential to use a share calculator before trading.`
    },
    {
      id: 8,
      title: "How to Calculate Investment Return with Example",
      description: "Learn to calculate realistic ROI in Nepal Stock Market after accounting for taxes and fees using examples.",
      content: `Return on Investment (ROI) helps measure how profitable your investment is. The formula is:

ROI (%) = [(Selling Price – Purchase Price) ÷ Purchase Price] × 100

Example:
- Bought 100 shares of NABIL Bank at NPR 800 each = NPR 80,000.
- Sold them at NPR 1,000 each = NPR 100,000.
- Profit = NPR 20,000.
- ROI = (20,000 ÷ 80,000) × 100 = 25%.

After deducting broker commission, SEBON fees, DP charges, and CGT, the real ROI may be closer to 20–22%. Always calculate the adjusted ROI for a realistic picture of your investment performance.`
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Helmet SEO Tags */}
      <Helmet>
        <title>Nepal Stock Market Guides & Share Calculator Tips</title>
        <meta name="description" content="In-depth guides on investing, NEPSE, capital gains tax, share calculator, and online trading in Nepal." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gray-300 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-blue-700 text-4xl font-bold mb-4">Nepal Stock Market Resources</h1>
          <p className="text-blue-700 text-xl max-w-2xl mx-auto">
             guides to help you succeed in the Nepal Stock Exchange
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full lg:w-3/4 mx-auto">
            <div className="space-y-12">
              {articles.map((article) => (
                <article key={article.id} className="bg-white rounded-lg shadow-md p-8">
                  <Helmet>
                    <title>{article.title} | Share Calculator Nepal</title>
                    <meta name="description" content={article.description} />
                  </Helmet>
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">{article.title}</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                    {article.content}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
