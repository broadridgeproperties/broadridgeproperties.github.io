import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink } from "lucide-react";

interface ServiceStage {
  title: string;
  icon: string;
  items: string[];
}

interface PricingItem {
  label: string;
  description: string;
}

export default function Owners() {
  const fullServiceStages: ServiceStage[] = [
    {
      title: "PREPARE",
      icon: "🏠",
      items: [
        "Initial Inspection",
        "Repair & Improve",
        "Deep Clean",
        "Add Curb Appeal",
        "Determine Rental Price",
      ],
    },
    {
      title: "MARKET",
      icon: "📱",
      items: [
        "Professional Photography",
        "Syndicate Rental Listings",
        "Social Media Marketing",
        "Lead Nurturing",
        "Market & Rent Analysis",
      ],
    },
    {
      title: "LEASE",
      icon: "📋",
      items: [
        "Leasing on Demand",
        "Tenant Screening",
        "Lease Agreement & Renewal",
        "Qualify Applicants",
        "Customized Lease Terms",
      ],
    },
    {
      title: "MOVE",
      icon: "🚚",
      items: [
        "Move-in Coordination",
        "Move-out Processing",
        "Wall-to-Wall Inspections",
        "Repairs Between Tenants",
      ],
    },
    {
      title: "MAINTAIN",
      icon: "🔧",
      items: [
        "On-demand Maintenance",
        "Preventive Maintenance",
        "After Hours Emergency",
        "Renovation Services",
      ],
    },
    {
      title: "MANAGE",
      icon: "📊",
      items: [
        "Rent Collection & Disbursement",
        "Reporting & Financials",
        "Periodic Inspections",
        "Eviction Handling",
        "Legal Assistance",
      ],
    },
  ];

  const pricingItems: PricingItem[] = [
    {
      label: "Property Management Fee",
      description: "6% of rent or $75 minimum",
    },
    {
      label: "No PM Fee During Vacancy",
      description: "We absorb costs while finding tenants",
    },
    { label: "Lease Renewal Fee", description: "$200 per renewal" },
    {
      label: "Tenant Finding Fee",
      description: "One month rent or $1,500 minimum",
    },
    {
      label: "Security Deposit Collection",
      description: "Included in management fee",
    },
    { label: "Rent Disbursement", description: "Transparent, timely payments" },
    {
      label: "Annual Tax Prep/1099 Reporting",
      description: "Included in management fee",
    },
    { label: "Self-Serve Portal Access", description: "24/7 owner portal" },
    { label: "In-house Technicians", description: "Reduced maintenance costs" },
    {
      label: "Preferred Vendor Pricing",
      description: "Save on repairs and maintenance",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            FOR PROPERTY OWNERS
          </h1>
          <p className="text-lg md:text-xl max-w-2xl opacity-90">
            Maximize your rental income and minimize management headaches with
            our comprehensive property management services.
          </p>
        </div>
      </section>

      {/* Quick Access */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl">
            <a
              href="https://broadridgeproperties.managebuilding.com/manager"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
              >
                <ExternalLink size={18} className="mr-2" />
                Owner Portal
              </Button>
            </a>
            <Button
              size="lg"
              className="flex-1 bg-secondary hover:bg-secondary/90 text-white font-semibold"
            >
              Ready to Invest
            </Button>
          </div>
        </div>
      </section>

      {/* Full Service Property Management */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              FULL SERVICE PROPERTY MANAGEMENT
            </h2>
            <p className="text-center text-muted-foreground mb-16">
              We handle every aspect of your property management needs
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fullServiceStages.map((stage, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-primary rounded-lg p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{stage.icon}</div>
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    {stage.title}
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {stage.items.map((item, idx) => (
                      <li key={idx} className="flex gap-3">
                        <CheckCircle
                          className="flex-shrink-0 text-secondary mt-1"
                          size={18}
                        />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-gray-50"
                  >
                    Learn More
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tenant Finding Only */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-12 border-2 border-secondary">
              <h2 className="text-3xl font-bold text-primary mb-6">
                TENANT FINDING ONLY
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Don't need full property management? We offer tenant finding
                services without the full management package.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex gap-3">
                  <CheckCircle
                    className="flex-shrink-0 text-secondary mt-1"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-primary">
                      Property Marketing
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Professional photography and listing syndication
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle
                    className="flex-shrink-0 text-secondary mt-1"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-primary">
                      Tenant Screening
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive background and credit checks
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle
                    className="flex-shrink-0 text-secondary mt-1"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-primary">Lease Support</p>
                    <p className="text-sm text-muted-foreground">
                      Draft and execute lease agreements
                    </p>
                  </div>
                </div>
              </div>
              <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold">
                Get Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              TRANSPARENT PRICING
            </h2>
            <p className="text-center text-muted-foreground mb-16">
              No hidden fees. No surprises. Just straightforward, competitive
              pricing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pricingItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                >
                  <h3 className="font-bold text-primary mb-2">{item.label}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-secondary to-secondary/80 text-white rounded-lg p-8 mt-12 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Why Choose Lacy Management?
              </h3>
              <ul className="space-y-2 mb-6 inline-block">
                <li className="flex gap-2">
                  <CheckCircle size={20} />
                  <span>
                    Ranked in top 10% of property management companies
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={20} />
                  <span>7 days a week showing availability</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={20} />
                  <span>In-house maintenance team</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={20} />
                  <span>Dedicated property manager</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={20} />
                  <span>100% focus on your property's success</span>
                </li>
              </ul>
              <Button
                size="lg"
                className="bg-white text-secondary hover:bg-white/90 font-semibold px-8 mt-6"
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
