import { PageTransition } from "@/components/PageTransition";
import { ProjectsFilter } from "@/components/ProjectsFilter";
import { Separator } from "@/components/ui/separator";
import { projectTags, projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <PageTransition>
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
          Selected work
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Portfolio projects
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Browse a curated list of recent work across product, web, and brand design.
          Filter by focus area or explore everything at once.
        </p>
      </section>

      <Separator />

      <ProjectsFilter projects={projects} tags={projectTags} />
    </PageTransition>
  );
}
