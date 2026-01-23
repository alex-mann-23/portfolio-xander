"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="h-full"
    >
      <Card className="h-full border-border/60 bg-card/70 shadow-sm backdrop-blur">
        <CardHeader className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          <CardTitle>{project.title}</CardTitle>
          <p className="text-sm text-muted-foreground">{project.summary}</p>
        </CardHeader>
        <CardContent className="mt-auto flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{project.year}</span>
          <Button asChild size="sm" variant="ghost">
            <Link href={`/projects/${project.slug}`}>View project</Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
