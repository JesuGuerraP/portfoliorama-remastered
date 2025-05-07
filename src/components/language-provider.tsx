
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
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    
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
