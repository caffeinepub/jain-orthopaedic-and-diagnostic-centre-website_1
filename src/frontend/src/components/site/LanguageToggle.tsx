import { useLanguage } from '../../i18n/LanguageProvider';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-semibold text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label="Toggle language"
    >
      {language === 'en' ? 'हिं' : 'EN'}
    </button>
  );
}
