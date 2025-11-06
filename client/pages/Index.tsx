import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [emailSignup, setEmailSignup] = useState("");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    userType: "owner",
    phone: "",
    message: "",
  });

  const heroSlides: HeroSlide[] = [
    {
      id: 1,
      title: "PROPERTY MANAGEMENT",
      subtitle: "Professional management for your residential properties",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=600&fit=crop",
    },
    {
      id: 2,
      title: "BROKERAGE SERVICES",
      subtitle:
        "Your source for residential, commercial, land purchase and sale",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop",
    },
    {
      id: 3,
      title: "CONSTRUCTION SERVICES",
      subtitle:
        "We transform undeveloped land into thriving residential communities",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop",
    },
  ];

  const services = [
    {
      title: "RENT",
      icon: "🏠",
      steps: [
        "Prepare Your Property",
        "Assess Rental Value",
        "Market Your Property",
        "Applicant Screening",
        "Lease Signing",
      ],
      link: "/leasing",
    },
    {
      title: "MANAGE",
      icon: "📋",
      steps: [
        "Make Home Move-In Ready",
        "Rent Collection & Disbursement",
        "Reporting & Financials",
        "24x7 Maintenance",
        "Eviction Handling",
      ],
      link: "/management",
    },
    {
      title: "MAINTAIN",
      icon: "🔧",
      steps: ["Preventive Maintenance", "Repair", "Renovate", "On-Call Staff"],
      link: "/maintenance",
    },
  ];

  const features = [
    { number: "21", label: "Ranked in Top 21 out of 151" },
    { number: "7", label: "Days a Week Agent/Self-tours" },
    { number: "1%", label: "Tenant Retention" },
    { number: "Low", label: "Eviction Rates" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Property Owner",
      content:
        "Broadridge Properties transformed how I manage my properties. Exceptional service!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Real Estate Investor",
      content:
        "The best property management company I've worked with. Highly recommend!",
      rating: 5,
    },
    {
      name: "Emma Williams",
      role: "Homeowner",
      content:
        "Professional, responsive, and trustworthy. They truly care about your property.",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl mb-8 max-w-2xl">
                {slide.subtitle}
              </p>
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white"
              >
                Learn More
              </Button>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              WHAT WE DO
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Broadridge Properties: Your Trusted Partner in Property Management
              and Leasing
            </p>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto mt-4">
              Welcome to Broadridge Properties! We are a comprehensive property
              leasing and management firm, focusing on single-family homes and
              townhomes. We serve Raleigh, Durham, Chapel Hill, Morrisville,
              Apex, and surrounding areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary to-primary/80 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
                <ul className="space-y-3 mb-8">
                  {service.steps.map((step, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="secondary"
                  className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-gradient-to-r from-secondary to-secondary/80 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            WHAT SETS US APART
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-3">
                  {feature.number}
                </div>
                <p className="text-lg">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
            WHAT OUR CLIENTS SAY
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border-2 border-primary rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(null)
                    .map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="fill-secondary text-secondary"
                      />
                    ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Free Rent Analysis */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                GET A FREE RENT ANALYSIS
              </h2>
              <p className="text-muted-foreground mb-8">
                Not sure what your property is worth? Our property management
                experts provide comprehensive rent analysis to help you maximize
                your rental income.
              </p>
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white"
              >
                Get Your Analysis
              </Button>
            </div>
            <div className="bg-primary rounded-lg h-64 flex items-center justify-center">
              <span className="text-white text-6xl">📊</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              JOIN OUR NEWSLETTER
            </h2>
            <p className="text-lg opacity-90">
              Get the latest property management tips and industry news
              delivered to your inbox.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setEmailSignup("");
            }}
            className="space-y-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={emailSignup}
              onChange={(e) => setEmailSignup(e.target.value)}
              className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-white"
              required
            />
            <Button
              type="submit"
              className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
            CONTACT US
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setContactForm({
                  name: "",
                  email: "",
                  userType: "owner",
                  phone: "",
                  message: "",
                });
              }}
              className="space-y-6"
            >
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
                  Which one are you?
                </label>
                <select
                  value={contactForm.userType}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, userType: e.target.value })
                  }
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-primary"
                >
                  <option value="owner">Property Owner</option>
                  <option value="tenant">Tenant</option>
                  <option value="investor">Investor</option>
                  <option value="other">Other</option>
                </select>
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
                  placeholder="Tell us about your property management needs..."
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

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  GET IN TOUCH
                </h3>
                <p className="text-muted-foreground mb-6">
                  Have questions? Our team is here to help. Reach out to us
                  today.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-secondary flex-shrink-0 mt-1">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <p className="font-bold text-primary">Address</p>
                    <p className="text-muted-foreground">
                      2613 Bucer Ct
                      <br />
                      Mckinney, TX 75071
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-secondary flex-shrink-0 mt-1">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <p className="font-bold text-primary">Phone</p>
                    <a
                      href="tel:469-956-9665"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      469-956-9665
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-secondary flex-shrink-0 mt-1">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <p className="font-bold text-primary">Email</p>
                    <a
                      href="mailto:accounts@broadridgeproperties.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      accounts@broadridgeproperties.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div>
                <p className="font-bold text-primary mb-3">Hours</p>
                <div className="text-muted-foreground space-y-1 text-sm">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 10:00 AM - 3:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
