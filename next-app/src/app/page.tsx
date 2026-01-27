import Link from "next/link";
import { PageTransition } from "@/components/PageTransition";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <PageTransition>
      <section className="space-y-6">
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
          Everything starts with an <span className="font-bold">idea</span>.
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Hi! 👋🏼 I’m Alexander Mann, a Senior Product Designer with more than 15 years of
          experience based in London 🇬🇧
        </p>
        <div className="flex flex-wrap gap-3">
          <Button className="border border-primary" asChild>
            <a href={site.cta.href}>Get in touch!</a>
          </Button>
        </div>
      </section>

      <Separator />

      <section id="featured" className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Featured
            </p>
            <h2 className="text-2xl font-semibold">{site.hero.heading}</h2>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/projects">View all</Link>
          </Button>
        </div>
        <ProjectsGrid projects={featuredProjects} />
      </section>

      <section id="about" className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            About
          </p>
          <h2 className="text-2xl font-semibold">{site.about.title}</h2>
          <div className="space-y-3 text-muted-foreground">
            {site.about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <Card className="border-border/60 bg-card/60">
          <CardHeader>
            <CardTitle>Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Focus</p>
              <p className="text-base text-foreground">Product systems + UX</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Location</p>
              <p className="text-base text-foreground">{site.location}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Collab</p>
              <p className="text-base text-foreground">Remote, async friendly</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="cta" className="rounded-3xl border border-border/60 bg-card/60 p-8 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Let's build
            </p>
            <h2 className="text-2xl font-semibold">{site.cta.heading}</h2>
            <p className="text-muted-foreground">{site.cta.subheading}</p>
          </div>
          <Button size="lg" asChild>
            <a href={site.cta.href}>{site.cta.actionLabel}</a>
          </Button>
        </div>
      </section>
    </PageTransition>
  );
}
