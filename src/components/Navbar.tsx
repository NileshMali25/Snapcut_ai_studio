import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "History", href: "/history" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="SnapCut AI" className="h-9 w-auto" />
          <span className="text-gradient-brand font-display font-bold text-xl hidden sm:inline">
            SnapCut AI
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button variant="brand" asChild>
            <Link to="/register">Get Started</Link>
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-strong border-t border-border px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="block text-muted-foreground hover:text-foreground text-sm"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button variant="brand" size="sm" asChild>
              <Link to="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
