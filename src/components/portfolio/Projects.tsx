import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Github, Info } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { Reveal, SectionPill } from "./Reveal";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  image: string;
  tagline: string;
  description: string;
  stack: string[];
  architecture: string[];
  github: string;
};

const projects: Project[] = [
  {
    title: "Aurora Commerce",
    image: project1,
    tagline: "Full stack storefront & admin dashboard",
    description:
      "A complete e-commerce platform with product management, cart, checkout and a live analytics dashboard.",
    stack: ["React", "TypeScript", "Node.js", "MySQL", "Tailwind CSS"],
    architecture: [
      "React + TypeScript SPA with route-level code splitting and optimistic cart updates.",
      "Node.js REST API layered into controllers, services and repositories for testability.",
      "Normalized MySQL schema with indexed order lookups and transactional checkout.",
      "Role-based auth with hashed sessions and server-side validation on every mutation.",
    ],
    github: "https://github.com/placeholder/aurora-commerce",
  },
  {
    title: "Nova Tasks",
    image: project2,
    tagline: "Collaborative task & sprint planner",
    description:
      "A responsive team workspace with drag-ordered boards, live activity feed and role-aware permissions.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    architecture: [
      "Next.js app router with server components for board data and streaming skeletons.",
      "Event-sourced activity log so every card change is auditable and reversible.",
      "Optimistic reordering synced through a debounced batch endpoint.",
      "Mobile-first layout that collapses columns into a swipeable stack.",
    ],
    github: "https://github.com/placeholder/nova-tasks",
  },
  {
    title: "Pulse Analytics",
    image: project3,
    tagline: "Realtime metrics & reporting suite",
    description:
      "A data visualization dashboard turning raw event streams into readable charts and exportable reports.",
    stack: ["React", "Python", "PHP", "MySQL", "Recharts"],
    architecture: [
      "Python ingestion workers aggregate raw events into hourly rollup tables.",
      "PHP reporting endpoints serve cached aggregates with ETag revalidation.",
      "React chart layer with responsive containers and accessible tooltips.",
      "CSV/PDF export pipeline generated fully server-side to keep the client light.",
    ],
    github: "https://github.com/placeholder/pulse-analytics",
  },
];

export function Projects() {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section id="projects" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <SectionPill>Projects</SectionPill>
          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Selected <span className="gradient-text font-rakkas">work</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A few full stack builds where design detail and solid architecture meet.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-14">
          <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-6">
              {projects.map((project) => (
                <CarouselItem
                  key={project.title}
                  className="pl-6 sm:basis-1/2 lg:basis-1/3"
                >
                  <article className="glass-panel group flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:glow-ring">
                    <div
                      className="cursor-pointer overflow-hidden"
                      onClick={() => setActive(project)}
                      role="button"
                      aria-label={`Open details for ${project.title}`}
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        loading="lazy"
                        width={1024}
                        height={640}
                        className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-[11px] font-semibold tracking-wider text-primary uppercase">
                        {project.tagline}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="mt-5 flex gap-3">
                        <button
                          type="button"
                          onClick={() => setActive(project)}
                          className="gradient-pill inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-transform duration-300 hover:scale-105"
                        >
                          <Info size={15} />
                          Details
                        </button>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-primary px-4 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:glow-ring hover:scale-105"
                        >
                          <Github size={15} />
                          GitHub
                        </a>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>

          <div className="mt-10 flex items-center justify-center gap-3">
            {projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                aria-label={`Go to ${project.title}`}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  selected === index
                    ? "w-10 bg-primary glow-ring"
                    : "w-2.5 bg-border hover:bg-accent",
                )}
              />
            ))}
          </div>
        </Reveal>
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
          {active && (
            <>
              <img
                src={active.image}
                alt={`${active.title} preview`}
                loading="lazy"
                width={1024}
                height={640}
                className="h-48 w-full rounded-2xl object-cover"
              />
              <DialogHeader>
                <DialogTitle className="text-2xl">{active.title}</DialogTitle>
                <DialogDescription>{active.tagline}</DialogDescription>
              </DialogHeader>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {active.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {active.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                <h4 className="text-sm font-semibold tracking-wide text-primary uppercase">
                  Architecture breakdown
                </h4>
                <ul className="mt-3 space-y-3">
                  {active.architecture.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={active.github}
                target="_blank"
                rel="noreferrer noopener"
                className="gradient-pill inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform duration-300 hover:scale-105"
              >
                <Github size={16} />
                View repository
              </a>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
