
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "es" ? "en" : "es")}
      className="focus:outline-none font-medium"
      aria-label="Toggle language"
    >
      {language === "es" ? "EN" : "ES"}
    </Button>
  );
}
