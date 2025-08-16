import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { Separator } from "../components/ui/separator";
import { BRAND, NAV_LINKS, LEGAL } from "../mock";
import { Menu, ArrowUpRight } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-violet-500 to-violet-700" />
          <span className="font-semibold tracking-tight">{BRAND.name}</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((n) => (
            <a key={n.label} href={n.href} className="text-sm text-white/80 hover:text-white transition-colors">
              {n.label}
            </a>
          ))}
          <a href="#cta">
            <Button className="bg-violet-600 hover:bg-violet-700">Book a call</Button>
          </a>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu size={18} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="mt-6 flex flex-col gap-4">
                {NAV_LINKS.map((n) => (
                  <a key={n.label} href={n.href} className="text-sm" >
                    {n.label}
                  </a>
                ))}
                <a href="#cta">
                  <Button className="w-full bg-violet-600 hover:bg-violet-700">Book a call</Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-violet-500 to-violet-700" />
            <span className="font-semibold tracking-tight text-white">{BRAND.name}</span>
          </div>
          <p className="text-sm text-white/80 mt-3 max-w-sm">
            {BRAND.subTagline}
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-3">Explore</h4>
          <div className="flex flex-col gap-2 text-sm">
            <a href="#solutions" className="text-white/80 hover:text-white">Solutions</a>
            <a href="#benefits" className="text-white/80 hover:text-white">Benefits</a>
            <a href="#process" className="text-white/80 hover:text-white">How it works</a>
            <a href="#case-studies" className="text-muted-foreground hover:text-foreground">Case studies</a>
          </div>
        </div>
        <div>
          <h4 className="font-medium mb-3">Contact</h4>
          <div className="text-sm text-muted-foreground space-y-1">
            <a href={`mailto:${BRAND.email}`} className="hover:text-foreground">{BRAND.email}</a>
            <p>{BRAND.addressLines[0]}</p>
            <p>{BRAND.addressLines[1]}</p>
            <p>{BRAND.addressLines[2]}</p>
            <p className="pt-2">{BRAND.abn}</p>
          </div>
        </div>
      </div>
      <Separator />
      <div className="max-w-6xl mx-auto px-4 py-6 text-xs flex items-center justify-between">
        <p className="text-white/80">© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link to={LEGAL.privacyUrl} className="text-white/70 hover:text-white">Privacy Policy</Link>
          <Link to={LEGAL.termsUrl} className="text-white/70 hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0b] via-[#0d0b12] to-[#0a0a0b] text-foreground" id="top">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;