import { Link } from 'react-router-dom';

const DisclaimerPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Disclaimer</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Important information regarding the use of our website and content
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-8">
              Please read this disclaimer carefully before using our website or relying on any information provided. By accessing and using Nepal Stock Market Resources, you accept and agree to be bound by the terms of this disclaimer.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. No Financial Advice</h2>
            <p className="text-black mb-6">
              The content provided on Nepal Stock Market Resources is for informational and educational purposes only. All information, materials, and content available on this website are not intended as and shall not be understood or construed as financial advice, investment recommendations, or any form of suggestion to buy, sell, or hold any securities or make any investment decisions.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. No Warranties</h2>
            <p className="text-black mb-6">
              All content on this site is provided "as is" without any representations or warranties, express or implied. Nepal Stock Market Resources makes no representations or warranties in relation to the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website for any purpose.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Investment Risks</h2>
            <p className="text-black mb-6">
              Investing in the stock market involves substantial risk of loss and is not suitable for every investor. The value of investments may fluctuate, and investors may lose some or all of their invested capital. Past performance is not indicative of future results. You should carefully consider your financial situation, investment objectives, and risk tolerance before making any investment decisions.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Professional Advice</h2>
            <p className="text-black mb-6">
              You should consult with a qualified financial advisor, accountant, or other professional before making any financial decisions or implementing any financial strategy. The content on this website is not a substitute for professional financial advice tailored to your individual circumstances.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">5. Third-Party Content</h2>
            <p className="text-black mb-6">
              Our website may contain links to third-party websites or content. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">6. Limitation of Liability</h2>
            <p className="text-black mb-6">
              In no event shall Nepal Stock Market Resources, its owners, employees, or affiliates be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="text-black mb-2">Your access to or use of or inability to access or use the website</li>
              <li className="text-black mb-2">Any conduct or content of any third party on the website</li>
              <li className="text-black mb-2">Any content obtained from the website</li>
              <li className="text-black mb-2">Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">7. Accuracy of Information</h2>
            <p className="text-black mb-6">
              While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">8. Market Information</h2>
            <p className="text-black mb-6">
              Stock market information, including but not limited to stock prices, indices, and other financial data, may be delayed or inaccurate. We are not liable for any errors, omissions, or delays in content or for any actions taken in reliance on such information.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">9. Changes to Disclaimer</h2>
            <p className="text-black mb-6">
              We reserve the right to modify this disclaimer at any time. We will provide notice of any changes by posting the updated disclaimer on this page with a new "Last updated" date. Your continued use of the website after any changes constitutes your acceptance of the new disclaimer.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">10. Governing Law</h2>
            <p className="text-black mb-6">
              This disclaimer shall be governed by and construed in accordance with the laws of Nepal. Any disputes relating to this disclaimer will be subject to the exclusive jurisdiction of the courts of Nepal.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-yellow-700">
                <strong>Important:</strong> If you do not agree with any part of this disclaimer, you must not use our website. Your continued use of the website will be deemed acceptance of this disclaimer.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Contact Information</h2>
            <p className="text-black mb-4">
              If you have any questions about this disclaimer, please contact us:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="text-black mb-2">By email: legal@nepalstockresources.com</li>
              <li className="text-black mb-2">By visiting this page on our website: https://nepalstockresources.com/contact</li>
              <li className="text-black mb-2">By mail: Nepal Stock Market Resources, Kathmandu, Nepal</li>
            </ul>

            <p className="text-sm text-gray-500 mt-8">
              Last updated: August 19, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default DisclaimerPage;