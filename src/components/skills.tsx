
export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "soft";
}

const skills: Skill[] = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "React", level: 92, category: "frontend" },
  { name: "Next.js", level: 88, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express", level: 82, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 75, category: "backend" },
  { name: "Git/GitHub", level: 88, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "AWS", level: 70, category: "tools" },
  { name: "Figma", level: 65, category: "tools" },
];

export function Skills() {
  const categories = [
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "tools", name: "Herramientas" },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-tight">
        <h2 className="text-3xl font-bold text-center mb-12">
          Mis <span className="text-accent">Habilidades</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-card rounded-lg p-6 shadow-sm dark:shadow-accent/5 border"
            >
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-accent h-2 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}

          <div className="bg-card rounded-lg p-6 shadow-sm dark:shadow-accent/5 border">
            <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Trabajo en equipo</li>
              <li>Comunicación efectiva</li>
              <li>Resolución de problemas</li>
              <li>Pensamiento analítico</li>
              <li>Aprendizaje rápido</li>
              <li>Adaptabilidad</li>
              <li>Gestión del tiempo</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
