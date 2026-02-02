import { PageTransition } from "@/components/PageTransition";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { ScrollToFeaturedButton } from "@/components/ScrollToFeaturedButton";
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
          Hi there! 👋🏼 I’m Alexander Mann — a Senior Product Designer from Argentina 🇦🇷
          living in London 🇬🇧 with 15+ years shaping digital products and design solutions.
        </p>
        <div className="flex flex-wrap gap-3">
          <ScrollToFeaturedButton />
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
        </div>
        <ProjectsGrid projects={featuredProjects} />
      </section>

      <section id="about" className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            About
          </p>
          <h2 className="text-2xl font-semibold">A short story behind my work</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              I am a product designer who enjoys what design has to bring to the world. I
              simply love making useful things that also look great 🔥
            </p>
            <p>
              By the age of 12, I learnt basic HTML at school. This was the first time that I
              could be in control of the design of something, and I immediately loved it! 🫶🏻
            </p>
            <p>
              A new hobby was born: every day after school, I went back home and started a new
              web on whatever subject I had in mind. Opening a bloc of notes and starting to
              code was an adventure for me. 🤓
            </p>
            <p>
              Years later, I realised I enjoyed designing more than coding, and the rest is
              history 😉
            </p>
            <p>
              Now, after years of having worked in different industries as a designer
              (marketing, branding, digital advertising, UX/UI, product), I'm closing the
              circle, diving back into code and using Cursor to build the website you are
              looking at right now 😊
            </p>
          </div>
        </div>
      </section>

      <section id="cta" className="rounded-3xl border border-border/60 bg-card/60 p-8 shadow-sm">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Other projects
          </p>
          <h2 className="text-2xl font-semibold">
            Some products I've helped or worked with other designers I'm proud of
          </h2>
        </div>
        <div className="mt-6 divide-y divide-border/60">
          <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-2">
              <p className="text-base font-semibold">Website Redesign @ Unit4</p>
              <p className="text-sm text-muted-foreground">DCX - 2024</p>
            </div>
            <div className="sm:text-right">
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.unit4.com/" target="_blank" rel="noreferrer">
                  View LIVE SITE
                </a>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-2">
              <p className="text-base font-semibold">Intertal HR & Compensation Software @ WTW</p>
              <p className="text-sm text-muted-foreground">DCX - 2023/24</p>
            </div>
            <p className="text-sm text-muted-foreground sm:text-right">Case Study Available</p>
          </div>
          <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-2">
              <p className="text-base font-semibold">Homepage Redesign @ ACN</p>
              <p className="text-sm text-muted-foreground">DCX - 2022</p>
            </div>
            <div className="sm:text-right">
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://www.alwaleedculturalnetwork.org/en/homepage/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Website
                </a>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-2">
              <p className="text-base font-semibold">
                Internal AI-forecast Planning Software @ Levi's
              </p>
              <p className="text-sm text-muted-foreground">Reason - 2021/22</p>
            </div>
            <p className="text-sm text-muted-foreground sm:text-right">Case Study Available</p>
          </div>
          <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-2">
              <p className="text-base font-semibold">Website Redesign @ Auth0 (Okta)</p>
              <p className="text-sm text-muted-foreground">Aerolab - 2021</p>
            </div>
            <p className="text-sm text-muted-foreground sm:text-right">Case Study Available</p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
