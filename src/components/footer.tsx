
import { useLanguage } from "@/components/language-provider";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className="bg-secondary/80 dark:bg-secondary/20 py-12 border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand section */}
          <div className="space-y-3">
            <p className="text-2xl font-bold">
              <span className="text-accent">Jesús</span> Guerra
            </p>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t("hero.role")}
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://github.com/jesusaviladev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/jesus-guerra-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:jesus.guerra.dev@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-accent transition-colors">
                  {t("nav.projects")}
                </a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-accent transition-colors">
                  {t("nav.skills")}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Copyright */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">{t("footer.legal")}</h3>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} {t("footer.rights")}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {t("footer.designed")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
