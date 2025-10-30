import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
}

export default function About() {
  const teamMembers: TeamMember[] = [
    { name: "Satya", role: "Founder / Property Manager" },
    { name: "Sudheer", role: "Operations Manager" },
    { name: "Natalie", role: "Leasing Lead Associate" },
    { name: "Leela", role: "Accounts Lead Associate" },
    { name: "Cheema", role: "Maintenance Coordinator" },
    { name: "Maria", role: "Maintenance Coordinator" },
    { name: "Dona", role: "Maintenance Coordinator" },
    { name: "Harold", role: "Maintenance Technician" },
    { name: "James", role: "Maintenance Technician" },
    { name: "Adi", role: "Maintenance Technician" },
    { name: "Pam", role: "Leasing Associate" },
    { name: "Rebecca", role: "Leasing Associate" },
    { name: "Arish", role: "Back-office Associate" },
    { name: "Pravat", role: "Back-office Associate" },
    { name: "David", role: "Inspections" },
    { name: "Courtney", role: "Office Admin" },
    { name: "Ravyn", role: "Social Media Manager" },
  ];

  const metrics = [
    { value: "621", label: "Properties Managed" },
    { value: "7", label: "Years of Experience" },
    { value: "Top 10%", label: "Ranked Among 151 Companies" },
  ];

  const results = [
    "Minimized Rent-Ready Costs",
    "Reduced Average Days to Lease",
    "High Occupancy Rates",
    "On-time Rent Payments",
    "Efficient Property Maintenance",
    "High Tenant Retention",
    "Low Eviction Rates",
  ];

  return (
    <Layout>
      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
              WHO WE ARE
            </h1>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                Welcome to Broadridge Properties, your go-to property management
                team in the Triangle Area of North Carolina.
              </p>
              <p>
                Founded 7 years ago, we've rapidly grown from a startup to
                managing a portfolio of 621 properties. We're ranked in the top
                10% of 151 management companies in the area, according to an
                independent study.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  {metric.value}
                </div>
                <p className="text-muted-foreground text-lg">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
              OUR PHILOSOPHY
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                We're not your typical property management firm. We are
                innovators and problem-solvers, committed to leveraging
                technology and tools to streamline property management
                processes.
              </p>
              <p>
                Our goal is to make life easier for everyone we work with—our
                staff, tenants, and property owners alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Tools */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
              OUR TOOLS & TECHNOLOGY
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                We develop our own mobile-friendly tools to enhance back-office
                operations, communications, and maintenance support.
              </p>
              <p className="font-semibold text-primary">
                We use cutting-edge third-party tools for:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle
                    className="flex-shrink-0 text-secondary mt-1"
                    size={20}
                  />
                  <span>Rent collection</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle
                    className="flex-shrink-0 text-secondary mt-1"
                    size={20}
                  />
                  <span>Maintenance request tracking</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle
                    className="flex-shrink-0 text-secondary mt-1"
                    size={20}
                  />
                  <span>Managing online showing requests</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Results */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
              OUR RESULTS
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="mb-6">
                We focus on comprehensive processes and attention to detail.
                Here's what our results speak to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.map((result, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle
                      className="flex-shrink-0 text-secondary mt-1"
                      size={20}
                    />
                    <span>{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Edge */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
              OUR COMPETITIVE EDGE
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Our tech-forward approach boosts efficiency while reducing
                costs. We strive to offer the most competitive pricing in the
                industry without compromising service quality.
              </p>
              <p>
                We aim to pass significant savings to property owners and
                tenants while maintaining the highest standards of service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16 text-center">
            MEET THE TEAM
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold text-primary">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-secondary to-secondary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              JOIN OUR COMMUNITY
            </h2>
            <p className="text-lg mb-8 opacity-90">
              We're a community of dedicated professionals committed to
              excellence. Let's work together to achieve your property
              management goals.
            </p>
            <Button
              size="lg"
              className="bg-white text-secondary hover:bg-white/90 font-semibold px-8"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
