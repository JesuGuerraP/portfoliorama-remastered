
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState } from "react";

export function About() {
  const { t } = useLanguage();
  const { elementRef, isVisible } = useScrollAnimation();
  const [animateImage, setAnimateImage] = useState(false);
  
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setAnimateImage(true), 300);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isVisible]);
  
  return (
    <section id="about" className="section-padding bg-secondary/50 dark:bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none"></div>
      <div className="container-tight relative z-10">
        <div ref={elementRef} className={`flex flex-col md:flex-row gap-10 items-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="md:w-2/5 flex-shrink-0">
            <div className="relative">
              <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/20 mx-auto transition-all duration-700 ${animateImage ? 'scale-100 shadow-xl' : 'scale-95 opacity-90'}`}>
                <img 
                  src="https://media.licdn.com/dms/image/C5603AQHlGGViQKfXnA/profile-displayphoto-shrink_400_400/0/1661871671155?e=1721260800&v=beta&t=3q-u8ex3L8xsr4XkO1ibXdMgcLu1AN4BoRgysDXc02E" 
                  alt="Jesús Guerra" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center text-white font-bold transition-all duration-700 ${animateImage ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                <span>+4 años</span>
              </div>
            </div>
          </div>
          <div className="md:w-3/5">
            <h2 className={`text-3xl font-bold mb-6 transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              Sobre <span className="text-accent">mí</span>
            </h2>
            <p className={`mb-4 transition-all duration-700 delay-100 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              Me llamo Jesús Guerra, soy un programador con más de cuatro años de experiencia en desarrollo web y enfocado principalmente en la creación de aplicaciones con React y Next.js.
            </p>
            <p className={`mb-4 transition-all duration-700 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              Soy un apasionado de las nuevas tecnologías y me encanta aprender constantemente. Me especializo en crear interfaces modernas, atractivas y optimizadas para brindar la mejor experiencia de usuario posible.
            </p>
            <p className={`mb-6 transition-all duration-700 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              He trabajado en diversos proyectos, desde sitios web corporativos hasta aplicaciones complejas SaaS, siempre enfocándome en ofrecer soluciones de calidad que cumplan con los requerimientos del cliente.
            </p>
            <div className={`transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Button variant="default" size="lg" asChild className="relative overflow-hidden group">
                <a href="/cv.pdf" download>
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <Download className="mr-2 h-4 w-4" /> Descargar CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
