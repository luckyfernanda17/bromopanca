/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Compass, Menu, X, MessageSquare, ChevronDown, Flame, Mountain, Waves, Landmark } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Header({ currentPath, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toursDropdownOpen, setToursDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setToursDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Prepares the target phone & direct text for conversion
  const whatsappUrl = 'https://wa.me/6281234567890?text=Halo%20Bromo%20Panca%2C%20saya%20ingin%20tanya%20mengenai%20paket%20wisata%20premium%20ke%20Bromo.';

  const tourMenuLinks = [
    { name: 'Bromo Tour Packages', path: '/paket-wisata-bromo.html', desc: 'Premium Private Tour', icon: Mountain },
    { name: 'Open Trip Bromo', path: '/open-trip-bromo.html', desc: 'Midnight Trip Daily', icon: Compass },
    { name: 'Bromo Tumpak Sewu', path: '/paket-bromo-tumpak-sewu.html', desc: 'Semenanjung Semeru', icon: Waves },
    { name: 'Bromo Ijen Blue Fire', path: '/paket-bromo-ijen.html', desc: 'Double Volcano Magic', icon: Flame },
  ];

  return (
    <nav
      id="global-header-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-forest-900/95 backdrop-blur-md border-b border-gold-300/15 py-3 shadow-md'
          : 'bg-forest-950/80 backdrop-blur-xs border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            id="nav-brand-logo"
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="bg-gold-400 p-2 rounded-lg transition-transform group-hover:rotate-12 duration-300">
              <Mountain className="w-5 h-5 text-forest-950" />
            </div>
            <div>
              <span className="font-display font-bold text-lg sm:text-xl tracking-wider text-gold-100 block leading-tight">
                BROMO PANCA
              </span>
              <span className="text-[10px] font-mono tracking-widest text-gold-300 uppercase block -mt-0.5">
                Luxury East Java Tours
              </span>
            </div>
          </div>

          {/* Desktop Navigation Paths */}
          <div className="hidden lg:flex items-center gap-7">
            <button
              onClick={() => handleLinkClick('/')}
              className={`font-sans text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                currentPath === '/' || currentPath === '/index.html'
                  ? 'text-gold-300 font-bold'
                  : 'text-gray-300 hover:text-gold-200'
              }`}
            >
              Home
            </button>

            {/* Tour Packages Dropdown */}
            <div className="relative">
              <button
                onClick={() => setToursDropdownOpen(!toursDropdownOpen)}
                onMouseEnter={() => setToursDropdownOpen(true)}
                className={`flex items-center gap-1 font-sans text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                  currentPath.startsWith('/paket') || currentPath.includes('open-trip')
                    ? 'text-gold-300'
                    : 'text-gray-300 hover:text-gold-200'
                }`}
              >
                Tour Packages
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${toursDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {toursDropdownOpen && (
                <div
                  onMouseLeave={() => setToursDropdownOpen(false)}
                  className="absolute left-0 mt-3 w-72 rounded-xl bg-forest-900 border border-gold-300/20 shadow-2xl p-2 animate-fade-in z-50"
                >
                  <div className="grid gap-1">
                    {tourMenuLinks.map((link) => {
                      const IconComp = link.icon;
                      return (
                        <div
                          key={link.path}
                          onClick={() => handleLinkClick(link.path)}
                          className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-gold-550/10 hover:border-l-3 hover:border-gold-400 group border-l-3 ${
                            currentPath === link.path
                              ? 'bg-gold-400/10 border-gold-400 text-gold-200'
                              : 'border-transparent text-gray-300'
                          }`}
                        >
                          <div className="bg-forest-950 p-2 rounded-md group-hover:bg-gold-400/20 text-gold-300 transition-colors">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold group-hover:text-gold-300 transition-colors">{link.name}</p>
                            <p className="text-[10px] text-gray-400 mt-0.5">{link.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleLinkClick('/galeri.html')}
              className={`font-sans text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                currentPath === '/galeri.html' ? 'text-gold-300 font-bold' : 'text-gray-300 hover:text-gold-200'
              }`}
            >
              Gallery
            </button>

            <button
              onClick={() => handleLinkClick('/tentang-kami.html')}
              className={`font-sans text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                currentPath === '/tentang-kami.html' ? 'text-gold-300 font-bold' : 'text-gray-300 hover:text-gold-200'
              }`}
            >
              About Us
            </button>

            <button
              onClick={() => handleLinkClick('/faq.html')}
              className={`font-sans text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                currentPath === '/faq.html' ? 'text-gold-300 font-bold' : 'text-gray-300 hover:text-gold-200'
              }`}
            >
              FAQ
            </button>

            <button
              onClick={() => handleLinkClick('/blog.html')}
              className={`font-sans text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                currentPath.includes('blog') || currentPath.includes('category-') || (!tourMenuLinks.some(l => l.path === currentPath) && currentPath !== '/' && currentPath !== '/index.html' && currentPath !== '/galeri.html' && currentPath !== '/tentang-kami.html' && currentPath !== '/faq.html' && currentPath !== '/kontak.html')
                  ? 'text-gold-300 font-bold'
                  : 'text-gray-300 hover:text-gold-200'
              }`}
            >
              Blog
            </button>

            <button
              onClick={() => handleLinkClick('/kontak.html')}
              className={`font-sans text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                currentPath === '/kontak.html' ? 'text-gold-300 font-bold' : 'text-gray-300 hover:text-gold-200'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Book via WhatsApp Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-whatsapp-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer referrer"
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-sans text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              Book via WhatsApp
            </a>
          </div>

          {/* Mobile Menu Icon Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-gold-300 p-1.5 focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-forest-950 border-b border-gold-300/15 py-4 animate-fade-in">
          <div className="px-4 space-y-2">
            <button
              onClick={() => handleLinkClick('/')}
              className="block w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-gray-300 hover:bg-forest-900 hover:text-gold-200"
            >
              Home
            </button>

            {/* Tour Sub-Links manually expanded */}
            <div className="py-1 border-t border-b border-gold-300/10 my-1">
              <p className="text-[10px] font-bold text-gray-400 tracking-wider px-3 uppercase mb-1">
                Tour Packages
              </p>
              {tourMenuLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className="block w-full text-left py-2 px-6 rounded-lg text-xs font-medium text-gray-300 hover:bg-forest-900 hover:text-gold-200"
                >
                  📍 {link.name}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleLinkClick('/galeri.html')}
              className="block w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-gray-300 hover:bg-forest-900 hover:text-gold-200"
            >
              Gallery
            </button>

            <button
              onClick={() => handleLinkClick('/tentang-kami.html')}
              className="block w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-gray-300 hover:bg-forest-900 hover:text-gold-200"
            >
              About Us
            </button>

            <button
              onClick={() => handleLinkClick('/faq.html')}
              className="block w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-gray-300 hover:bg-forest-900 hover:text-gold-200"
            >
              FAQ
            </button>

            <button
              onClick={() => handleLinkClick('/blog.html')}
              className="block w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-gray-300 hover:bg-forest-900 hover:text-gold-200"
            >
              Blog
            </button>

            <button
              onClick={() => handleLinkClick('/kontak.html')}
              className="block w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-gray-300 hover:bg-forest-900 hover:text-gold-200"
            >
              Contact
            </button>

            <div className="pt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer referrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-500 text-white text-xs font-semibold py-3 rounded-lg shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                Book via WhatsApp (Fast Response)
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
