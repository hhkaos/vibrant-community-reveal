
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
    'newsletters.placeholder': 'Enter your email',
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
    'footer.copyright': '© 2024 TechCommunity. All rights reserved.',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.initiatives': 'Iniciativas',
    'nav.people': 'Personas',
    'nav.communities': 'Comunidades',
    'nav.newsletters': 'Boletines',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'Construyendo el Futuro',
    'hero.titleHighlight': 'Juntos',
    'hero.description': 'Únete a nuestra vibrante comunidad tecnológica donde desarrolladores, diseñadores e innovadores colaboran para crear proyectos increíbles, compartir conocimiento y crecer juntos. Creemos en el poder del código abierto y el aprendizaje colectivo.',
    'hero.exploreBtn': 'Explorar Iniciativas',
    'hero.joinBtn': 'Solicitar Unirse',
    
    // Initiatives Section
    'initiatives.title': 'Nuestras Iniciativas',
    'initiatives.description': 'Descubre los diversos proyectos y programas que impulsan nuestra comunidad',
    'initiatives.project1.title': 'Proyectos de Código Abierto',
    'initiatives.project1.description': 'Contribuyendo y manteniendo varios proyectos de código abierto que benefician a toda la comunidad tecnológica.',
    'initiatives.project2.title': 'Talleres Tecnológicos',
    'initiatives.project2.description': 'Talleres prácticos regulares que cubren las últimas tecnologías y mejores prácticas en desarrollo de software.',
    'initiatives.project3.title': 'Programa de Mentoría',
    'initiatives.project3.description': 'Conectando desarrolladores experimentados con principiantes para fomentar el crecimiento y el intercambio de conocimientos.',
    'initiatives.project4.title': 'Laboratorio de Innovación',
    'initiatives.project4.description': 'Espacio experimental para probar nuevas tecnologías y construir aplicaciones de prueba de concepto.',
    
    // People Section
    'people.title': 'Nuestra Gente',
    'people.description': 'Conoce a las personas increíbles que hacen prosperar nuestra comunidad',
    'people.member1.name': 'Sarah Chen',
    'people.member1.role': 'Líder de Comunidad',
    'people.member2.name': 'Marcus Rodriguez',
    'people.member2.role': 'Coordinador Técnico',
    'people.member3.name': 'Aisha Patel',
    'people.member3.role': 'Organizadora de Talleres',
    'people.member4.name': 'David Kim',
    'people.member4.role': 'Director de Mentoría',
    
    // Communities Section
    'communities.title': 'Comunidades Globales',
    'communities.description': 'Nuestra comunidad se extiende por todo el mundo, conectando desarrolladores y entusiastas de la tecnología de diferentes países y culturas. Únete a capítulos locales, participa en eventos regionales y colabora en proyectos internacionales.',
    'communities.cities': '50+ Ciudades',
    'communities.members': '10,000+ Miembros',
    
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
    'newsletters.title': 'Mantente Actualizado',
    'newsletters.description': 'Suscríbete a nuestro boletín para recibir las últimas actualizaciones sobre eventos, proyectos y noticias de la comunidad',
    'newsletters.placeholder': 'Ingresa tu email',
    'newsletters.subscribeBtn': 'Suscribirse',
    
    // Contact Section
    'contact.title': 'Ponte en Contacto',
    'contact.description': '¿Tienes preguntas o quieres involucrarte? ¡Nos encantaría saber de ti!',
    'contact.btn': 'Contáctanos',
    
    // Footer
    'footer.description': 'Construyendo el futuro de la tecnología juntos a través de la colaboración, el aprendizaje y la innovación.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.connect': 'Conéctate con Nosotros',
    'footer.license': 'Licenciado bajo Licencia MIT',
    'footer.copyright': '© 2024 TechCommunity. Todos los derechos reservados.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.initiatives': 'Initiatives',
    'nav.people': 'Personnes',
    'nav.communities': 'Communautés',
    'nav.newsletters': 'Bulletins',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Construire l\'Avenir',
    'hero.titleHighlight': 'Ensemble',
    'hero.description': 'Rejoignez notre communauté technologique dynamique où développeurs, designers et innovateurs collaborent pour créer des projets incroyables, partager des connaissances et grandir ensemble. Nous croyons au pouvoir de l\'open source et de l\'apprentissage collectif.',
    'hero.exploreBtn': 'Explorer les Initiatives',
    'hero.joinBtn': 'Demander à Rejoindre',
    
    // Initiatives Section
    'initiatives.title': 'Nos Initiatives',
    'initiatives.description': 'Découvrez les divers projets et programmes qui font avancer notre communauté',
    'initiatives.project1.title': 'Projets Open Source',
    'initiatives.project1.description': 'Contribuer et maintenir divers projets open source qui profitent à toute la communauté technologique.',
    'initiatives.project2.title': 'Ateliers Tech',
    'initiatives.project2.description': 'Ateliers pratiques réguliers couvrant les dernières technologies et meilleures pratiques en développement logiciel.',
    'initiatives.project3.title': 'Programme de Mentorat',
    'initiatives.project3.description': 'Connecter les développeurs expérimentés avec les nouveaux venus pour favoriser la croissance et le partage de connaissances.',
    'initiatives.project4.title': 'Laboratoire d\'Innovation',
    'initiatives.project4.description': 'Espace expérimental pour tester de nouvelles technologies et construire des applications de preuve de concept.',
    
    // People Section
    'people.title': 'Notre Équipe',
    'people.description': 'Rencontrez les personnes formidables qui font prospérer notre communauté',
    'people.member1.name': 'Sarah Chen',
    'people.member1.role': 'Chef de Communauté',
    'people.member2.name': 'Marcus Rodriguez',
    'people.member2.role': 'Coordinateur Tech',
    'people.member3.name': 'Aisha Patel',
    'people.member3.role': 'Organisatrice d\'Ateliers',
    'people.member4.name': 'David Kim',
    'people.member4.role': 'Directeur de Mentorat',
    
    // Communities Section
    'communities.title': 'Communautés Mondiales',
    'communities.description': 'Notre communauté s\'étend à travers le monde, connectant développeurs et passionnés de technologie de différents pays et cultures. Rejoignez des chapitres locaux, participez à des événements régionaux et collaborez sur des projets internationaux.',
    'communities.cities': '50+ Villes',
    'communities.members': '10,000+ Membres',
    
    // FAQ Section
    'faq.title': 'Questions Fréquemment Posées',
    'faq.description': 'Obtenez des réponses aux questions courantes sur notre communauté',
    'faq.question1': 'Comment puis-je rejoindre la communauté ?',
    'faq.answer1': 'Cliquez simplement sur le bouton "Demander à Rejoindre" et remplissez notre formulaire de candidature. Nous accueillons les développeurs de tous niveaux !',
    'faq.question2': 'Y a-t-il des frais d\'adhésion ?',
    'faq.answer2': 'Non, notre communauté est entièrement gratuite. Nous croyons en l\'éducation technologique ouverte et accessible.',
    'faq.question3': 'Sur quels langages de programmation vous concentrez-vous ?',
    'faq.answer3': 'Nous sommes agnostiques au langage ! Notre communauté couvre tout, des technologies web au développement mobile, l\'IA et plus encore.',
    'faq.question4': 'Puis-je contribuer à vos projets open source ?',
    'faq.answer4': 'Absolument ! Nous encourageons tous les membres à contribuer à nos projets, quel que soit leur niveau d\'expérience.',
    
    // Newsletters Section
    'newsletters.title': 'Restez Informé',
    'newsletters.description': 'Abonnez-vous à notre newsletter pour recevoir les dernières mises à jour sur les événements, projets et actualités de la communauté',
    'newsletters.placeholder': 'Entrez votre email',
    'newsletters.subscribeBtn': 'S\'abonner',
    
    // Contact Section
    'contact.title': 'Contactez-nous',
    'contact.description': 'Avez-vous des questions ou voulez-vous vous impliquer ? Nous aimerions avoir de vos nouvelles !',
    'contact.btn': 'Nous Contacter',
    
    // Footer
    'footer.description': 'Construire l\'avenir de la technologie ensemble grâce à la collaboration, l\'apprentissage et l\'innovation.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.connect': 'Connectez-vous avec Nous',
    'footer.license': 'Sous licence MIT',
    'footer.copyright': '© 2024 TechCommunity. Tous droits réservés.',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.initiatives': 'Initiativen',
    'nav.people': 'Menschen',
    'nav.communities': 'Gemeinschaften',
    'nav.newsletters': 'Newsletter',
    'nav.faq': 'FAQ',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.title': 'Die Zukunft Bauen',
    'hero.titleHighlight': 'Gemeinsam',
    'hero.description': 'Treten Sie unserer lebendigen Tech-Community bei, wo Entwickler, Designer und Innovatoren zusammenarbeiten, um erstaunliche Projekte zu schaffen, Wissen zu teilen und gemeinsam zu wachsen. Wir glauben an die Macht von Open Source und kollektivem Lernen.',
    'hero.exploreBtn': 'Initiativen Erkunden',
    'hero.joinBtn': 'Beitritt Beantragen',
    
    // Initiatives Section
    'initiatives.title': 'Unsere Initiativen',
    'initiatives.description': 'Entdecken Sie die verschiedenen Projekte und Programme, die unsere Community vorantreiben',
    'initiatives.project1.title': 'Open Source Projekte',
    'initiatives.project1.description': 'Beitrag und Wartung verschiedener Open-Source-Projekte, die der gesamten Tech-Community zugutekommen.',
    'initiatives.project2.title': 'Tech Workshops',
    'initiatives.project2.description': 'Regelmäßige praktische Workshops zu den neuesten Technologien und Best Practices in der Softwareentwicklung.',
    'initiatives.project3.title': 'Mentoring-Programm',
    'initiatives.project3.description': 'Erfahrene Entwickler mit Neulingen verbinden, um Wachstum und Wissensaustausch zu fördern.',
    'initiatives.project4.title': 'Innovationslabor',
    'initiatives.project4.description': 'Experimenteller Raum zum Testen neuer Technologien und Erstellen von Proof-of-Concept-Anwendungen.',
    
    // People Section
    'people.title': 'Unsere Menschen',
    'people.description': 'Lernen Sie die erstaunlichen Menschen kennen, die unsere Community gedeihen lassen',
    'people.member1.name': 'Sarah Chen',
    'people.member1.role': 'Community-Leiterin',
    'people.member2.name': 'Marcus Rodriguez',
    'people.member2.role': 'Tech-Koordinator',
    'people.member3.name': 'Aisha Patel',
    'people.member3.role': 'Workshop-Organisatorin',
    'people.member4.name': 'David Kim',
    'people.member4.role': 'Mentoring-Direktor',
    
    // Communities Section
    'communities.title': 'Globale Gemeinschaften',
    'communities.description': 'Unsere Community erstreckt sich über die ganze Welt und verbindet Entwickler und Tech-Enthusiasten aus verschiedenen Ländern und Kulturen. Treten Sie lokalen Kapiteln bei, nehmen Sie an regionalen Veranstaltungen teil und arbeiten Sie an internationalen Projekten mit.',
    'communities.cities': '50+ Städte',
    'communities.members': '10,000+ Mitglieder',
    
    // FAQ Section
    'faq.title': 'Häufig Gestellte Fragen',
    'faq.description': 'Erhalten Sie Antworten auf häufige Fragen zu unserer Community',
    'faq.question1': 'Wie kann ich der Community beitreten?',
    'faq.answer1': 'Klicken Sie einfach auf die Schaltfläche "Beitritt Beantragen" und füllen Sie unser Bewerbungsformular aus. Wir heißen Entwickler aller Erfahrungsstufen willkommen!',
    'faq.question2': 'Gibt es Mitgliedsbeiträge?',
    'faq.answer2': 'Nein, unsere Community ist völlig kostenlos beizutreten. Wir glauben an offene und zugängliche Technologiebildung.',
    'faq.question3': 'Auf welche Programmiersprachen konzentrieren Sie sich?',
    'faq.answer3': 'Wir sind sprachagnostisch! Unsere Community deckt alles ab, von Webtechnologien bis hin zu mobiler Entwicklung, KI und mehr.',
    'faq.question4': 'Kann ich zu Ihren Open-Source-Projekten beitragen?',
    'faq.answer4': 'Absolut! Wir ermutigen alle Mitglieder, zu unseren Projekten beizutragen, unabhängig von ihrem Erfahrungsniveau.',
    
    // Newsletters Section
    'newsletters.title': 'Bleiben Sie Informiert',
    'newsletters.description': 'Abonnieren Sie unseren Newsletter, um die neuesten Updates zu Veranstaltungen, Projekten und Community-News zu erhalten',
    'newsletters.placeholder': 'E-Mail eingeben',
    'newsletters.subscribeBtn': 'Abonnieren',
    
    // Contact Section
    'contact.title': 'Kontakt Aufnehmen',
    'contact.description': 'Haben Sie Fragen oder möchten sich beteiligen? Wir würden gerne von Ihnen hören!',
    'contact.btn': 'Kontaktieren Sie uns',
    
    // Footer
    'footer.description': 'Die Zukunft der Technologie gemeinsam durch Zusammenarbeit, Lernen und Innovation aufbauen.',
    'footer.quickLinks': 'Schnelle Links',
    'footer.connect': 'Verbinden Sie sich mit uns',
    'footer.license': 'Unter MIT-Lizenz lizenziert',
    'footer.copyright': '© 2024 TechCommunity. Alle Rechte vorbehalten.',
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
