import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Last updated: August 19, 2023
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-8">
              At Nepal Stock Market Resources, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-black mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-6">
              <li className="text-black mb-2"><strong>Personal Information:</strong> Name, email address, and other contact details when you voluntarily provide them.</li>
              <li className="text-black mb-2"><strong>Usage Data:</strong> Information about how you use our website, including your IP address, browser type, and pages visited.</li>
              <li className="text-black mb-2"><strong>Cookies:</strong> We use cookies to enhance your experience and analyze website traffic.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-black mb-4">We use the information we collect for various purposes:</p>
            <ul className="list-disc pl-6 mb-6">
              <li className="text-black mb-2">To provide and maintain our service</li>
              <li className="text-black mb-2">To notify you about changes to our service</li>
              <li className="text-black mb-2">To allow you to participate in interactive features when you choose to do so</li>
              <li className="text-black mb-2">To provide customer support</li>
              <li className="text-black mb-2">To gather analysis or valuable information so we can improve our service</li>
              <li className="text-black mb-2">To monitor the usage of our service</li>
              <li className="text-black mb-2">To detect, prevent and address technical issues</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Data Storage and Security</h2>
            <p className="text-black mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
            </p>
            <p className="text-black mb-6">
              Your data will be stored securely and retained only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
            <p className="text-black mb-4">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
            </p>
            <p className="text-black mb-6">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">5. Third-Party Services</h2>
            <p className="text-black mb-4">
              We may employ third-party companies and individuals to facilitate our service, provide the service on our behalf, perform service-related services, or assist us in analyzing how our service is used.
            </p>
            <p className="text-black mb-6">
              These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">6. Your Data Protection Rights</h2>
            <p className="text-black mb-4">Depending on your location, you may have the following data protection rights:</p>
            <ul className="list-disc pl-6 mb-6">
              <li className="text-black mb-2">The right to access, update or delete the information we have on you</li>
              <li className="text-black mb-2">The right of rectification</li>
              <li className="text-black mb-2">The right to object</li>
              <li className="text-black mb-2">The right of restriction</li>
              <li className="text-black mb-2">The right to data portability</li>
              <li className="text-black mb-2">The right to withdraw consent</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">7. Children's Privacy</h2>
            <p className="text-black mb-6">
              Our service does not address anyone under the age of 18. We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">8. Changes to This Privacy Policy</h2>
            <p className="text-black mb-6">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">9. Contact Us</h2>
            <p className="text-black mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="text-black mb-2">By email: Techienepal2025@gmail.com</li>
              
              <li className="text-black mb-2">By phone: +977-9701128606</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default PrivacyPolicy;