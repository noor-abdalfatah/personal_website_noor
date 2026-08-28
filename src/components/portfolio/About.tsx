import { ArrowUpRight, Code2, GraduationCap, Layers } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { Reveal, SectionPill } from "./Reveal";

const highlights = [
  { icon: Code2, label: "Full Stack Development" },
  { icon: Layers, label: "Responsive UI Engineering" },
  { icon: GraduationCap, label: "Computer Systems Engineering" },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden px-4 py-24 md:py-32">
      <div className="pointer-events-none absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full opacity-40 blur-3xl [background:var(--gradient-aura)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <SectionPill>About Me</SectionPill>
          <h2 className="mt-6 text-4xl leading-tight font-bold md:text-5xl">
            Crafting refined web experiences,{" "}
            <span className="gradient-text">line by line</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            I&apos;m Noor Abdalfatah, a Full Stack Web Developer and Computer Systems
            Engineering student who loves turning complex ideas into elegant, responsive
            interfaces. I build from the database up: designing clean schemas, writing
            dependable APIs, and finishing with front-ends that feel fast, accessible, and
            genuinely pleasant to use.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            My engineering background keeps me curious about what happens under the hood —
            performance, architecture, and security — while my design instinct pushes every
            project toward a polished, premium finish. I&apos;m always exploring new stacks
            and shipping side projects to sharpen the craft.
          </p>

          <ul className="mt-8 flex flex-wrap gap-3">
            {highlights.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="glass-panel flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-foreground transition-transform duration-300 hover:scale-105"
              >
                <Icon size={16} className="text-primary" />
                {label}
              </li>
            ))}
          </ul>

          <a
            href="#projects"
            className="mt-9 inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:glow-ring hover:scale-105"
          >
            View my work
            <ArrowUpRight size={16} />
          </a>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-md">
            <div className="animate-float-slow pointer-events-none absolute -inset-6 rounded-[3rem] opacity-60 blur-2xl [background:var(--gradient-aura)]" />
            <svg
              aria-hidden="true"
              viewBox="0 0 400 400"
              className="pointer-events-none absolute -right-10 -bottom-10 h-56 w-56 text-primary/30"
            >
              <path
                d="M10 300 C 120 200, 180 380, 390 240"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M0 340 C 140 250, 200 400, 400 300"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
            <div className="glass-panel relative overflow-hidden rounded-[2.5rem] p-3 shadow-lux">
              <img
                src={portrait}
                alt="Portrait of Noor Abdalfatah"
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full rounded-[2rem] object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
