
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section-padding bg-secondary/50 dark:bg-secondary/20">
      <div className="container-tight">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-2/5 flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/20 mx-auto">
                {/* Imagen de perfil (sustituir con tu foto) */}
                <div className="w-full h-full bg-accent/10 flex items-center justify-center text-accent text-6xl">
                  JG
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                <span>5+ años</span>
              </div>
            </div>
          </div>
          <div className="md:w-3/5">
            <h2 className="text-3xl font-bold mb-6">
              Sobre <span className="text-accent">mí</span>
            </h2>
            <p className="mb-4">
              Soy un desarrollador web full stack con más de 5 años de experiencia,
              especializado en crear experiencias digitales excepcionales. Mi enfoque
              combina diseño visualmente atractivo con código limpio y eficiente.
            </p>
            <p className="mb-4">
              Disfruto resolviendo problemas complejos y transformando ideas en
              aplicaciones web funcionales y elegantes. Constantemente me mantengo
              actualizado con las últimas tecnologías y mejores prácticas del desarrollo web.
            </p>
            <p className="mb-6">
              Mi objetivo es contribuir a proyectos innovadores donde pueda aplicar mi
              experiencia técnica y creatividad para crear soluciones digitales que
              realmente impacten a los usuarios.
            </p>
            <Button variant="default" size="lg" asChild>
              <a href="/cv.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Descargar CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
