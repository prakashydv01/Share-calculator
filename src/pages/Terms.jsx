import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Please read these terms carefully before using our website
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-8">
              Welcome to Nepal Stock Market Resources. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms and Conditions and our Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-black mb-6">
              By accessing and using Nepal Stock Market Resources (the "Website"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these Terms and Conditions, you must not access or use the Website.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Changes to Terms</h2>
            <p className="text-black mb-6">
              We reserve the right to modify these Terms and Conditions at any time. We will provide notice of significant changes by posting the updated Terms and Conditions on this page with a new "Last updated" date. Your continued use of the Website after any changes constitutes your acceptance of the new Terms and Conditions.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. User Accounts</h2>
            <p className="text-black mb-4">If you create an account on our Website, you are responsible for:</p>
            <ul className="list-disc pl-6 mb-6">
              <li className="text-black mb-2">Maintaining the confidentiality of your account information and password</li>
              <li className="text-black mb-2">All activities that occur under your account</li>
              <li className="text-black mb-2">Ensuring that your account information is accurate and up-to-date</li>
              <li className="text-black mb-2">Notifying us immediately of any unauthorized use of your account</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Intellectual Property Rights</h2>
            <p className="text-black mb-4">
              Unless otherwise indicated, the Website and all content and other materials therein, including, without limitation, the Nepal Stock Market Resources logo, and all designs, text, graphics, pictures, information, data, software, and files (collectively, "Content") are the proprietary property of Nepal Stock Market Resources and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-black mb-6">
              You are granted a limited, non-exclusive, non-transferable license to access and use the Website and Content for your personal, non-commercial use. You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise exploit any Content without our express written permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">5. User Conduct</h2>
            <p className="text-black mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li className="text-black mb-2">Use the Website in any way that violates any applicable law or regulation</li>
              <li className="text-black mb-2">Engage in any conduct that restricts or inhibits anyone's use of the Website</li>
              <li className="text-black mb-2">Use the Website to advertise or offer to sell goods or services</li>
              <li className="text-black mb-2">Impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity</li>
              <li className="text-black mb-2">Engage in any automated use of the system, such as using scripts to send comments or messages</li>
              <li className="text-black mb-2">Interfere with, disrupt, or create an undue burden on the Website or the networks connected to the Website</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">6. User-Generated Content</h2>
            <p className="text-black mb-4">
              The Website may allow you to post, link, store, share, and otherwise make available certain information, text, graphics, videos, or other material ("User Content"). You are responsible for the User Content that you post on or through the Website.
            </p>
            <p className="text-black mb-6">
              By posting User Content, you grant us a non-exclusive, worldwide, perpetual, irrevocable, royalty-free, sublicensable license to use, reproduce, adapt, publish, translate, and distribute such User Content in any and all media.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">7. Prohibited Content</h2>
            <p className="text-black mb-4">You agree not to post User Content that:</p>
            <ul className="list-disc pl-6 mb-6">
              <li className="text-black mb-2">Is unlawful, threatening, abusive, harassing, defamatory, libelous, deceptive, fraudulent, invasive of another's privacy, or tortious</li>
              <li className="text-black mb-2">Violates any applicable law or regulation</li>
              <li className="text-black mb-2">Infringes any patent, trademark, trade secret, copyright, or other intellectual property right of any party</li>
              <li className="text-black mb-2">Contains unauthorized advertising or promotional materials</li>
              <li className="text-black mb-2">Impersonates any person or entity</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">8. Disclaimer of Financial Advice</h2>
            <p className="text-black mb-6">
              The content provided on Nepal Stock Market Resources is for informational and educational purposes only. All information, materials, and content available on this Website are not intended as and shall not be understood or construed as financial advice, investment recommendations, or any form of suggestion to buy, sell, or hold any securities or make any investment decisions. You should consult with a qualified financial advisor before making any investment decisions.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">9. Third-Party Links</h2>
            <p className="text-black mb-6">
              The Website may contain links to third-party websites or services that are not owned or controlled by Nepal Stock Market Resources. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that Nepal Stock Market Resources shall not be responsible or liable for any damage or loss caused by or in connection with the use of any such content, goods, or services available on or through any such websites or services.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">10. Termination</h2>
            <p className="text-black mb-6">
              We may terminate or suspend your account and bar access to the Website immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms. If you wish to terminate your account, you may simply discontinue using the Website.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">11. Limitation of Liability</h2>
            <p className="text-black mb-6">
              In no event shall Nepal Stock Market Resources, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Website.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">12. Indemnification</h2>
            <p className="text-black mb-6">
              You agree to defend, indemnify and hold harmless Nepal Stock Market Resources and its licensees and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the Website, or b) a breach of these Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">13. Governing Law</h2>
            <p className="text-black mb-6">
              These Terms shall be governed and construed in accordance with the laws of Nepal, without regard to its conflict of law provisions. Any disputes relating to these Terms will be subject to the exclusive jurisdiction of the courts of Nepal.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">14. Severability</h2>
            <p className="text-black mb-6">
              If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Website, and supersede and replace any prior agreements we might have had between us regarding the Website.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">15. Contact Information</h2>
            <p className="text-black mb-4">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="text-black mb-2">By email: legal@nepalstockresources.com</li>
              <li className="text-black mb-2">By visiting this page on our website: https://nepalstockresources.com/contact</li>
              <li className="text-black mb-2">By mail: Nepal Stock Market Resources, Kathmandu, Nepal</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-blue-700">
                <strong>Note:</strong> By using our Website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </div>

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

export default TermsAndConditions;