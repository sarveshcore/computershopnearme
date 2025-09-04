import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    services: 'Services',
    graphics: 'Graphics',
    customers: 'Customers',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Computer Shop Near Me',
    heroTagline: 'Have a question or need a repair? Our skilled team is ready to assist you with all your computer needs. Contact us today for fast and reliable service!',
    heroButton: 'Get Started Today',
    heroSecondaryButton: 'Learn More',
    
    // About Section
    aboutTitle: 'About Computer Shop Near Me',
    aboutDescription: 'We are your trusted local computer repair and technology service provider. With years of experience and a passion for technology, we deliver reliable solutions for all your computer needs.',
    sameDayTitle: 'Same-Day Solutions',
    sameDayDesc: 'Quick, same-day solutions for urgent repairs',
    allDevicesTitle: 'All Device Types',
    allDevicesDesc: 'Hardware/software fixes for Laptops, All-in-Ones, Desktops, Windows & macOS',
    specializedTitle: 'Specialized Care',
    specializedDesc: 'Special maintenance for Apple devices and gaming computers',
    payAfterTitle: 'Pay After Repair',
    payAfterDesc: 'Only pay for the service after we have left your machine in optimal condition',
    happyCustomers: 'Happy Customers',
    responseTime: 'Response Time',
    
    // Services Section
    servicesTitle: 'Our Services',
    servicesDescription: 'We offer comprehensive computer and technology services to meet all your needs',
    computerRepairTitle: 'Computer Repair',
    computerRepairDesc: 'Fast, reliable troubleshooting for all tech issues. We diagnose and fix hardware and software problems quickly.',
    webDesignTitle: 'Web Design',
    webDesignDesc: 'Clean, professional website creation that represents your business perfectly and attracts customers.',
    graphicDesignTitle: 'Graphic Design',
    graphicDesignDesc: 'Visuals tailored to bring your ideas to life with creative and professional design solutions.',
    customPCTitle: 'Custom PC Builds',
    customPCDesc: 'Personalized systems built to your specs for gaming, work, or specialized applications.',
    tvRepairTitle: 'TV Repair',
    tvRepairDesc: 'Professional television repair services for all major brands and models.',
    notaryTitle: 'Notary Services',
    notaryDesc: 'Convenient notary services for your important document needs.',
    
    // Graphics Section
    graphicsPortfolioTitle: 'Our Graphics Portfolio',
    graphicsPortfolioDesc: 'Explore our creative design work and visual solutions',
    logoDesignTitle: 'Logo Design',
    logoDesignDesc: 'Custom logos that represent your brand identity',
    businessCardsTitle: 'Business Cards',
    businessCardsDesc: 'Professional business card designs that make an impression',
    flyersTitle: 'Flyers & Posters',
    flyersDesc: 'Eye-catching promotional materials for your business',
    portfolioComingSoon: 'Portfolio Coming Soon',
    portfolioComingSoonDesc: 'We are currently updating our portfolio with our latest work. Check back soon to see our amazing designs!',
    
    // Customers Section
    customersTitle: 'What Our Customers Say',
    customersDescription: 'Don\'t just take our word for it - here\'s what our satisfied customers have to say',
    yearsExperience: 'Years Experience',
    devicesRepaired: 'Devices Repaired',
    customerSatisfaction: 'Customer Satisfaction',
    responseTimeHours: '24hr Response',
    reviewsComingSoon: 'More Reviews Coming Soon!',
    reviewsComingSoonDesc: 'We are actively collecting more customer reviews to share their experiences with our services.',
    
    // Contact Section
    contactTitle: 'Get In Touch',
    contactDescription: 'Ready to get your computer fixed? Contact us today for fast and reliable service.',
    contactPhone: 'Phone',
    contactEmail: 'Email',
    contactHours: 'Hours',
    contactLocation: 'Location',
    contactFormTitle: 'Send us a message',
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    sendButton: 'Send Message',
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'your.email@example.com',
    messagePlaceholder: 'Tell us about your computer issue...',
    
    // Footer
    footerDescription: 'Your trusted local computer repair and technology service provider.',
    quickLinks: 'Quick Links',
    ourServices: 'Our Services',
    backToTop: 'Back to Top',
    copyright: '© 2025 Computer Shop Near Me. All rights reserved.',
    madeWith: 'Made with ❤️ for our community'
  },
  es: {
    // Navigation
    home: 'Inicio',
    about: 'Acerca de',
    services: 'Servicios',
    graphics: 'Gráficos',
    customers: 'Clientes',
    contact: 'Contacto',
    
    // Hero Section
    heroTitle: 'Tienda de Computadoras Cerca de Mí',
    heroTagline: '¿Tienes una pregunta o necesitas una reparación? Nuestro equipo experto está listo para ayudarte con todas tus necesidades informáticas. ¡Contáctanos hoy para un servicio rápido y confiable!',
    heroButton: 'Comienza Hoy',
    heroSecondaryButton: 'Aprende Más',
    
    // About Section
    aboutTitle: 'Acerca de Tienda de Computadoras Cerca de Mí',
    aboutDescription: 'Somos tu proveedor local de confianza para reparación de computadoras y servicios tecnológicos. Con años de experiencia y pasión por la tecnología, ofrecemos soluciones confiables para todas tus necesidades informáticas.',
    sameDayTitle: 'Soluciones el Mismo Día',
    sameDayDesc: 'Soluciones rápidas el mismo día para reparaciones urgentes',
    allDevicesTitle: 'Todos los Tipos de Dispositivos',
    allDevicesDesc: 'Reparaciones de hardware/software para Laptops, Todo-en-Uno, Escritorio, Windows y macOS',
    specializedTitle: 'Cuidado Especializado',
    specializedDesc: 'Mantenimiento especial para dispositivos Apple y computadoras gaming',
    payAfterTitle: 'Paga Después de la Reparación',
    payAfterDesc: 'Solo paga por el servicio después de que hayamos dejado tu máquina en condición óptima',
    happyCustomers: 'Clientes Felices',
    responseTime: 'Tiempo de Respuesta',
    
    // Services Section
    servicesTitle: 'Nuestros Servicios',
    servicesDescription: 'Ofrecemos servicios integrales de computadoras y tecnología para satisfacer todas tus necesidades',
    computerRepairTitle: 'Reparación de Computadoras',
    computerRepairDesc: 'Solución de problemas rápida y confiable para todos los problemas tecnológicos. Diagnosticamos y reparamos problemas de hardware y software rápidamente.',
    webDesignTitle: 'Diseño Web',
    webDesignDesc: 'Creación de sitios web limpios y profesionales que representan perfectamente tu negocio y atraen clientes.',
    graphicDesignTitle: 'Diseño Gráfico',
    graphicDesignDesc: 'Visuales adaptados para dar vida a tus ideas con soluciones de diseño creativas y profesionales.',
    customPCTitle: 'Construcción de PC Personalizadas',
    customPCDesc: 'Sistemas personalizados construidos según tus especificaciones para gaming, trabajo o aplicaciones especializadas.',
    tvRepairTitle: 'Reparación de TV',
    tvRepairDesc: 'Servicios profesionales de reparación de televisores para todas las marcas y modelos principales.',
    notaryTitle: 'Servicios Notariales',
    notaryDesc: 'Servicios notariales convenientes para tus necesidades de documentos importantes.',
    
    // Graphics Section
    graphicsPortfolioTitle: 'Nuestro Portafolio de Gráficos',
    graphicsPortfolioDesc: 'Explora nuestro trabajo de diseño creativo y soluciones visuales',
    logoDesignTitle: 'Diseño de Logotipos',
    logoDesignDesc: 'Logotipos personalizados que representan la identidad de tu marca',
    businessCardsTitle: 'Tarjetas de Presentación',
    businessCardsDesc: 'Diseños profesionales de tarjetas de presentación que causan impresión',
    flyersTitle: 'Volantes y Carteles',
    flyersDesc: 'Materiales promocionales llamativos para tu negocio',
    portfolioComingSoon: 'Portafolio Próximamente',
    portfolioComingSoonDesc: '¡Actualmente estamos actualizando nuestro portafolio con nuestros últimos trabajos. Vuelve pronto para ver nuestros increíbles diseños!',
    
    // Customers Section
    customersTitle: 'Lo que Dicen Nuestros Clientes',
    customersDescription: 'No solo tomes nuestra palabra - esto es lo que nuestros clientes satisfechos tienen que decir',
    yearsExperience: 'Años de Experiencia',
    devicesRepaired: 'Dispositivos Reparados',
    customerSatisfaction: 'Satisfacción del Cliente',
    responseTimeHours: 'Respuesta en 24hrs',
    reviewsComingSoon: '¡Más Reseñas Próximamente!',
    reviewsComingSoonDesc: 'Estamos recopilando activamente más reseñas de clientes para compartir sus experiencias con nuestros servicios.',
    
    // Contact Section
    contactTitle: 'Ponte en Contacto',
    contactDescription: '¿Listo para reparar tu computadora? Contáctanos hoy para un servicio rápido y confiable.',
    contactPhone: 'Teléfono',
    contactEmail: 'Correo',
    contactHours: 'Horarios',
    contactLocation: 'Ubicación',
    contactFormTitle: 'Envíanos un mensaje',
    nameLabel: 'Nombre',
    emailLabel: 'Correo',
    messageLabel: 'Mensaje',
    sendButton: 'Enviar Mensaje',
    namePlaceholder: 'Tu Nombre',
    emailPlaceholder: 'tu.correo@ejemplo.com',
    messagePlaceholder: 'Cuéntanos sobre tu problema de computadora...',
    
    // Footer
    footerDescription: 'Tu proveedor local de confianza para reparación de computadoras y servicios tecnológicos.',
    quickLinks: 'Enlaces Rápidos',
    ourServices: 'Nuestros Servicios',
    backToTop: 'Volver Arriba',
    copyright: '© 2025 Tienda de Computadoras Cerca de Mí. Todos los derechos reservados.',
    madeWith: 'Hecho con ❤️ para nuestra comunidad'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};