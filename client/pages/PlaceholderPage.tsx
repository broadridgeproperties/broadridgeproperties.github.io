import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

export default function PlaceholderPage() {
  const location = useLocation();
  const pageName = location.pathname.split("/").pop() || "page";

  return (
    <Layout>
      <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📄</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-primary mb-4">Coming Soon</h1>
          <p className="text-muted-foreground mb-8">
            This page is under development. Check back soon for updates or
            contact us for more information.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="default" onClick={() => window.history.back()}>
              Go Back
            </Button>
            <Button
              variant="outline"
              onClick={() => (window.location.href = "/")}
            >
              Home
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
