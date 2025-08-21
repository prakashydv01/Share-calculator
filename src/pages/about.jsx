import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering investors with knowledge and tools for the Nepal Stock Exchange
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Mission Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At Nepal Stock Market Resources, our mission is to democratize financial knowledge and 
              empower both new and experienced investors with the tools, information, and confidence 
              they need to navigate the Nepal Stock Exchange (NEPSE) successfully.
            </p>
            <p className="text-gray-700">
              We believe that informed investors make better decisions, and we're committed to 
              providing comprehensive, accurate, and accessible resources about the Nepalese 
              stock market.
            </p>
          </div>

          {/* Story Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2020 by a team of financial experts and technology enthusiasts, Nepal Stock 
              Market Resources was born out of a recognized need for reliable, localized information 
              about investing in the Nepalese stock market.
            </p>
            <p className="text-gray-700 mb-4">
              As the NEPSE experienced significant growth and attracted new investors, we noticed 
              that many individuals were making investment decisions without adequate knowledge or 
              understanding of market fundamentals, leading to unnecessary risks and losses.
            </p>
            <p className="text-gray-700">
              We set out to create a platform that would bridge this knowledge gap, providing 
              educational content, analytical tools, and market insights specifically tailored 
              to the unique context of Nepal's financial markets.
            </p>
          </div>

          {/* Values Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Integrity</h3>
                <p className="text-gray-700">
                  We maintain the highest standards of accuracy and transparency in all our 
                  content and recommendations.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Education First</h3>
                <p className="text-gray-700">
                  We prioritize investor education over promoting specific investments, 
                  empowering users to make their own informed decisions.
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">Accessibility</h3>
                <p className="text-gray-700">
                  We strive to make complex financial concepts understandable to investors 
                  at all experience levels.
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-800 mb-2">Innovation</h3>
                <p className="text-gray-700">
                  We continuously develop new tools and resources to meet the evolving 
                  needs of Nepalese investors.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Team</h2>
            <p className="text-gray-700 mb-6">
              Our diverse team brings together expertise in finance, technology, education, 
              and market analysis to deliver comprehensive resources for Nepalese investors.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl text-gray-600">RS</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Ramesh Shrestha</h3>
                <p className="text-blue-600">Financial Analyst</p>
                <p className="text-sm text-gray-600 mt-2">15+ years in Nepalese capital markets</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl text-gray-600">SP</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Sita Poudel</h3>
                <p className="text-blue-600">Content Strategist</p>
                <p className="text-sm text-gray-600 mt-2">Former business journalist</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl text-gray-600">AP</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Amit Pandey</h3>
                <p className="text-blue-600">Technology Lead</p>
                <p className="text-sm text-gray-600 mt-2">Fintech development specialist</p>
              </div>
            </div>
          </div>

          {/* Impact Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-6">
              <div className="bg-blue-100 p-4 rounded-lg">
                <p className="text-3xl font-bold text-blue-800">50,000+</p>
                <p className="text-gray-700">Monthly Visitors</p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg">
                <p className="text-3xl font-bold text-green-800">500+</p>
                <p className="text-gray-700">Educational Articles</p>
              </div>
              <div className="bg-purple-100 p-4 rounded-lg">
                <p className="text-3xl font-bold text-purple-800">10+</p>
                <p className="text-gray-700">Investment Tools</p>
              </div>
              <div className="bg-orange-100 p-4 rounded-lg">
                <p className="text-3xl font-bold text-orange-800">3</p>
                <p className="text-gray-700">Years of Service</p>
              </div>
            </div>
            <p className="text-gray-700">
              Since our launch, we've helped thousands of Nepalese investors make more informed 
              decisions, understand market risks, and develop long-term investment strategies 
              tailored to their financial goals.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="bg-blue-600 text-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Have questions about investing in NEPSE or suggestions for our platform? 
              We'd love to hear from you.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default AboutUs;