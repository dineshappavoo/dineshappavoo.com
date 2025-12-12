import { Hero } from "@/components/home/Hero";
import { Companies } from "@/components/home/Companies";
import { About } from "@/components/home/About";
import { Projects } from "@/components/home/Projects";
import { Publications } from "@/components/home/Publications";
import { Blog } from "@/components/home/Blog";
import { Newsletter } from "@/components/home/Newsletter";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <Hero />
      <Publications />
      <Blog />
      <Newsletter />
      <Companies />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}