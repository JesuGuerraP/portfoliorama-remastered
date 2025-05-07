
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";

const navItems = [
  { title: "Inicio", href: "#home" },
  { title: "Sobre mí", href: "#about" },
  { title: "Habilidades", href: "#skills" },
  { title: "Proyectos", href: "#projects" },
  { title: "Contacto", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="text-2xl font-heading font-bold">
          <span className="text-accent">Jesús</span> Guerra
        </a>
        {isMobile ? (
          <>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-label="Menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
            {isMenuOpen && (
              <div className="fixed inset-0 bg-background z-50 flex flex-col">
                <div className="flex items-center justify-between px-4 h-16">
                  <a href="#home" className="text-2xl font-heading font-bold">
                    <span className="text-accent">Jesús</span> Guerra
                  </a>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleMenu}
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <nav className="flex-1 flex flex-col items-center justify-center">
                  <ul className="space-y-6 text-center">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className="text-xl font-medium hover:text-accent transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-4">
            <nav>
              <ul className="flex space-x-6">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="font-medium hover:text-accent transition-colors"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <ThemeToggle />
          </div>
        )}
      </div>
    </header>
  );
}
