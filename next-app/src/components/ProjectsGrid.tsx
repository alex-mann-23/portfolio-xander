"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { cn } from "@/lib/utils";

type ProjectsGridProps = {
  projects: Project[];
  className?: string;
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export function ProjectsGrid({ projects, className }: ProjectsGridProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className={cn("grid gap-6 md:grid-cols-2 xl:grid-cols-3", className)}
    >
      {projects.map((project) => (
        <motion.div key={project.slug} variants={itemVariants}>
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
}
