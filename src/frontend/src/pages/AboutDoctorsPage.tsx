import { useLanguage } from '../i18n/LanguageProvider';
import { usePageMeta } from '../hooks/usePageMeta';
import { Award, Heart, Shield, Users } from 'lucide-react';
import Section from '../components/site/Section';
import { Card, CardContent } from '../components/site/ThemePrimitives';

export default function AboutDoctorsPage() {
  const { t } = useLanguage();
  
  usePageMeta(
    t('meta.about.title'),
    t('meta.about.description')
  );

  const highlights = [
    { icon: Shield, key: 'hygiene' },
    { icon: Users, key: 'staff' },
    { icon: Heart, key: 'atmosphere' },
    { icon: Award, key: 'excellence' }
  ];

  const reviews = [
    t('reviews.1'),
    t('reviews.2'),
    t('reviews.3')
  ];

  return (
    <div>
      {/* Hero Section */}
      <Section className="bg-gradient-soft bg-pattern-dots pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="font-heading font-bold text-gray-900 leading-tight">
              {t('about.title')}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('about.subtitle')}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
        </div>
      </Section>

      {/* Doctor Profiles Section */}
      <Section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Dr. S.K. Jain */}
            <Card className="doctor-card group">
              <CardContent className="p-0">
                <div className="relative image-hover-zoom overflow-hidden">
                  <img 
                    src="/assets/image.png" 
                    alt="Dr. S.K. Jain"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent pointer-events-none"></div>
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-heading font-bold text-gray-900 mb-2">
                    {t('doctors.skjain.name')}
                  </h2>
                  <p className="text-primary font-semibold text-lg mb-6">
                    {t('doctors.skjain.title')}
                  </p>
                  <div className="space-y-4 text-gray-700">
                    <p className="flex items-start gap-2">
                      <span className="font-semibold text-gray-900 min-w-fit">{t('doctors.qualification')}:</span>
                      <span>{t('doctors.skjain.qualification')}</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-semibold text-gray-900 min-w-fit">{t('doctors.experience')}:</span>
                      <span>{t('doctors.skjain.experience')}</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-semibold text-gray-900 min-w-fit">{t('doctors.specialization')}:</span>
                      <span>{t('doctors.skjain.specialization')}</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dr. Prerna Jain */}
            <Card className="doctor-card group">
              <CardContent className="p-0">
                <div className="relative image-hover-zoom overflow-hidden">
                  <img 
                    src="/assets/image-1.png" 
                    alt="Dr. Prerna Jain"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent pointer-events-none"></div>
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-heading font-bold text-gray-900 mb-2">
                    {t('doctors.prerna.name')}
                  </h2>
                  <p className="text-primary font-semibold text-lg mb-6">
                    {t('doctors.prerna.title')}
                  </p>
                  <div className="space-y-4 text-gray-700">
                    <p className="flex items-start gap-2">
                      <span className="font-semibold text-gray-900 min-w-fit">{t('doctors.qualification')}:</span>
                      <span>{t('doctors.prerna.qualification')}</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-semibold text-gray-900 min-w-fit">{t('doctors.experience')}:</span>
                      <span>{t('doctors.prerna.experience')}</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-semibold text-gray-900 min-w-fit">{t('doctors.specialization')}:</span>
                      <span>{t('doctors.prerna.specialization')}</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Mission Section */}
      <Section className="bg-gradient-soft relative">
        <div className="absolute inset-0 bg-pattern-dots opacity-50 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-gray-900 mb-6">
                {t('mission.title')}
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                {t('mission.description')}
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-8"></div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, idx) => {
                const Icon = highlight.icon;
                return (
                  <div key={idx} className="text-center group">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-10 h-10 text-accent" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-gray-900">
                      {t(`highlights.${highlight.key}`)}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* Patient Reviews Section */}
      <Section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-gray-900 mb-4">
              {t('reviews.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {reviews.map((review, idx) => (
              <Card key={idx} className="review-card border-l-4 border-l-transparent">
                <CardContent className="p-8">
                  <p className="text-gray-700 text-lg italic leading-relaxed">"{review}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Photo Gallery Section */}
      <Section className="bg-gradient-soft relative">
        <div className="absolute inset-0 bg-pattern-dots opacity-50 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-gray-900 mb-4">
              {t('gallery.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="image-hover-zoom rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <img 
                src="/assets/image.png" 
                alt="Clinic interior"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="image-hover-zoom rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <img 
                src="/assets/image-1.png" 
                alt="Diagnostic equipment"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
