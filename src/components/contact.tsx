
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, Linkedin, Github, Download } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import emailjs from '@emailjs/browser';

export function Contact() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { elementRef, isVisible } = useScrollAnimation();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  useEffect(() => {
    // Initialize EmailJS with public key
    emailjs.init("H7gTT_HYNPMcMEUK7"); // Using the provided public key
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!formRef.current) return;
    
    try {
      // Make sure form values are being sent correctly
      const templateParams = {
        from_name: formData.user_name,
        from_email: formData.user_email,
        message: formData.message,
        to_email: 'jesusguerrapineda000@gmail.com'
      };
      
      // Send email with the updated template parameters
      const result = await emailjs.sendForm(
        'service_xixfqpp', // Updated service ID
        'template_9q2cgy4', // Updated template ID
        formRef.current,
        'H7gTT_HYNPMcMEUK7' // Updated public key
      );

      if (result.text === 'OK') {
        toast({
          title: t("contact.form.success"),
          description: t("contact.form.success"),
        });
        setFormData({ user_name: '', user_email: '', message: '' });
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      toast({
        title: t("contact.form.error"),
        description: t("contact.form.error"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none"></div>
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mt-48 -mr-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full -mb-32 -ml-32 blur-3xl"></div>
      </div>
      
      <div className="container-tight relative z-10">
        <div ref={elementRef} className={`transition-all duration-700 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center mb-4 relative inline-block">
            <span className="text-accent">{t("contact.title")}</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-accent rounded-full transform scale-x-0 transition-transform duration-700 origin-left" 
                style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}></span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="transition-all duration-500 hover:translate-y-[-2px]">
                <Input
                  id="user_name"
                  name="user_name"
                  placeholder={t("contact.form.name")}
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                  className="border-accent/20 focus:border-accent/50 transition-all"
                />
              </div>
              <div className="transition-all duration-500 hover:translate-y-[-2px]">
                <Input
                  id="user_email"
                  name="user_email"
                  type="email"
                  placeholder={t("contact.form.email")}
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  className="border-accent/20 focus:border-accent/50 transition-all"
                />
              </div>
              <div className="transition-all duration-500 hover:translate-y-[-2px]">
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t("contact.form.message")}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[160px] border-accent/20 focus:border-accent/50 transition-all"
                />
              </div>
              {/* Hidden fields for the EmailJS template */}
              <input type="hidden" name="from_name" value={formData.user_name} />
              <input type="hidden" name="from_email" value={formData.user_email} />
              <input type="hidden" name="to_email" value="jesusguerrapineda000@gmail.com" />
              
              <Button
                type="submit"
                className="w-full relative overflow-hidden group"
                disabled={isSubmitting}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10">
                  {isSubmitting ? t("contact.form.sending") : t("contact.form.submit")}
                </span>
              </Button>
            </form>
          </div>

          <div className={`flex flex-col justify-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-8">
              <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-all duration-500">
                <h3 className="font-semibold text-lg mb-4">{t("contact.info.title")}</h3>
                <div className="space-y-4">
                  <div className="flex items-start group">
                    <Mail className="w-5 h-5 mt-1 mr-3 text-accent group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-medium">{t("contact.info.email")}</p>
                      <a href="mailto:jesus.guerra.dev@gmail.com" className="text-foreground hover:text-accent transition-colors">
                        jesus.guerra.dev@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <Phone className="w-5 h-5 mt-1 mr-3 text-accent group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-medium">{t("contact.info.phone")}</p>
                      <a href="tel:+584246967674" className="text-foreground hover:text-accent transition-colors">
                        +58 424-6967674
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-all duration-500">
                <h3 className="font-semibold text-lg mb-4">{t("contact.social.title")}</h3>
                <div className="flex flex-col gap-4">
                  <a 
                    href="https://linkedin.com/in/jesus-guerra-dev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground hover:text-accent group transition-colors"
                  >
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href="https://github.com/jesusaviladev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground hover:text-accent group transition-colors"
                  >
                    <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2 group hover:border-accent/50"
                  onClick={() => window.open('/Jesus-Guerra-CV.pdf', '_blank')}
                >
                  <Download className="w-4 h-4 group-hover:text-accent transition-colors" />
                  <span className="group-hover:text-accent transition-colors">{t("about.download")}</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
