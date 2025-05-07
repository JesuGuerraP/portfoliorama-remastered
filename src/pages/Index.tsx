
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import "../styles/skills.css";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="system">
      <LanguageProvider>
        <main className="min-h-screen">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
