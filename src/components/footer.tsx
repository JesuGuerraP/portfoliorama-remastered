
import { useLanguage } from "@/components/language-provider";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className="bg-secondary/80 dark:bg-secondary/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold">
              <span className="text-accent">Jesús</span> Guerra
            </p>
            <p className="text-sm text-muted-foreground">
              {t("hero.role")}
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} {t("footer.rights")}
            </p>
            <p className="text-xs mt-1 text-muted-foreground">
              {t("footer.designed")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
