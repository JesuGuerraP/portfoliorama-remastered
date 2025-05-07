
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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
    
    // Simulación de envío de formulario
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({
        title: "Mensaje enviado",
        description: "¡Gracias por contactarme! Te responderé lo antes posible.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-tight">
        <h2 className="text-3xl font-bold text-center mb-4">
          <span className="text-accent">Contáctame</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente o quieres hablar sobre oportunidades laborales? ¡Envíame un mensaje!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  id="name"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Tu correo electrónico"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tu mensaje"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[160px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </form>
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-4">Información de contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 mt-1 mr-3 text-accent" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:tu.email@ejemplo.com" className="text-muted-foreground hover:text-accent">
                        tu.email@ejemplo.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 mt-1 mr-3 text-accent" />
                    <div>
                      <p className="font-medium">Teléfono</p>
                      <a href="tel:+1234567890" className="text-muted-foreground hover:text-accent">
                        +123 456 7890
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-4">Redes sociales</h3>
                <div className="flex flex-col gap-4">
                  <a 
                    href="https://linkedin.com/in/tu-perfil" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-accent"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href="https://github.com/tu-usuario" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-accent"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
