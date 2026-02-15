import { useState, useEffect } from 'react';
import { LanguageProvider } from './i18n/LanguageProvider';
import Header from './components/site/Header';
import Footer from './components/site/Footer';
import FloatingWhatsAppButton from './components/site/FloatingWhatsAppButton';
import HomePage from './pages/HomePage';
import AboutDoctorsPage from './pages/AboutDoctorsPage';
import ServicesContactPage from './pages/ServicesContactPage';

type Page = 'home' | 'about' | 'services';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Handle hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'about' || hash === 'services') {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutDoctorsPage />;
      case 'services':
        return <ServicesContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <Header currentPage={currentPage} onNavigate={setCurrentPage} />
        <main className="flex-1">
          {renderPage()}
        </main>
        <Footer />
        <FloatingWhatsAppButton />
      </div>
    </LanguageProvider>
  );
}

export default App;
