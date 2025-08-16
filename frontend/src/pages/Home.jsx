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
  return &lt;Lucide className={className} /&gt;;
};

const LogoTicker = () => {
  const items = [...LOGOS, ...LOGOS];
  return (
    &lt;div className="overflow-hidden py-6"&gt;
      &lt;div className="flex gap-12 animate-[scroll_30s_linear_infinite]" style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}&gt;
        {items.map((src, i) =&gt; (
          &lt;img key={i} src={src} alt="logo" className="h-8 opacity-70" /&gt;
        ))}
      &lt;/div&gt;
      &lt;style&gt;{`
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}&lt;/style&gt;
    &lt;/div&gt;
  );
};

const Hero = () =&gt; {
  return (
    &lt;section className="relative pt-20 md:pt-28 pb-12"&gt;
      &lt;div className="absolute inset-0 -z-10"&gt;
        &lt;div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] rounded-full bg-violet-700/10 blur-3xl" /&gt;
      &lt;/div&gt;
      &lt;div className="max-w-6xl mx-auto px-4 grid md:grid-cols-12 gap-8 items-center"&gt;
        &lt;div className="md:col-span-7"&gt;
          &lt;div className="inline-flex items-center gap-2 text-xs text-muted-foreground border border-border/60 rounded-full px-3 py-1 mb-4"&gt;
            &lt;Icon name="Stars" className="w-3.5 h-3.5 text-violet-400" /&gt;
            Trusted by modern teams
          &lt;/div&gt;
          &lt;h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-white"&gt;
            {BRAND.tagline}
          &lt;/h1&gt;
          &lt;p className="mt-4 text-white/90 max-w-xl"&gt;
            {BRAND.subTagline}
          &lt;/p&gt;
          &lt;div className="mt-6 flex items-center gap-3"&gt;
            &lt;a href="#cta"&gt;&lt;Button className="bg-violet-600 hover:bg-violet-700 text-white"&gt;Book your free discovery call&lt;/Button&gt;&lt;/a&gt;
            &lt;a href="#solutions" className="text-sm text-white hover:text-white"&gt;Explore solutions&lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div className="md:col-span-5"&gt;
          &lt;div className="relative"&gt;
            &lt;div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 blur-xl" /&gt;
            &lt;Card className="relative bg-black/30 backdrop-blur border-border/60"&gt;
              &lt;CardHeader&gt;
                &lt;CardTitle className="text-base"&gt;AI Voice Agent Preview&lt;/CardTitle&gt;
              &lt;/CardHeader&gt;
              &lt;CardContent&gt;
                &lt;div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center"&gt;
                  &lt;Icon name="Waveform" className="w-16 h-16 text-violet-400" /&gt;
                &lt;/div&gt;
                &lt;p className="text-xs text-muted-foreground mt-3"&gt;Realistic conversations. Instant routing. Fully customizable.&lt;/p&gt;
              &lt;/CardContent&gt;
            &lt;/Card&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div className="max-w-6xl mx-auto px-4 mt-10"&gt;
        &lt;LogoTicker /&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  );
};

const Solutions = () =&gt; {
  return (
    &lt;section id="solutions" className="py-16"&gt;
      &lt;div className="max-w-6xl mx-auto px-4"&gt;
        &lt;h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white"&gt;Receive &amp; Send Automated Phone Calls&lt;/h2&gt;
        &lt;p className="text-white mt-3 max-w-2xl"&gt;Capture leads, qualify, book appointments, raise tickets, answer questions, send info, reminders – you name it.&lt;/p&gt;
        &lt;div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8"&gt;
          {SERVICES.map((s) =&gt; (
            &lt;Card key={s.title} className="bg-black/30 border-border/60 hover:border-violet-600/60 transition-colors"&gt;
              &lt;CardContent className="pt-6"&gt;
                {s.imageUrl &amp;&amp; (
                  &lt;div className="aspect-[4/3] rounded-md overflow-hidden mb-4"&gt;
                    &lt;img src={s.imageUrl} alt={s.title} className="w-full h-full object-cover" /&gt;
                  &lt;/div&gt;
                )}
                &lt;div className="flex items-start gap-3"&gt;
                  &lt;div className="w-10 h-10 rounded-md bg-violet-600/20 flex items-center justify-center"&gt;
                    &lt;Icon name={s.icon} className="text-violet-400" /&gt;
                  &lt;/div&gt;
                  &lt;div&gt;
                    &lt;h3 className="font-medium"&gt;{s.title}&lt;/h3&gt;
                    &lt;p className="text-sm text-white mt-1"&gt;{s.desc}&lt;/p&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/CardContent&gt;
            &lt;/Card&gt;
          ))}
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  );
};

const CaseStudies = () =&gt; {
  const [openId, setOpenId] = useState(null);
  return (
    &lt;section id="case-studies" className="py-16"&gt;
      &lt;div className="max-w-6xl mx-auto px-4"&gt;
        &lt;h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white"&gt;Our success stories&lt;/h2&gt;
        &lt;div className="grid md:grid-cols-3 gap-6 mt-8"&gt;
          {CASE_STUDIES.map((c) =&gt; (
            &lt;Card key={c.id} className="bg-black/30 border-border/60"&gt;
              &lt;CardContent className="pt-6"&gt;
                {c.imageUrl &amp;&amp; (
                  &lt;div className="aspect-video rounded-md overflow-hidden mb-4"&gt;
                    &lt;img src={c.imageUrl} alt={c.company} className="w-full h-full object-cover" /&gt;
                  &lt;/div&gt;
                )}
                &lt;Badge className="bg-violet-600/20 text-violet-300"&gt;{c.industry}&lt;/Badge&gt;
                &lt;h3 className="mt-3 text-lg font-medium"&gt;{c.company}&lt;/h3&gt;
                &lt;p className="text-sm text-white mt-1"&gt;{c.blurb}&lt;/p&gt;
                &lt;p className="text-sm mt-2"&gt;{c.headline}&lt;/p&gt;
                &lt;div className="mt-4"&gt;
                  {openId === c.id ? (
                    &lt;div className="aspect-video rounded-lg overflow-hidden"&gt;
                      &lt;iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${c.youtubeId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      /&gt;
                    &lt;/div&gt;
                  ) : (
                    &lt;Button variant="outline" className="w-full" onClick={() =&gt; setOpenId(c.id)}&gt;Hear the AI in action&lt;/Button&gt;
                  )}
                &lt;/div&gt;
              &lt;/CardContent&gt;
            &lt;/Card&gt;
          ))}
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  );
};

const Benefits = () =&gt; {
  return (
    &lt;section id="benefits" className="py-16"&gt;
      &lt;div className="max-w-6xl mx-auto px-4"&gt;
        &lt;h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white"&gt;What you get with {BRAND.name}&lt;/h2&gt;
        &lt;div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"&gt;
          {BENEFITS.map((b) =&gt; (
            &lt;Card key={b.title} className="bg-black/30 border-border/60"&gt;
              &lt;CardContent className="pt-6"&gt;
                &lt;div className="w-10 h-10 rounded-md bg-violet-600/20 flex items-center justify-center"&gt;
                  &lt;Icon name={b.icon} className="text-violet-400" /&gt;
                &lt;/div&gt;
                &lt;h3 className="mt-3 font-medium"&gt;{b.title}&lt;/h3&gt;
                &lt;p className="text-sm text-white mt-1"&gt;{b.desc}&lt;/p&gt;
              &lt;/CardContent&gt;
            &lt;/Card&gt;
          ))}
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  );
};

const Process = () =&gt; {
  return (
    &lt;section id="process" className="py-16"&gt;
      &lt;div className="max-w-6xl mx-auto px-4"&gt;
        &lt;h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white"&gt;Getting started is easy&lt;/h2&gt;
        &lt;div className="grid md:grid-cols-4 gap-6 mt-8"&gt;
          {PROCESS.map((p) =&gt; (
            &lt;Card key={p.step} className="bg-black/30 border-border/60"&gt;
              &lt;CardContent className="pt-6"&gt;
                &lt;div className="flex items-center gap-2 text-sm text-muted-foreground"&gt;
                  &lt;span className="text-violet-400"&gt;{String(p.step).padStart(2, "0")}&lt;/span&gt;
                  &lt;Icon name={p.icon} /&gt;
                &lt;/div&gt;
                &lt;h3 className="mt-2 font-medium"&gt;{p.title}&lt;/h3&gt;
                &lt;p className="text-sm text-white mt-1"&gt;{p.desc}&lt;/p&gt;
              &lt;/CardContent&gt;
            &lt;/Card&gt;
          ))}
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  );
};

const Testimonials = () =&gt; {
  return (
    &lt;section className="py-16"&gt;
      &lt;div className="max-w-6xl mx-auto px-4"&gt;
        &lt;h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white"&gt;Hear it from our clients&lt;/h2&gt;
        &lt;div className="grid md:grid-cols-2 gap-6 mt-8"&gt;
          {TESTIMONIALS.map((t, i) =&gt; (
            &lt;Card key={i} className="bg-black/30 border-border/60"&gt;
              &lt;CardContent className="pt-6"&gt;
                &lt;div className="flex items-center gap-3 mb-4"&gt;
                  &lt;Avatar&gt;
                    &lt;AvatarImage src={t.avatar} alt={t.name} /&gt;
                    &lt;AvatarFallback&gt;{(t.name || "").split(" ").map((n) =&gt; n[0]).join("").slice(0, 2)}&lt;/AvatarFallback&gt;
                  &lt;/Avatar&gt;
                  &lt;div&gt;
                    &lt;p className="text-sm font-medium"&gt;{t.name}&lt;/p&gt;
                    &lt;p className="text-xs text-muted-foreground"&gt;{t.title}&lt;/p&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
                &lt;p className="text-sm"&gt;“{t.quote}”&lt;/p&gt;
              &lt;/CardContent&gt;
            &lt;/Card&gt;
          ))}
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  );
};

const CTA = () =&gt; {
  return (
    &lt;section id="cta" className="py-16"&gt;
      &lt;div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-start"&gt;
        &lt;div&gt;
          &lt;h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white"&gt;Book your free discovery call&lt;/h2&gt;
          &lt;p className="text-muted-foreground mt-3 max-w-prose"&gt;We’ll cover your business needs and an AI Voice Agent strategy tailored to you.&lt;/p&gt;
          &lt;Card className="mt-6 bg-black/30 border-border/60"&gt;
            &lt;CardContent className="pt-6"&gt;
              &lt;div className="aspect-video rounded-lg overflow-hidden bg-muted/10 flex items-center justify-center"&gt;
                {BOOKING.illustrationUrl ? (
                  &lt;img src={BOOKING.illustrationUrl} alt="AI Amplify illustration" className="w-full h-full object-cover" /&gt;
                ) : (
                  &lt;p className="text-xs text-muted-foreground"&gt;Calendly embed placeholder&lt;/p&gt;
                )}
              &lt;/div&gt;
              &lt;p className="text-xs text-muted-foreground mt-3"&gt;{BOOKING.fallbackText}&lt;/p&gt;
              &lt;a href={BOOKING.calendlyUrl} target="_blank" rel="noreferrer"&gt;
                &lt;Button className="mt-3 bg-violet-600 hover:bg-violet-700 text-white"&gt;Open Calendly&lt;/Button&gt;
              &lt;/a&gt;
            &lt;/CardContent&gt;
          &lt;/Card&gt;
        &lt;/div&gt;
        &lt;ContactForm /&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  );
};

const ContactForm = () =&gt; {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", type: "Sales", message: "" });

  const onSubmit = (e) =&gt; {
    e.preventDefault();
    const submissions = JSON.parse(localStorage.getItem("aiamplify_submissions") || "[]");
    submissions.push({ ...form, at: new Date().toISOString() });
    localStorage.setItem("aiamplify_submissions", JSON.stringify(submissions));
    toast({ title: "Message sent", description: "We'll get back to you within 1 business day." });
    setForm({ name: "", email: "", type: "Sales", message: "" });
  };

  return (
    &lt;div id="contact"&gt;
      &lt;h3 className="text-xl font-medium"&gt;Send us a message&lt;/h3&gt;
      &lt;Card className="mt-4 bg-black/30 border-border/60"&gt;
        &lt;CardContent className="pt-6"&gt;
          &lt;form onSubmit={onSubmit} className="space-y-4"&gt;
            &lt;div&gt;
              &lt;Label htmlFor="name"&gt;Name&lt;/Label&gt;
              &lt;Input id="name" value={form.name} onChange={(e) =&gt; setForm({ ...form, name: e.target.value })} required /&gt;
            &lt;/div&gt;
            &lt;div&gt;
              &lt;Label htmlFor="email"&gt;Email&lt;/Label&gt;
              &lt;Input id="email" type="email" value={form.email} onChange={(e) =&gt; setForm({ ...form, email: e.target.value })} required /&gt;
            &lt;/div&gt;
            &lt;div&gt;
              &lt;Label htmlFor="type"&gt;Inquiry Type&lt;/Label&gt;
              {/* Using shadcn select */}
              &lt;Select value={form.type} onValueChange={(v) =&gt; setForm({ ...form, type: v })}&gt;
                &lt;SelectTrigger id="type" className="mt-2"&gt;
                  &lt;SelectValue placeholder="Select type" /&gt;
                &lt;/SelectTrigger&gt;
                &lt;SelectContent&gt;
                  &lt;SelectItem value="Sales"&gt;Sales&lt;/SelectItem&gt;
                  &lt;SelectItem value="Hiring"&gt;Hiring&lt;/SelectItem&gt;
                  &lt;SelectItem value="Sponsor"&gt;Sponsor&lt;/SelectItem&gt;
                  &lt;SelectItem value="Other"&gt;Other&lt;/SelectItem&gt;
                &lt;/SelectContent&gt;
              &lt;/Select&gt;
            &lt;/div&gt;
            &lt;div&gt;
              &lt;Label htmlFor="message"&gt;How can we help you?&lt;/Label&gt;
              &lt;Textarea id="message" value={form.message} onChange={(e) =&gt; setForm({ ...form, message: e.target.value })} rows={5} /&gt;
            &lt;/div&gt;
            &lt;div className="flex justify-end"&gt;
              &lt;Button type="submit" className="bg-violet-600 hover:bg-violet-700"&gt;Submit&lt;/Button&gt;
            &lt;/div&gt;
          &lt;/form&gt;
        &lt;/CardContent&gt;
      &lt;/Card&gt;
    &lt;/div&gt;
  );
};

const Home = () =&gt; {
  return (
    &lt;Layout&gt;
      &lt;Hero /&gt;
      &lt;Solutions /&gt;
      &lt;CaseStudies /&gt;
      &lt;Benefits /&gt;
      &lt;Process /&gt;
      &lt;Testimonials /&gt;
      &lt;CTA /&gt;
    &lt;/Layout&gt;
  );
};

export default Home;