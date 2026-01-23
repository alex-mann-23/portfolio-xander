import Link from "next/link";
import { notFound } from "next/navigation";
import { PageTransition } from "@/components/PageTransition";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: { slug: string };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <PageTransition>
      <section className="space-y-4">
        <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground">
          &larr; Back to projects
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <p className="max-w-2xl text-muted-foreground">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {project.links?.live ? (
            <Button asChild>
              <a href={project.links.live} target="_blank" rel="noreferrer">
                Live preview
              </a>
            </Button>
          ) : null}
          {project.links?.repo ? (
            <Button variant="outline" asChild>
              <a href={project.links.repo} target="_blank" rel="noreferrer">
                View repository
              </a>
            </Button>
          ) : null}
        </div>
      </section>

      <Separator />

      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4 text-muted-foreground">
          {project.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Card className="border-border/60 bg-card/60">
          <CardHeader>
            <CardTitle>Project overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Role
              </p>
              <p className="text-base text-foreground">{project.role ?? "Product Design"}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Year
              </p>
              <p className="text-base text-foreground">{project.year ?? "2024"}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Stack
              </p>
              <p className="text-base text-foreground">Figma, Notion, Webflow</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </PageTransition>
  );
}
