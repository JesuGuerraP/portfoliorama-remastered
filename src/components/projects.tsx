
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  category: string[];
}

const projects: Project[] = [
  {
    id: "1",
    title: "Vortal - Portal Empresarial",
    description: "Portal empresarial con gestión de usuarios, documentos y flujos de trabajo. Implementación de autenticación, visualización de documentos y tableros de control.",
    image: "https://res.cloudinary.com/jesus-guerra-portfolio/image/upload/v1685025718/Portal_Empresarial_Vortal_nelzgz.png",
    tags: ["React", "Material UI", "Firebase", "Redux"],
    demo: "https://sien-vortal-dev.web.app/",
    category: ["frontend"],
  },
  {
    id: "2",
    title: "Dashboard de Ventas",
    description: "Panel administrativo para análisis de ventas, pedidos y estadísticas con múltiples visualizaciones de datos y reportes personalizables.",
    image: "https://res.cloudinary.com/jesus-guerra-portfolio/image/upload/v1684766499/dashboard_fu5pyd.png",
    tags: ["Next.js", "Tailwind CSS", "Chart.js", "PostgreSQL"],
    github: "https://github.com/jesusaviladev/saas-dashboard",
    demo: "https://dashboard-saas-demo.vercel.app/",
    category: ["fullstack"],
  },
  {
    id: "3",
    title: "Sistema de Inventario",
    description: "Sistema para gestión de inventario, productos y categorías con CRUD completo, búsqueda avanzada y reportes.",
    image: "https://res.cloudinary.com/jesus-guerra-portfolio/image/upload/v1684766499/inventory_thzxl9.png",
    tags: ["React", "Express", "MongoDB", "JWT"],
    github: "https://github.com/jesusaviladev/inventory-app",
    category: ["backend", "fullstack"],
  },
  {
    id: "4",
    title: "E-commerce de Calzado",
    description: "Tienda en línea especializada en calzado con carrito de compras, pasarela de pagos y sistema de reseñas.",
    image: "https://res.cloudinary.com/jesus-guerra-portfolio/image/upload/v1684766498/ecommerce_iltvxw.png",
    tags: ["Next.js", "Stripe", "Supabase", "Tailwind CSS"],
    github: "https://github.com/jesusaviladev/next-ecommerce",
    demo: "https://sneakers-store-demo.vercel.app/",
    category: ["frontend", "fullstack"],
  },
  {
    id: "5",
    title: "API de Gestión de Tareas",
    description: "API RESTful para gestión de tareas y proyectos con autenticación, validaciones y documentación completa.",
    image: "https://res.cloudinary.com/jesus-guerra-portfolio/image/upload/v1684766499/api_gd0wdq.png",
    tags: ["Node.js", "Express", "MongoDB", "Swagger"],
    github: "https://github.com/jesusaviladev/api-tasks",
    category: ["backend"],
  },
  {
    id: "6",
    title: "Portafolio Personal",
    description: "Sitio web de portafolio con secciones de proyectos, habilidades y formulario de contacto. Implementa modo oscuro y es completamente responsivo.",
    image: "https://res.cloudinary.com/jesus-guerra-portfolio/image/upload/v1684766498/portfolio_whf3hu.png",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/jesusaviladev/portfolio",
    demo: "https://jesus-guerra-portafolio-flame-xi-71.vercel.app/",
    category: ["frontend"],
  },
];

export function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const { t } = useLanguage();
  const { elementRef, isVisible } = useScrollAnimation();
  const [visibleProjects, setVisibleProjects] = useState<string[]>([]);
  const projectRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  
  const categories = [
    { id: "all", name: "Todos" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "fullstack", name: "Full Stack" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute('data-id');
          if (id && entry.isIntersecting) {
            setVisibleProjects(prev => [...prev, id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach(ref => {
      observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach(ref => {
        observer.unobserve(ref);
      });
    };
  }, [filter]);

  return (
    <section id="projects" className="section-padding bg-secondary/30 dark:bg-secondary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/5 to-transparent pointer-events-none"></div>
      <div className="container-tight">
        <div ref={elementRef} className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold mb-4 relative inline-block">
            Mis Proyectos
            <span className="absolute bottom-0 left-0 w-full h-1 bg-accent rounded-full transform scale-x-0 transition-transform duration-700 origin-left" 
                  style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}></span>
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Un vistazo a los principales proyectos en los que he trabajado recientemente
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category, index) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className="rounded-full transition-all hover:shadow-md"
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isVisible ? 1 : 0
                }}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              data-id={project.id}
              ref={el => el && projectRefs.current.set(project.id, el)}
              className="bg-card border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
              style={{ 
                transform: visibleProjects.includes(project.id) ? 'translateY(0)' : 'translateY(40px)',
                opacity: visibleProjects.includes(project.id) ? 1 : 0,
                transition: `all 0.7s ease-out ${index * 0.1}s`
              }}
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-secondary text-xs px-2 py-1 rounded-full transition-all hover:-translate-y-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <Button size="sm" variant="outline" asChild className="group">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 overflow-hidden"
                      >
                        <Github className="h-4 w-4 transition-transform group-hover:rotate-12" />
                        <span>Código</span>
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" asChild className="group">
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 overflow-hidden"
                      >
                        <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        <span>Demo</span>
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
