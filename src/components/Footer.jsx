const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stock Calculator</h3>
            <p className="text-gray-400">
              Professional tools for Nepal's stock market investors
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition">About us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact us</a></li>
            </ul>
          </div>

          {/* Resources */}


          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal Terms</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="/disclaimer" className="text-gray-400 hover:text-white transition">Disclimar</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white transition">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Share Calculator. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;