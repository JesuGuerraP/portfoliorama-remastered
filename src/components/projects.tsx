
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

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
    title: "E-commerce Dashboard",
    description: "Dashboard para gestionar inventario, ventas y clientes de una tienda online. Incluye gráficos y análisis de datos.",
    image: "https://via.placeholder.com/600x400?text=E-commerce+Dashboard",
    tags: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    github: "https://github.com/username/ecommerce-dashboard",
    demo: "https://ecommerce-dashboard.demo",
    category: ["frontend", "fullstack"],
  },
  {
    id: "2",
    title: "Blog Personal",
    description: "Plataforma de blog con sistema de gestión de contenidos, autenticación de usuarios y comentarios.",
    image: "https://via.placeholder.com/600x400?text=Blog+Personal",
    tags: ["Next.js", "MongoDB", "Auth.js", "CSS Modules"],
    github: "https://github.com/username/personal-blog",
    demo: "https://personal-blog.demo",
    category: ["fullstack"],
  },
  {
    id: "3",
    title: "API RESTful",
    description: "API para gestionar recursos con autenticación JWT, validación de datos y documentación con Swagger.",
    image: "https://via.placeholder.com/600x400?text=API+RESTful",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/username/restful-api",
    category: ["backend"],
  },
  {
    id: "4",
    title: "Aplicación de Clima",
    description: "Aplicación que muestra el pronóstico del clima en tiempo real utilizando la API de OpenWeather.",
    image: "https://via.placeholder.com/600x400?text=Weather+App",
    tags: ["React", "API Integration", "Styled Components"],
    github: "https://github.com/username/weather-app",
    demo: "https://weather-app.demo",
    category: ["frontend"],
  },
  {
    id: "5",
    title: "Sistema de Gestión",
    description: "Sistema de gestión empresarial con módulos de inventario, facturación, clientes y proveedores.",
    image: "https://via.placeholder.com/600x400?text=Sistema+de+Gestión",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    github: "https://github.com/username/management-system",
    category: ["fullstack"],
  },
  {
    id: "6",
    title: "Portafolio Web",
    description: "Página web de portafolio profesional con diseño moderno, modo oscuro y animaciones suaves.",
    image: "https://via.placeholder.com/600x400?text=Portafolio+Web",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/username/portfolio",
    demo: "https://portfolio.demo",
    category: ["frontend"],
  },
];

export function Projects() {
  const [filter, setFilter] = useState<string>("all");
  
  const categories = [
    { id: "all", name: "Todos" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "fullstack", name: "Full Stack" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  return (
    <section id="projects" className="section-padding bg-secondary/30 dark:bg-secondary/10">
      <div className="container-tight">
        <h2 className="text-3xl font-bold text-center mb-4">
          Mis <span className="text-accent">Proyectos</span>
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Una selección de mis trabajos recientes, personales y profesionales.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-card border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                      className="bg-secondary text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <Button size="sm" variant="outline" asChild>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <Github className="h-4 w-4" />
                        Código
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" asChild>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
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
