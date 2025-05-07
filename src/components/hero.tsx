
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 dark:from-accent/10 dark:to-transparent pointer-events-none"></div>
      <div className="container-tight relative z-10 px-4 pt-20">
        <div className="flex flex-col items-start gap-4 animate-fade-in">
          <p className="text-accent font-medium">{t("hero.greeting")}</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
            Jesús Guerra
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-muted-foreground mb-6">
            {t("hero.role")}
          </h2>
          <p className="text-lg max-w-2xl mb-8">
            {t("hero.description")}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href="#projects">{t("hero.projects")}</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">{t("hero.contact")}</a>
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
