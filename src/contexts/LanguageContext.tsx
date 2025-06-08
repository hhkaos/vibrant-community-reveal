import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es' | 'fr' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.initiatives': 'Initiatives',
    'nav.people': 'People',
    'nav.communities': 'Communities',
    'nav.newsletters': 'Newsletters',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Building the Future',
    'hero.titleHighlight': 'Together',
    'hero.description': 'Join our vibrant tech community where developers, designers, and innovators collaborate to create amazing projects, share knowledge, and grow together. We believe in the power of open source and collective learning.',
    'hero.exploreBtn': 'Explore Initiatives',
    'hero.joinBtn': 'Request to Join',
    
    // Initiatives Section
    'initiatives.title': 'Our Initiatives',
    'initiatives.description': 'Discover the various projects and programs that drive our community forward',
    'initiatives.project1.title': 'Open Source Projects',
    'initiatives.project1.description': 'Contributing to and maintaining various open source projects that benefit the entire tech community.',
    'initiatives.project2.title': 'Tech Workshops',
    'initiatives.project2.description': 'Regular hands-on workshops covering the latest technologies and best practices in software development.',
    'initiatives.project3.title': 'Mentorship Program',
    'initiatives.project3.description': 'Connecting experienced developers with newcomers to foster growth and knowledge sharing.',
    'initiatives.project4.title': 'Innovation Lab',
    'initiatives.project4.description': 'Experimental space for testing new technologies and building proof-of-concept applications.',
    
    // People Section
    'people.title': 'Our People',
    'people.description': 'Meet the amazing individuals who make our community thrive',
    'people.member1.name': 'Sarah Chen',
    'people.member1.role': 'Community Lead',
    'people.member2.name': 'Marcus Rodriguez',
    'people.member2.role': 'Tech Coordinator',
    'people.member3.name': 'Aisha Patel',
    'people.member3.role': 'Workshop Organizer',
    'people.member4.name': 'David Kim',
    'people.member4.role': 'Mentorship Director',
    'people.showAll': 'Show All Members',
    'people.showLess': 'Show Less',
    
    // Communities Section
    'communities.title': 'Global Communities',
    'communities.description': 'Our community spans across the globe, connecting developers and tech enthusiasts from different countries and cultures. Join local chapters, participate in regional events, and collaborate on international projects.',
    'communities.cities': '50+ Cities',
    'communities.members': '10,000+ Members',
    
    // FAQ Section
    'faq.title': 'Frequently Asked Questions',
    'faq.description': 'Get answers to common questions about our community',
    'faq.question1': 'How can I join the community?',
    'faq.answer1': 'Simply click the "Request to Join" button and fill out our application form. We welcome developers of all skill levels!',
    'faq.question2': 'Are there any membership fees?',
    'faq.answer2': 'No, our community is completely free to join. We believe in open and accessible technology education.',
    'faq.question3': 'What programming languages do you focus on?',
    'faq.answer3': 'We\'re language-agnostic! Our community covers everything from web technologies to mobile development, AI, and more.',
    'faq.question4': 'Can I contribute to your open source projects?',
    'faq.answer4': 'Absolutely! We encourage all members to contribute to our projects, regardless of their experience level.',
    
    // Newsletters Section
    'newsletters.title': 'Stay Updated',
    'newsletters.description': 'Subscribe to our newsletter to get the latest updates on events, projects, and community news',
    'newsletters.subscribeBtn': 'Subscribe',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.description': 'Have questions or want to get involved? We\'d love to hear from you!',
    'contact.btn': 'Contact Us',
    
    // Footer
    'footer.description': 'Building the future of technology together through collaboration, learning, and innovation.',
    'footer.quickLinks': 'Quick Links',
    'footer.connect': 'Connect With Us',
    'footer.license': 'Licensed under MIT License',
    'footer.copyright': '2025 Community Builders.',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.initiatives': 'Iniciativas',
    'nav.people': 'Personas',
    'nav.communities': 'Comunidades',
    'nav.newsletters': 'Novedades',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'Dinamizamos',
    'hero.titleHighlight': 'Comunidades Tech',
    'hero.description': 'Somos un colectivo que reúne a personas que dinamizan comunidades tech de habla hispana con el objetivo de ser un lugar de referencia donde se facilite la colaboración y el intercambio de experiencias.',
    'hero.exploreBtn': 'Explorar Iniciativas',
    'hero.joinBtn': 'Solicitar Unirse',
    
    // Initiatives Section
    'initiatives.title': 'Nuestras iniciativas',
    'initiatives.description': 'Proponemos y colaboramos en diferentes proyectos',
    'initiatives.project1.title': 'Proyectos de Código Abierto',
    'initiatives.project1.description': 'Contribuyendo y manteniendo varios proyectos de código abierto que benefician a toda la comunidad tecnológica.',
    'initiatives.project2.title': 'Talleres Tecnológicos',
    'initiatives.project2.description': 'Talleres prácticos regulares que cubren las últimas tecnologías y mejores prácticas en desarrollo de software.',
    'initiatives.project3.title': 'Programa de Mentoría',
    'initiatives.project3.description': 'Conectando desarrolladores experimentados con principiantes para fomentar el crecimiento y el intercambio de conocimientos.',
    'initiatives.project4.title': 'Laboratorio de Innovación',
    'initiatives.project4.description': 'Espacio experimental para probar nuevas tecnologías y construir aplicaciones de prueba de concepto.',
    
    // People Section
    'people.title': 'Quiénes somos',
    'people.description': 'Estas son las personas que contribuyen en estas iniciativas',
    'people.member1.name': 'Sarah Chen',
    'people.member1.role': 'Líder de Comunidad',
    'people.member2.name': 'Marcus Rodriguez',
    'people.member2.role': 'Coordinador Técnico',
    'people.member3.name': 'Aisha Patel',
    'people.member3.role': 'Organizadora de Talleres',
    'people.member4.name': 'David Kim',
    'people.member4.role': 'Director de Mentoría',
    'people.showAll': 'Mostrar todas las personas',
    'people.showLess': 'Mostrar menos',
    
    // Communities Section
    'communities.title': 'Comunidades en Español',
    'communities.description': 'Hemos creado un directorio web que reúne a 500+ comunidades tech en España y otras de habla hispana para que cualquier persona interesada descubra fácilmente las opciones disponibles y encuentre las que se ajustan a sus intereses..',
    'communities.cities': '300+ Presenciales',
    'communities.members': '50+ Híbridas y online',
    
    // FAQ Section
    'faq.title': 'Preguntas Frecuentes',
    'faq.description': 'Obtén respuestas a preguntas comunes sobre nuestra comunidad',
    'faq.question1': '¿Cómo puedo unirme a la comunidad?',
    'faq.answer1': 'Simplemente haz clic en el botón "Solicitar Unirse" y completa nuestro formulario de solicitud. ¡Damos la bienvenida a desarrolladores de todos los niveles!',
    'faq.question2': '¿Hay cuotas de membresía?',
    'faq.answer2': 'No, nuestra comunidad es completamente gratuita para unirse. Creemos en la educación tecnológica abierta y accesible.',
    'faq.question3': '¿En qué lenguajes de programación se enfocan?',
    'faq.answer3': '¡Somos agnósticos al lenguaje! Nuestra comunidad cubre todo, desde tecnologías web hasta desarrollo móvil, IA y más.',
    'faq.question4': '¿Puedo contribuir a sus proyectos de código abierto?',
    'faq.answer4': '¡Absolutamente! Alentamos a todos los miembros a contribuir a nuestros proyectos, independientemente de su nivel de experiencia.',
    
    // Newsletters Section
    'newsletters.title': 'Novedades',
    'newsletters.description': 'Consulta los boletines mensuales de Community Builders',
    'newsletters.subscribeBtn': 'Boletines mensuales',
    
    // Contact Section
    'contact.title': 'Ponte en Contacto',
    'contact.description': '¿Tienes preguntas o quieres involucrarte? ¡Nos encantaría saber de ti!',
    'contact.btn': 'Contáctanos',
    
    // Footer
    'footer.description': 'Somos un colectivo que reúne a personas que dinamizan comunidades tech de habla hispana con el objetivo de ser un lugar de referencia donde se facilite la colaboración y el intercambio de experiencias.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.connect': 'Conéctate con Nosotros',
    'footer.license': 'Licenciado bajo Apache v2.0 y CC BY 4.0',
    'footer.copyright': '© 2025 Community Builders',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
