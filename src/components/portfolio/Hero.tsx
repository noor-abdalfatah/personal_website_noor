import { ArrowDown, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="hero-canvas relative overflow-hidden px-4 pt-40 pb-20 md:pt-48 md:pb-28">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide text-primary uppercase">
            <Sparkles size={14} />
            Available for new projects
          </span>
          <h1 className="mt-8 text-5xl leading-[1.05] font-bold md:text-7xl">
            Full Stack
            <span className="gradient-text"> Web Developer</span>
            <br />
            &amp; Engineering Student
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg text-muted-foreground">
            I design and build responsive, high-performance web applications — from polished
            interfaces to the APIs and databases behind them.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="gradient-pill inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold shadow-lux transition-transform duration-300 hover:scale-105"
            >
              Explore Projects
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary px-7 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:glow-ring hover:scale-105"
            >
              Get in touch
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
