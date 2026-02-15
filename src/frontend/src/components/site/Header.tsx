import { useLanguage } from '../../i18n/LanguageProvider';
import { CLINIC_INFO } from '../../content/clinic';
import LanguageToggle from './LanguageToggle';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'about' | 'services';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const { t, language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    window.location.hash = page === 'home' ? '' : page;
    setMobileMenuOpen(false);
  };

  const navItems: { page: Page; label: string }[] = [
    { page: 'home', label: t('nav.home') },
    { page: 'about', label: t('nav.about') },
    { page: 'services', label: t('nav.services') }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <button
            onClick={() => handleNavigate('home')}
            className="flex flex-col focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-2 py-1 transition-all hover:scale-105"
          >
            <span className="font-heading font-bold text-xl md:text-2xl text-primary">
              {CLINIC_INFO.name}
            </span>
            <span className="text-xs md:text-sm text-gray-600 font-medium">
              {language === 'hi' ? CLINIC_INFO.nameHindi : `Dr. ${CLINIC_INFO.doctors[0]} & Dr. ${CLINIC_INFO.doctors[1]}`}
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`nav-link ${
                  currentPage === item.page
                    ? 'nav-link-active'
                    : 'nav-link-inactive'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="ml-4">
              <LanguageToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-primary hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg transition-all"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`block w-full text-left px-4 py-3 font-semibold transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                  currentPage === item.page
                    ? 'text-primary bg-primary/10 border-l-4 border-l-primary'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
