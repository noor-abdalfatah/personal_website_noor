import {
  Atom,
  Braces,
  Coffee,
  Database,
  FileCode2,
  GitBranch,
  Github,
  Layers,
  Paintbrush,
  Server,
  Terminal,
  Triangle,
  Wind,
} from "lucide-react";
import { Reveal, SectionPill } from "./Reveal";

const skills = [
  { name: "React", icon: Atom },
  { name: "Next.js", icon: Triangle },
  { name: "TypeScript", icon: Braces },
  { name: "JavaScript", icon: FileCode2 },
  { name: "Tailwind CSS", icon: Wind },
  { name: "PHP", icon: Server },
  { name: "MySQL", icon: Database },
  { name: "Node.js", icon: Layers },
  { name: "Python", icon: Terminal },
  { name: "HTML5", icon: Coffee },
  { name: "CSS3", icon: Paintbrush },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: Github },
];

function Strip({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="flex w-max animate-marquee gap-5" style={reverse ? { animationDirection: "reverse" } : undefined}>
      {[...skills, ...skills].map((skill, index) => (
        <div
          key={`${skill.name}-${index}`}
          className="glass-panel flex shrink-0 items-center gap-3 rounded-2xl px-6 py-4 transition-all duration-300 hover:glow-ring hover:scale-105"
        >
          <skill.icon size={20} className="text-primary" />
          <span className="text-sm font-semibold whitespace-nowrap text-foreground">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <SectionPill>Skills</SectionPill>
          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            My <span className="gradient-text">tech stack</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            The tools I reach for daily, across the front-end, the back-end, and everything
            in between.
          </p>
        </Reveal>
      </div>

      <div className="relative mt-14 space-y-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="overflow-hidden">
          <Strip />
        </div>
        <div className="overflow-hidden">
          <Strip reverse />
        </div>
      </div>
    </section>
  );
}
