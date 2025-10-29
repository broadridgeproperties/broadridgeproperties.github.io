import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

export default function Resources() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            Resources
          </h1>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              Explore our collection of helpful resources for property owners,
              investors, and residents at Broadridge Properties.
            </p>
            <p>
              From property management guides to lease templates and maintenance
              checklists, we've compiled valuable tools to help you succeed.
            </p>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <p className="text-muted-foreground mb-6">
                Looking for something specific?
              </p>
              <Button className="bg-secondary hover:bg-secondary/90 text-white">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
