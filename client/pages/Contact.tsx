import Layout from "@/components/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            Contact Us
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground">
                  Have questions about our services? Reach out to our team
                  today.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="font-bold text-primary mb-2">Address</p>
                  <p className="text-muted-foreground">
                    4004 Barrett Dr, Ste 202
                    <br />
                    Raleigh, NC 27609
                  </p>
                </div>

                <div>
                  <p className="font-bold text-primary mb-2">Phone</p>
                  <a
                    href="tel:919-355-5317"
                    className="text-secondary hover:text-secondary/80 transition-colors font-medium"
                  >
                    919-355-5317
                  </a>
                </div>

                <div>
                  <p className="font-bold text-primary mb-2">Email</p>
                  <a
                    href="mailto:info@broadridgeproperties.com"
                    className="text-secondary hover:text-secondary/80 transition-colors font-medium"
                  >
                    info@broadridgeproperties.com
                  </a>
                </div>

                <div>
                  <p className="font-bold text-primary mb-2">Hours</p>
                  <p className="text-muted-foreground text-sm">
                    Monday - Friday: 9:00 AM - 5:00 PM
                    <br />
                    Saturday: 10:00 AM - 3:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Full Name
                </label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={contactForm.name}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, name: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={contactForm.email}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, email: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="(123) 456-7890"
                  value={contactForm.phone}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, phone: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your inquiry..."
                  value={contactForm.message}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:outline-none focus:border-primary resize-none h-32"
                  required
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-3"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
