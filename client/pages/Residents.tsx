import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink } from "lucide-react";

interface ResidentBenefit {
  title: string;
  icon: string;
  description: string;
  details: string[];
}

export default function Residents() {
  const benefits: ResidentBenefit[] = [
    {
      title: "Designated Property Manager",
      icon: "👤",
      description: "You have a single point of contact for all your needs",
      details: [
        "Always know who to call",
        "Quick response times",
        "Personalized service",
      ],
    },
    {
      title: "24/7 Resident Portal",
      icon: "📱",
      description: "Access your account anytime, anywhere",
      details: [
        "Set up recurring payments",
        "Submit maintenance requests",
        "Contact your property manager",
        "Access lease information",
      ],
    },
    {
      title: "24/7 Maintenance",
      icon: "🔧",
      description: "In-house technicians and vetted vendors",
      details: [
        "Routine maintenance",
        "Emergency repairs",
        "Fast response times",
        "Professional service",
      ],
    },
    {
      title: "Resident Protection",
      icon: "🛡️",
      description: "Exclusive benefits for Lacy residents",
      details: [
        "Low-cost renters insurance",
        "Credit repair assistance",
        "Financial tools and resources",
      ],
    },
    {
      title: "Home Ownership Assistance",
      icon: "🏡",
      description: "Ready to own? We can help",
      details: [
        "Pre-qualification assistance",
        "Home search support",
        "Closing cost assistance",
        "Brokerage services available",
      ],
    },
    {
      title: "Well Maintained Homes",
      icon: "✨",
      description: "We keep our properties in excellent condition",
      details: [
        "Professional cleaning",
        "Regular maintenance",
        "Most homes include appliances",
        "Move-in ready condition",
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">FOR RESIDENTS</h1>
          <p className="text-lg md:text-xl max-w-2xl opacity-90">
            We're committed to providing you with an exceptional living
            experience backed by professional management and responsive service.
          </p>
        </div>
      </section>

      {/* Quick Access Buttons */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl">
            <a
              href="https://broadridgeproperties.managebuilding.com/Resident/portal/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold justify-center"
              >
                <ExternalLink size={18} className="mr-2" />
                Resident Portal
              </Button>
            </a>
            <a
              href="https://broadridgeproperties.managebuilding.com/Resident/portal/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold justify-center"
              >
                <ExternalLink size={18} className="mr-2" />
                Pay Rent Online
              </Button>
            </a>
            <a
              href="https://app.propertymeld.com/tenant/broadridgeproperties"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold justify-center"
              >
                <ExternalLink size={18} className="mr-2" />
                Maintenance Request
              </Button>
            </a>
            <a
              href="https://rent.findigs.com/2cdc0519-8cc4-4c21-9f8f-94054eda96d2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold justify-center"
              >
                <ExternalLink size={18} className="mr-2" />
                Apply Online
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Available Properties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            AVAILABLE PROPERTIES
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Explore our current rental listings across the Triangle area
          </p>
          <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-6">
            View Available Properties
          </Button>
        </div>
      </section>

      {/* Why Rent With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            WHY RENT WITH US?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <div className="text-center">
              <div className="text-5xl mb-4">📅</div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                7 Days a Week
              </h3>
              <p className="text-muted-foreground">
                Showings available when you need them
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                Top Rated
              </h3>
              <p className="text-muted-foreground">
                Ranked in top 21 out of 151 companies
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                Friendly Staff
              </h3>
              <p className="text-muted-foreground">
                Here to help with your needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resident Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            RESIDENT BENEFITS
          </h2>
          <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-16">
            We're committed to providing you with the best rental experience
            possible
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {benefit.description}
                </p>
                <ul className="space-y-2">
                  {benefit.details.map((detail, idx) => (
                    <li key={idx} className="flex gap-2 text-sm">
                      <CheckCircle
                        size={16}
                        className="flex-shrink-0 text-secondary mt-0.5"
                      />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Ownership Path */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              READY TO BE A HOMEOWNER?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              We partner with Guru Realty to help our residents transition to
              homeownership. With pre-qualification assistance, home search
              support, and potential closing cost assistance, we're here to help
              you achieve your dreams.
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
            >
              Explore Homeownership
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Maintenance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              24/7 EMERGENCY MAINTENANCE
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              When something breaks outside of business hours, we're here for
              you. Submit an emergency maintenance request anytime.
            </p>
            <a
              href="https://app.propertymeld.com/tenant/lacy-management"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold"
              >
                Submit Emergency Request
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
