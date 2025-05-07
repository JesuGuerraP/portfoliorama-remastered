
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function About() {
  const { t } = useLanguage();
  
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
                <span>5+ {t("about.experience")}</span>
              </div>
            </div>
          </div>
          <div className="md:w-3/5">
            <h2 className="text-3xl font-bold mb-6">
              {t("about.title")} <span className="text-accent">mí</span>
            </h2>
            <p className="mb-4">
              {t("about.paragraph1")}
            </p>
            <p className="mb-4">
              {t("about.paragraph2")}
            </p>
            <p className="mb-6">
              {t("about.paragraph3")}
            </p>
            <Button variant="default" size="lg" asChild>
              <a href="/cv.pdf" download>
                <Download className="mr-2 h-4 w-4" /> {t("about.download")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
