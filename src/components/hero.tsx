
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { useEffect, useRef, useState } from "react";
import "../styles/hero.css";

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

export function Hero() {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const particles = Array.from({ length: 20 }, (_, i) => i);
  
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
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 dark:from-accent/10 dark:to-transparent pointer-events-none"></div>
      
      {/* Floating particles */}
      <div className="particles-container">
        {particles.map((i) => (
          <FloatingParticle key={i} delay={i * 0.4} />
        ))}
      </div>
      
      {/* Animated shapes */}
      <div className="animated-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="container-tight relative z-10 px-4 pt-20">
        <div className="flex flex-col items-start gap-4 animate-fade-in">
          <p className="text-accent font-medium glow-text">{t("hero.greeting")}</p>
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 hero-title"
            style={parallaxStyle}
          >
            Jesús Guerra
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-muted-foreground mb-6 hero-subtitle">
            {t("hero.role")}
          </h2>
          <p className="text-lg max-w-2xl mb-8">
            {t("hero.description")}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="cta-button">
              <a href="#projects">{t("hero.projects")}</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="cta-button-secondary">
              <a href="#contact">{t("hero.contact")}</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down" className="text-accent">
          <ArrowDown className="arrow-down" />
        </a>
      </div>
    </section>
  );
}
