"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectsFilterProps = {
  projects: Project[];
  tags: string[];
};

export function ProjectsFilter({ projects, tags }: ProjectsFilterProps) {
  const [activeTag, setActiveTag] = useState(tags[0]);

  const filteredProjects = useMemo(() => {
    if (activeTag === "All") {
      return projects;
    }
    return projects.filter((project) => project.tags.includes(activeTag));
  }, [activeTag, projects]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => {
          const isActive = tag === activeTag;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={cn(
                "rounded-full border border-border px-3 py-1 text-xs font-medium transition",
                isActive
                  ? "border-transparent bg-accent text-accent-foreground shadow-glow"
                  : "bg-muted/40 text-muted-foreground hover:bg-muted/70"
              )}
            >
              <Badge variant={isActive ? "accent" : "outline"}>{tag}</Badge>
            </button>
          );
        })}
      </div>
      <ProjectsGrid projects={filteredProjects} />
    </div>
  );
}
