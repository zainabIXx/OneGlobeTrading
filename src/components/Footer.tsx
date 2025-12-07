import { Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/logo.jpeg";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  const products = [
    "Wooden Products",
    "Hardware & Tools",
    "Steel Products",
  ];

  return (
    <footer className="bg-foreground text-secondary pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img src={logo} alt="One Globe Trading FZE" className="h-16 w-auto mb-6"/>
            <p className="text-secondary/70 text-sm font-light leading-relaxed mb-6">
              One Globe Trading FZE is a trusted supplier of commercial plywood, steel sheets, and industrial raw materials across the region.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-secondary/70 text-sm hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              {products.map((product, idx) => (
                <li key={idx}>
                  <span className="text-secondary/70 text-sm">{product}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-primary" />
                <span className="text-secondary/70 text-sm">info@oneglobetrading.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-primary" />
                <span className="text-secondary/70 text-sm">+971 XX XXX XXXX</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-primary" />
                <span className="text-secondary/70 text-sm">Sharjah, UAE</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary/50 text-sm">
              © {new Date().getFullYear()} One Globe Trading FZE. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-secondary/50 text-sm hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary/50 text-sm hover:text-secondary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
