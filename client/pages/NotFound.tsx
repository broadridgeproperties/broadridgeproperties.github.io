import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[calc(100vh-400px)] px-4">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">
            404
          </h1>
          <p className="text-xl text-muted-foreground mb-8">Page not found</p>
          <Link to="/">
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-6">
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
