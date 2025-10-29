import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

export default function Listings() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            Rental Listings
          </h1>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              Browse our current rental property listings across the Triangle
              area. We feature a wide selection of single-family homes,
              townhomes, and apartments.
            </p>
            <p>
              Looking for your next rental home? Our team is here to help you
              find the perfect property.
            </p>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <p className="text-muted-foreground mb-6">
                Ready to find your dream home?
              </p>
              <Button className="bg-secondary hover:bg-secondary/90 text-white">
                View Listings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
