
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useTheme } from "@/components/theme-provider";
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/components/language-provider";

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

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const [progress, setProgress] = useState(0);
  const { elementRef, isVisible } = useScrollAnimation();

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isVisible) {
      timeout = setTimeout(() => {
        setProgress(level);
      }, 100);
    } else {
      setProgress(0);
    }
    return () => clearTimeout(timeout);
  }, [isVisible, level]);

  return (
    <div ref={elementRef} className="animate-on-scroll">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <Progress 
        value={progress} 
        className="h-2" 
        indicatorClassName="bg-accent transition-all duration-1000 ease-in-out" 
      />
    </div>
  );
};

export function Skills() {
  const { t } = useLanguage();
  
  const categories = [
    { id: "frontend", name: t("skills.frontend") },
    { id: "backend", name: t("skills.backend") },
    { id: "tools", name: t("skills.tools") },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-tight">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t("skills.title")}
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
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
              </div>
            </div>
          ))}

          <div className="bg-card rounded-lg p-6 shadow-sm dark:shadow-accent/5 border">
            <h3 className="text-xl font-semibold mb-4">{t("skills.soft")}</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>{t("skills.teamwork")}</li>
              <li>{t("skills.communication")}</li>
              <li>{t("skills.problemSolving")}</li>
              <li>{t("skills.analytical")}</li>
              <li>{t("skills.fastLearning")}</li>
              <li>{t("skills.adaptability")}</li>
              <li>{t("skills.timeManagement")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
