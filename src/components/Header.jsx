import { useState, useEffect } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="text-indigo-600 hover:text-indigo-800">Share Calculator</a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="/" className="text-gray-700 hover:text-indigo-600 font-medium">Home</a></li>
            
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <div className={`w-6 flex flex-col space-y-1 transition-all ${isMobileMenuOpen ? 'transform rotate-180' : ''}`}>
            <span className={`h-0.5 bg-gray-700 transition-all ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-1.5' : 'w-6'}`}></span>
            <span className={`h-0.5 bg-gray-700 transition-all ${isMobileMenuOpen ? 'opacity-0' : 'w-6'}`}></span>
            <span className={`h-0.5 bg-gray-700 transition-all ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-1.5' : 'w-6'}`}></span>
          </div>
        </button>

        {/* Mobile Navigation Drawer */}
        <div className={`fixed inset-0 z-40 overflow-hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={closeMobileMenu}
          ></div>
          
          {/* Drawer Content */}
          <div className={`absolute top-0 right-0 w-full max-w-md h-full bg-white shadow-xl transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {/* Close Button */}
            <div className="absolute top-4 right-4">
              <button 
                onClick={closeMobileMenu}
                className="p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label="Close menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Menu Items */}
            <div className="h-full pt-16 pb-10 overflow-y-auto">
              <div className="flex flex-col space-y-6 px-6">
                <a 
                  href="/" 
                  className="text-xl font-medium text-gray-700 hover:text-indigo-600 py-2 border-b border-gray-100"
                  onClick={closeMobileMenu}
                >
                  Home
                </a>
                <a 
                  href="/about" 
                  className="text-xl font-medium text-gray-700 hover:text-indigo-600 py-2 border-b border-gray-100"
                  onClick={closeMobileMenu}
                >
                  About
                </a>
                <a 
                  href="/services" 
                  className="text-xl font-medium text-gray-700 hover:text-indigo-600 py-2 border-b border-gray-100"
                  onClick={closeMobileMenu}
                >
                  Services
                </a>
                <a 
                  href="/contact" 
                  className="text-xl font-medium text-gray-700 hover:text-indigo-600 py-2 border-b border-gray-100"
                  onClick={closeMobileMenu}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;