import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiNodedotjs,
  SiPython,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { Reveal, SectionPill } from "./Reveal";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

const skills: Skill[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
];

function Strip({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="flex w-max animate-marquee gap-5" style={reverse ? { animationDirection: "reverse" } : undefined}>
      {[...skills, ...skills].map((skill, index) => {
        const Icon = skill.icon;
        return (
          <div
            key={`${skill.name}-${index}`}
            className="glass-panel flex shrink-0 items-center gap-3 rounded-2xl px-6 py-4 transition-all duration-300 hover:glow-ring hover:scale-105"
          >
            <Icon size={22} style={{ color: skill.color }} className="shrink-0" />
            <span className="text-sm font-semibold whitespace-nowrap text-foreground">
              {skill.name}
            </span>
          </div>
        );
      })}
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
