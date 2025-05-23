
import React, { useEffect, useRef, useState } from "react";
import { ArrowDown, Code, Globe, Zap, Star, Database, Server, Component, FileCode, Coffee, FileJson, Flame, Database as DatabaseIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import "../styles/hero.css";
import { useIsMobile } from "@/hooks/use-mobile";

const FloatingParticle = ({ delay = 0 }) => {
  return (
    <div 
      className="particle" 
      style={{ 
        animationDelay: `${delay}s`,
        left: `${Math.random() * 100}%`,
      }}
    ></div>
  );
};

const TechBadge = ({ icon, text, className = "" }) => {
  const Icon = icon;
  return (
    <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent animate-float ${className}`}>
      <Icon className="h-3.5 w-3.5" />
      <span>{text}</span>
    </div>
  );
};

export function Hero() {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const particles = Array.from({ length: 20 }, (_, i) => i);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const parallaxStyle = {
    transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden py-12 md:py-0"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 dark:from-accent/10 dark:to-transparent pointer-events-none"></div>
      
      {/* Enhanced floating particles */}
      <div className="particles-container">
        {particles.map((i) => (
          <FloatingParticle key={i} delay={i * 0.4} />
        ))}
      </div>
      
      {/* Enhanced animated shapes */}
      <div className="animated-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <div className="container-tight relative z-10 px-4 md:px-6 pt-20 md:pt-24">
        <div className="flex flex-col items-start gap-4 animate-fade-in max-w-3xl mx-auto">
          {/* Tech badges - Single row on desktop, hidden on mobile */}
          <div className="flex flex-wrap gap-2 mb-4 w-full">
            {!isMobile && (
              <div className="flex flex-wrap gap-2">
                <TechBadge icon={Code} text="React" className="animate-delay-100" />
                <TechBadge icon={Globe} text="Next.js" className="animate-delay-200" />
                <TechBadge icon={FileJson} text="JavaScript" className="animate-delay-300" />
                <TechBadge icon={Star} text="TailwindCSS" className="animate-delay-400" />
                <TechBadge icon={Coffee} text="Java" className="animate-delay-500" />
                <TechBadge icon={Component} text="SpringBoot" className="animate-delay-600" />
                <TechBadge icon={DatabaseIcon} text="MySQL" className="animate-delay-700" />
                <TechBadge icon={Flame} text="Firebase" className="animate-delay-800" />
                <TechBadge icon={FileCode} text="Bootstrap" className="animate-delay-900" />
              </div>
            )}
          </div>
          
          <p className="text-accent font-medium glow-text mt-4">{t("hero.greeting")}</p>
          <h1 
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 hero-title bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-accent"
            style={parallaxStyle}
          >
            Jesús Guerra
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-muted-foreground mb-6 hero-subtitle">
            {t("hero.role")}
          </h2>
          <p className="text-lg max-w-2xl mb-8 leading-relaxed">
            {t("hero.description")}
          </p>
          
          {/* Updated button layout - side by side for both mobile and desktop */}
          <div className="flex flex-row gap-3 w-full">
            <Button asChild size={isMobile ? "sm" : "lg"} className="btn-gradient group">
              <a href="#projects" className="relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  {t("hero.projects")}
                  <Code className="w-4 h-4 transition-transform group-hover:rotate-12" />
                </span>
                <span className="absolute inset-0 w-full h-full bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </a>
            </Button>
            <Button variant="outline" size={isMobile ? "sm" : "lg"} asChild className="border-accent/20 hover:border-accent/50 hover:bg-accent/5">
              <a href="#contact" className="flex items-center gap-2">
                {t("hero.contact")}
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" aria-label="Scroll down" className="text-accent hover:text-accent/80 transition-colors">
          <ArrowDown className="arrow-down" />
        </a>
      </div>
    </section>
  );
}
