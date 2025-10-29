import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT US" },
    { path: "/owners", label: "OWNERS" },
    { path: "/residents", label: "RESIDENTS" },
    { path: "/resources", label: "RESOURCES" },
    { path: "/listings", label: "RENTAL LISTINGS" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7507bdcb7d8c498ea95f4cbcb293e86e%2Fadbe2c31ed824c249999b015135301ce?format=webp&width=200"
                alt="Broadridge Properties"
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold tracking-tight hidden md:inline">
                BROADRIDGE PROPERTIES
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                    isActive(link.path)
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-primary/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Contact Button (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:919-355-5317"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Phone size={18} />
                <span className="text-sm">919-355-5317</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-primary/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-bold mb-4">BROADRIDGE PROPERTIES</h3>
              <div className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                  <p>4004 Barrett Dr, Ste 202, Raleigh, NC 27609</p>
                </div>
                <div className="flex gap-3">
                  <Phone size={18} className="flex-shrink-0 mt-0.5" />
                  <a
                    href="tel:919-355-5317"
                    className="hover:opacity-80 transition-opacity"
                  >
                    919-355-5317
                  </a>
                </div>
                <div className="flex gap-3">
                  <Mail size={18} className="flex-shrink-0 mt-0.5" />
                  <a
                    href="mailto:info@broadridgeproperties.com"
                    className="hover:opacity-80 transition-opacity"
                  >
                    info@broadridgeproperties.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">QUICK LINKS</h3>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="hover:opacity-80 transition-opacity"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-4">OUR SERVICES</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    Property Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    Leasing Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    Maintenance Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    Brokerage Services
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-sm">
                © 2024 Broadridge Properties. All rights reserved.
              </p>
              <a
                href="#"
                className="text-sm hover:opacity-80 transition-opacity"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
