
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 dark:from-accent/10 dark:to-transparent pointer-events-none"></div>
      <div className="container-tight relative z-10 px-4 pt-20">
        <div className="flex flex-col items-start gap-4 animate-fade-in">
          <p className="text-accent font-medium">Hola, me llamo</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
            Jesús Guerra
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-muted-foreground mb-6">
            Desarrollador Web Full Stack
          </h2>
          <p className="text-lg max-w-2xl mb-8">
            Construyo aplicaciones y sitios web responsivos con gran experiencia
            de usuario. Especializado en React, Next.js y Node.js para crear
            soluciones digitales modernas y escalables.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href="#projects">Ver proyectos</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contáctame</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down" className="text-accent">
          <ArrowDown />
        </a>
      </div>
    </section>
  );
}
