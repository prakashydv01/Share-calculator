import { Link } from 'react-router-dom';

const ArticlesPage = () => {
  // Article data with full English content
  const articles = [
    {
      id: 1,
      title: "How to Analyze Stocks Before Investing in Nepal",
      content: `Investing in the Nepalese stock market requires careful analysis. Start by examining the company's financial statements, including balance sheets, income statements, and cash flow statements. Look for consistent revenue growth, manageable debt levels, and strong profit margins.

Next, research the company's management team and their track record. Consider the industry outlook and how the company compares to its competitors in sectors like banking, insurance, or hydropower.

Finally, analyze valuation metrics like P/E ratio, book value, and dividend yield. Remember that NEPSE can be volatile, so always invest with a long-term perspective and proper risk management.`,
      date: "May 15, 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      title: "Understanding NEPSE Index: A Beginner's Guide",
      content: `The Nepal Stock Exchange (NEPSE) index is the benchmark indicator of the Nepalese stock market. It tracks the performance of all listed companies, with heavier weighting given to larger companies.

The index is calculated using a base year (currently 1994) with a base value of 100. When NEPSE rises, it means the majority of stocks are increasing in value. The index is affected by economic factors like interest rates, political stability, and foreign investment policies.

Key things to know:
- Trading hours are 11 AM to 3 PM Sunday-Thursday
- Settlement takes T+2 days
- There are over 200 listed companies across 13 sectors
- The index hit its all-time high of 3,198 in August 2021`,
      date: "June 2, 2023",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      title: "Tax Implications for Stock Investors in Nepal",
      content: `Nepalese stock investors need to be aware of several tax obligations:

1. Capital Gains Tax:
   - 5% on profits from stocks held less than 1 year
   - No tax on stocks held more than 1 year
   - Calculated when selling shares

2. Dividend Tax:
   - 5% withholding tax on dividends
   - Credited against your annual tax liability

3. Bonus Share Tax:
   - No immediate tax liability
   - Cost basis adjusts when selling

Keep proper records of all transactions including purchase price, sale price, and dates. Losses can be carried forward for 7 years to offset future gains. Consult a tax professional for complex situations.`,
      date: "June 18, 2023",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Nepal Stock Market Resources</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive guides for investing in the Nepal Stock Exchange
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Articles List */}
          <div className="w-full">
            <div className="space-y-12">
              {articles.map((article) => (
                <article key={article.id} className="bg-white rounded-lg overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-64 object-cover mb-6" 
                  />
                  <div className="px-0">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-500">{article.date} · {article.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
                    <div className="prose max-w-none text-gray-700 mb-6 whitespace-pre-line">
                      {article.content}
                    </div>
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