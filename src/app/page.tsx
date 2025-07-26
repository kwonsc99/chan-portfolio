// src/app/page.tsx
import Navigation from "@/components/common/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/common/Footer";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Analytics />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}
