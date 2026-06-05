import { useState, useEffect } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileCalculatorsOpen, setIsMobileCalculatorsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) setIsMobileCalculatorsOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileCalculatorsOpen(false);
  };

  const toggleMobileCalculators = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileCalculatorsOpen(!isMobileCalculatorsOpen);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMobileMenuOpen]);

  const calculators = [
    { name: 'Dividend Calculator', href: '/dividend' },
    { name: 'Stock Average Calculator', href: '/stock-average' },
    { name: 'Bonus Adjustment Price Calculator', href: '/bonus-adjustment-price' },
    { name: 'Right Share Price Adjustment Calculator', href: '/right-share-price-adjustment' },
    { name: 'SIP Calculator', href: '/sip-calculator' },
    { name: 'EMI Calculator', href: '/emi-calculator' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo - left side */}
        <div className="text-2xl font-bold">
          <a href="/" className="text-indigo-600 hover:text-indigo-800">Share Calculator</a>
        </div>

        {/* Desktop Navigation - centered */}
        <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex space-x-8 items-center">
            <li><a href="/" className="text-gray-700 hover:text-indigo-600 font-medium">Home</a></li>
            <li className="relative group">
              <button className="text-gray-700 hover:text-indigo-600 font-medium flex items-center gap-1">
                Calculators
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                <div className="py-2">
                  {calculators.map(calc => (
                    <a key={calc.href} href={calc.href} className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
                      {calc.name}
                    </a>
                  ))}
                </div>
              </div>
            </li>
          </ul>
        </nav>

        {/* Empty div to balance flex spacing */}
        <div className="hidden md:block w-10"></div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none z-50 relative" onClick={toggleMobileMenu} aria-label="Toggle menu">
          <div className="w-6 flex flex-col space-y-1">
            <span className={`h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-1.5' : 'w-6'}`} />
            <span className={`h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-6'}`} />
            <span className={`h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-1.5' : 'w-6'}`} />
          </div>
        </button>

        {/* Mobile Drawer - Home and Calculators now side by side */}
        <div className={`fixed inset-0 z-40 overflow-hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          
          <div className={`absolute top-0 right-0 w-full max-w-md h-full bg-white shadow-xl transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="absolute top-4 right-4">
              
            </div>
            <div className="h-full pt-16 pb-10 overflow-y-auto">
              <div className="px-6">
                {/* Horizontal row for Home and Calculators on mobile */}
                <div className="flex items-center space-x-6 border-b border-gray-100 pb-4 mb-2">
                  <a href="/" onClick={closeMobileMenu} className="text-xl font-medium text-gray-700 hover:text-indigo-600 py-2">
                    Home
                  </a>
                  <div>
                    <button
                      onClick={toggleMobileCalculators}
                      className="flex items-center gap-1 text-xl font-medium text-gray-700 hover:text-indigo-600 py-2 focus:outline-none"
                      aria-expanded={isMobileCalculatorsOpen}
                    >
                      <span>Calculators</span>
                      <svg className={`w-5 h-5 transition-transform duration-200 ${isMobileCalculatorsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Dropdown content (appears below the row) */}
                <div className={`overflow-hidden transition-all duration-300 ${isMobileCalculatorsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="space-y-2 pb-2">
                    {calculators.map(calc => (
                      <a
                        key={calc.href}
                        href={calc.href}
                        onClick={closeMobileMenu}
                        className="block text-lg text-gray-600 hover:text-indigo-600 py-2"
                      >
                        {calc.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;