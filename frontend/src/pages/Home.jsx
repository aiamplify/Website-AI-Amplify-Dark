import React, { useMemo, useState } from "react";
import Layout from "../components/Layout";
import { BRAND, LOGOS, SERVICES, BENEFITS, CASE_STUDIES, PROCESS, TESTIMONIALS, BOOKING } from "../mock";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { useToast } from "../hooks/use-toast";
import * as Icons from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";

const Icon = ({ name, className = "w-5 h-5" }) => {
  const Lucide = Icons[name] || Icons.Sparkles;
  return <Lucide className={className} />;
};

const LogoTicker = () => {
  const items = [...LOGOS, ...LOGOS];
  return (
    <div className="overflow-hidden py-6">
      <div className="flex gap-12 animate-[scroll_30s_linear_infinite]" style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
        {items.map((src, i) => (
          <img key={i} src={src} alt="logo" className="h-8 opacity-70" />
        ))}
      </div>
      <style>{`
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-20 md:pt-28 pb-12">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] rounded-full bg-violet-700/10 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <div className="inline-flex items-center gap-2 text-xs text-muted-foreground border border-border/60 rounded-full px-3 py-1 mb-4">
            <Icon name="Stars" className="w-3.5 h-3.5 text-violet-400" />
            Trusted by modern teams
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-white">
            {BRAND.tagline}
          </h1>
          <p className="mt-4 text-white/90 max-w-xl">
            {BRAND.subTagline}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#cta"><Button className="bg-violet-600 hover:bg-violet-700 text-white">Book your free discovery call</Button></a>
            <a href="#solutions" className="text-sm text-white hover:text-white">Explore solutions</a>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="relative">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 blur-xl" />
            <Card className="relative bg-black/30 backdrop-blur border-border/60">
              <CardHeader>
                <CardTitle className="text-base">AI Voice Agent Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center">
                  <Icon name="Waveform" className="w-16 h-16 text-violet-400" />
                </div>
                <p className="text-xs text-muted-foreground mt-3">Realistic conversations. Instant routing. Fully customizable.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-10">
        <LogoTicker />
      </div>
    </section>
  );
};

const Solutions = () => {
  return (
    <section id="solutions" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Receive &amp; Send Automated Phone Calls</h2>
        <p className="text-white mt-3 max-w-2xl">Capture leads, qualify, book appointments, raise tickets, answer questions, send info, reminders – you name it.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {SERVICES.map((s) => (
            <Card key={s.title} className="bg-black/30 border-border/60 hover:border-violet-600/60 transition-colors">
              <CardContent className="pt-6">
                {s.imageUrl && (
                  <div className="aspect-[4/3] rounded-md overflow-hidden mb-4">
                    <img src={s.imageUrl} alt={s.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-md bg-violet-600/20 flex items-center justify-center">
                    <Icon name={s.icon} className="text-violet-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">{s.title}</h3>
                    <p className="text-sm text-white mt-1">{s.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudies = () => {
  const [openId, setOpenId] = useState(null);
  return (
    <section id="case-studies" className="py-16">
      <div className="max-w-6xl mx_auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Our success stories</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {CASE_STUDIES.map((c) => (
            <Card key={c.id} className="bg-black/30 border-border/60">
              <CardContent className="pt-6">
                {c.imageUrl && (
                  <div className="aspect-video rounded-md overflow-hidden mb-4">
                    <img src={c.imageUrl} alt={c.company} className="w-full h-full object-cover" />
                  </div>
                )}
                <Badge className="bg-violet-600/20 text-violet-300">{c.industry}</Badge>
                <h3 className="mt-3 text-lg font-medium">{c.company}</h3>
                <p className="text-sm text-white mt-1">{c.blurb}</p>
                <p className="text-sm mt-2">{c.headline}</p>
                <div className="mt-4">
                  {openId === c.id ? (
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${c.youtubeId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <Button variant="outline" className="w-full" onClick={() => setOpenId(c.id)}>Hear the AI in action</Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  return (
    <section id="benefits" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">What you get with {BRAND.name}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {BENEFITS.map((b) => (
            <Card key={b.title} className="bg-black/30 border-border/60">
              <CardContent className="pt-6">
                {b.imageUrl && (
                  <div className="aspect-[4/3] rounded-md overflow-hidden mb-4">
                    <img src={b.imageUrl} alt={b.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="w-10 h-10 rounded-md bg-violet-600/20 flex items-center justify-center">
                  <Icon name={b.icon} className="text-violet-400" />
                </div>
                <h3 className="mt-3 font-medium">{b.title}</h3>
                <p className="text-sm text-white mt-1">{b.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  return (
    <section id="process" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Getting started is easy</h2>
        <div className="grid md:grid-cols-4 gap-6 mt-8">
          {PROCESS.map((p) => (
            <Card key={p.step} className="bg-black/30 border-border/60">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-violet-400">{String(p.step).padStart(2, "0")}</span>
                  <Icon name={p.icon} />
                </div>
                <h3 className="mt-2 font-medium">{p.title}</h3>
                <p className="text-sm text-white mt-1">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Hear it from our clients</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {TESTIMONIALS.map((t, i) => (
            <Card key={i} className="bg-black/30 border-border/60">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage src={t.avatar} alt={t.name} />
                    <AvatarFallback>{(t.name || "").split(" ").map((n) => n[0]).join("").slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.title}</p>
                  </div>
                </div>
                <p className="text-sm">“{t.quote}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  const calendlyRef = React.useRef(null);
  const initializedRef = React.useRef(false);

  React.useEffect(() => {
    const scriptSrc = "https://assets.calendly.com/assets/external/widget.js";
    const cssHref = "https://assets.calendly.com/assets/external/widget.css";

    function injectCssOnce() {
      if (!document.querySelector(`link[href="${cssHref}"]`)) {
        const l = document.createElement("link");
        l.rel = "stylesheet";
        l.href = cssHref;
        document.head.appendChild(l);
      }
    }

    function initCalendly() {
      if (initializedRef.current) return;
      if (window.Calendly && calendlyRef.current) {
        try {
          window.Calendly.initInlineWidget({
            url: BOOKING.calendlyUrl,
            parentElement: calendlyRef.current,
            prefill: {},
            utm: {},
          });
          initializedRef.current = true;
        } catch (err) {
          console.error("Calendly init failed", err);
        }
      }
    }

    injectCssOnce();

    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);
    if (!existingScript) {
      const s = document.createElement("script");
      s.src = scriptSrc;
      s.async = true;
      s.onload = initCalendly;
      s.onerror = (e) => console.error("Calendly script load error", e);
      document.head.appendChild(s);
    } else {
      if (window.Calendly) {
        initCalendly();
      } else {
        existingScript.addEventListener("load", initCalendly);
      }
    }

    return () => {
      initializedRef.current = false;
      if (calendlyRef.current) {
        calendlyRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <section id="cta" className="py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Book your free discovery call</h2>
          <p className="text-muted-foreground mt-3 max-w-prose">We’ll cover your business needs and an AI Voice Agent strategy tailored to you.</p>
          <Card className="mt-6 bg-black/30 border-border/60">
            <CardContent className="pt-6">
              <div className="rounded-lg overflow-hidden" style={{ minWidth: 320, height: 700 }}>
                <div ref={calendlyRef} style={{ minWidth: 320, height: 700 }} />
              </div>
              <p className="text-xs text-muted-foreground mt-3">{BOOKING.fallbackText}</p>
              <a href={BOOKING.calendlyUrl} target="_blank" rel="noreferrer">
                <Button className="mt-3 bg-violet-600 hover:bg-violet-700 text-white">Open Calendly</Button>
              </a>
            </CardContent>
          </Card>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

const ContactForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", type: "Sales", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    const submissions = JSON.parse(localStorage.getItem("aiamplify_submissions") || "[]");
    submissions.push({ ...form, at: new Date().toISOString() });
    localStorage.setItem("aiamplify_submissions", JSON.stringify(submissions));
    toast({ title: "Message sent", description: "We'll get back to you within 1 business day." });
    setForm({ name: "", email: "", type: "Sales", message: "" });
  };

  return (
    <div id="contact">
      <h3 className="text-xl font-medium">Send us a message</h3>
      <Card className="mt-4 bg-black/30 border-border/60">
        <CardContent className="pt-6">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            </div>
            <div>
              <Label htmlFor="type">Inquiry Type</Label>
              {/* Using shadcn select */}
              <Select value={form.type} onValueChange={(v) => setForm({ ...form, type: v })}>
                <SelectTrigger id="type" className="mt-2">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Sales">Sales</SelectItem>
                  <SelectItem value="Hiring">Hiring</SelectItem>
                  <SelectItem value="Sponsor">Sponsor</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="message">How can we help you?</Label>
              <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} />
            </div>
            <div className="flex justify-end">
              <Button type="submit" className="bg-violet-600 hover:bg-violet-700">Submit</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Solutions />
      <CaseStudies />
      <Benefits />
      <Process />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default Home;