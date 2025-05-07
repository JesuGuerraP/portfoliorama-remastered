
import React, { createContext, useContext, useState } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About me",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    
    // Hero section
    "hero.greeting": "Hi, my name is",
    "hero.role": "Full Stack Web Developer",
    "hero.description": "I build responsive web applications with great user experience. Specialized in React, Next.js and Node.js to create modern and scalable digital solutions.",
    "hero.projects": "View projects",
    "hero.contact": "Contact me",

    // About section
    "about.title": "About me",
    "about.experience": "years",
    "about.paragraph1": "I am a full stack web developer with over 5 years of experience, specialized in creating exceptional digital experiences. My approach combines visually appealing design with clean and efficient code.",
    "about.paragraph2": "I enjoy solving complex problems and transforming ideas into functional and elegant web applications. I constantly keep myself updated with the latest technologies and best practices in web development.",
    "about.paragraph3": "My goal is to contribute to innovative projects where I can apply my technical expertise and creativity to create digital solutions that truly impact users.",
    "about.download": "Download CV",
    
    // Skills section
    "skills.title": "My Skills",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.tools": "Tools",
    "skills.soft": "Soft Skills",
    "skills.teamwork": "Teamwork",
    "skills.communication": "Effective communication",
    "skills.problemSolving": "Problem solving",
    "skills.analytical": "Analytical thinking",
    "skills.fastLearning": "Fast learning",
    "skills.adaptability": "Adaptability",
    "skills.timeManagement": "Time management",

    // Project section
    "projects.title": "My Projects",
    "projects.subtitle": "A selection of my recent work, both personal and professional.",
    "projects.categories.all": "All",
    "projects.categories.frontend": "Frontend",
    "projects.categories.backend": "Backend",
    "projects.categories.fullstack": "Full Stack",
    "projects.code": "Code",
    "projects.demo": "Demo",

    // Contact section
    "contact.title": "Contact Me",
    "contact.subtitle": "Do you have a project in mind or want to talk about job opportunities? Send me a message!",
    "contact.form.name": "Your name",
    "contact.form.email": "Your email",
    "contact.form.message": "Your message",
    "contact.form.submit": "Send message",
    "contact.form.sending": "Sending...",
    "contact.form.success": "Message sent! I'll get back to you as soon as possible.",
    "contact.form.error": "There was a problem sending your message. Please try again.",
    "contact.info.title": "Contact information",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.social.title": "Social networks",

    // Footer
    "footer.rights": "All rights reserved",
    "footer.designed": "Designed and developed with ❤️"
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    
    // Hero section
    "hero.greeting": "Hola, me llamo",
    "hero.role": "Desarrollador Web Full Stack",
    "hero.description": "Construyo aplicaciones y sitios web responsivos con gran experiencia de usuario. Especializado en React, Next.js y Node.js para crear soluciones digitales modernas y escalables.",
    "hero.projects": "Ver proyectos",
    "hero.contact": "Contáctame",

    // About section
    "about.title": "Sobre mí",
    "about.experience": "años",
    "about.paragraph1": "Soy un desarrollador web full stack con más de 5 años de experiencia, especializado en crear experiencias digitales excepcionales. Mi enfoque combina diseño visualmente atractivo con código limpio y eficiente.",
    "about.paragraph2": "Disfruto resolviendo problemas complejos y transformando ideas en aplicaciones web funcionales y elegantes. Constantemente me mantengo actualizado con las últimas tecnologías y mejores prácticas del desarrollo web.",
    "about.paragraph3": "Mi objetivo es contribuir a proyectos innovadores donde pueda aplicar mi experiencia técnica y creatividad para crear soluciones digitales que realmente impacten a los usuarios.",
    "about.download": "Descargar CV",
    
    // Skills section
    "skills.title": "Mis Habilidades",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.tools": "Herramientas",
    "skills.soft": "Soft Skills",
    "skills.teamwork": "Trabajo en equipo",
    "skills.communication": "Comunicación efectiva",
    "skills.problemSolving": "Resolución de problemas",
    "skills.analytical": "Pensamiento analítico",
    "skills.fastLearning": "Aprendizaje rápido",
    "skills.adaptability": "Adaptabilidad",
    "skills.timeManagement": "Gestión del tiempo",

    // Project section
    "projects.title": "Mis Proyectos",
    "projects.subtitle": "Una selección de mis trabajos recientes, personales y profesionales.",
    "projects.categories.all": "Todos",
    "projects.categories.frontend": "Frontend",
    "projects.categories.backend": "Backend",
    "projects.categories.fullstack": "Full Stack",
    "projects.code": "Código",
    "projects.demo": "Demo",

    // Contact section
    "contact.title": "Contáctame",
    "contact.subtitle": "¿Tienes un proyecto en mente o quieres hablar sobre oportunidades laborales? ¡Envíame un mensaje!",
    "contact.form.name": "Tu nombre",
    "contact.form.email": "Tu correo electrónico",
    "contact.form.message": "Tu mensaje",
    "contact.form.submit": "Enviar mensaje",
    "contact.form.sending": "Enviando...",
    "contact.form.success": "¡Mensaje enviado! Te responderé lo antes posible.",
    "contact.form.error": "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
    "contact.info.title": "Información de contacto",
    "contact.info.email": "Email",
    "contact.info.phone": "Teléfono",
    "contact.social.title": "Redes sociales",

    // Footer
    "footer.rights": "Todos los derechos reservados",
    "footer.designed": "Diseñado y desarrollado con ❤️"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
