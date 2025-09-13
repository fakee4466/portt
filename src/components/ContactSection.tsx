import { Send, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ContactData {
  phone: string;
  email: string;
  address: string;
}

interface ContactSectionProps {
  contact: ContactData;
}

export const ContactSection = ({ contact }: ContactSectionProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock submission with delay
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="mb-18 animate-fade-up animate-delay-300">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
          <Send className="w-4 h-4 text-accent" />
        </div>
        <div>
          <h2 className="font-heading font-semibold text-2xl text-text">Contact</h2>
          <p className="text-text-muted mt-1">Let's Get in Touch!</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-4">
          {/* Phone */}
          <div className="bg-card-bg border border-[hsl(var(--border))] rounded-lg p-4 flex items-center gap-4">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <Phone className="w-4 h-4 text-accent" />
            </div>
            <div>
              <p className="text-xs text-text-muted uppercase tracking-wide font-medium mb-1">Phone</p>
              <p className="text-text font-medium">{contact.phone}</p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-card-bg border border-[hsl(var(--border))] rounded-lg p-4 flex items-center gap-4">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <Mail className="w-4 h-4 text-accent" />
            </div>
            <div>
              <p className="text-xs text-text-muted uppercase tracking-wide font-medium mb-1">Email</p>
              <p className="text-text font-medium">{contact.email}</p>
            </div>
          </div>

          {/* Address */}
          <div className="bg-card-bg border border-[hsl(var(--border))] rounded-lg p-4 flex items-center gap-4">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <MapPin className="w-4 h-4 text-accent" />
            </div>
            <div>
              <p className="text-xs text-text-muted uppercase tracking-wide font-medium mb-1">Address</p>
              <p className="text-text font-medium text-sm leading-relaxed">{contact.address}</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="sr-only">Full Name</label>
                <Input
                  id="fullName"
                  placeholder="Full Name"
                  required
                  className="bg-input-bg border-[hsl(var(--border))] text-text placeholder:text-text-placeholder focus:border-accent focus:ring-accent/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="bg-input-bg border-[hsl(var(--border))] text-text placeholder:text-text-placeholder focus:border-accent focus:ring-accent/20"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="sr-only">Phone Number</label>
              <Input
                id="phone"
                type="tel"
                placeholder="Phone Number"
                className="bg-input-bg border-[hsl(var(--border))] text-text placeholder:text-text-placeholder focus:border-accent focus:ring-accent/20"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <Textarea
                id="message"
                placeholder="Message"
                rows={5}
                required
                className="bg-input-bg border-[hsl(var(--border))] text-text placeholder:text-text-placeholder focus:border-accent focus:ring-accent/20 resize-none"
              />
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent hover:bg-accent/90 text-black font-medium py-3 h-auto"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};