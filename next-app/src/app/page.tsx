 "use client";

import { useState } from "react";
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  const otherProjectButtonClass =
    "rounded-[4px] text-sm decoration-foreground/60 hover:decoration-foreground";
  const ctaProjectRowClass =
    "flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6";
  const ctaProjectTextClass = "min-w-0 flex-1 space-y-2 text-left";
  const ctaProjectActionClass = "flex w-full shrink-0 justify-end sm:w-auto";
  const [activeTab, setActiveTab] = useState<"projects" | "about">("projects");

  const tabButtonBase =
    "rounded-lg border-0 px-4 py-2 text-xs uppercase tracking-[0.3em] transition-[color,background-color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const tabButtonInactive =
    "font-semibold bg-transparent text-muted-foreground hover:text-foreground/80 dark:text-zinc-500 dark:hover:text-zinc-400";
  const tabButtonActive =
    "font-bold bg-zinc-200 text-zinc-900 dark:bg-zinc-100 dark:text-[hsl(222,47%,6%)]";

  return (
    <PageTransition>
      <section className="space-y-6">
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
          Everything starts with an <span className="font-bold">idea</span>.
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Hi there! 👋🏼 I’m Alex M — a Senior Product Designer from Argentina 🇦🇷
          living in London 🇬🇧 with 15+ years shaping digital products and design solutions.
        </p>
      </section>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveTab("projects")}
          className={`${tabButtonBase} ${
            activeTab === "projects" ? tabButtonActive : tabButtonInactive
          }`}
        >
          Latest
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("about")}
          className={`${tabButtonBase} ${
            activeTab === "about" ? tabButtonActive : tabButtonInactive
          }`}
        >
          About
        </button>
      </div>

      {activeTab === "about" ? (
        <section
          id="about"
          className="rounded-3xl border border-border/60 bg-card/60 p-8 shadow-sm"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">A short story behind my work</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                I’m a product designer who genuinely loves what design can bring into the
                world — useful things that also look great 🔥
              </p>
              <p>
                It all started when I was 12, learning basic HTML at school. For the first
                time, I could actually control how something looked and worked — and I was
                instantly hooked 🫶🏻
              </p>
              <p>
                That quickly turned into a daily habit. I’d get home, open Notepad, and build
                random little websites about whatever I was into at the time. It felt like a
                tiny adventure every day 🤓
              </p>
              <p>
                Over time, I realised I was more drawn to designing than coding… and
                naturally leaned into it 😉
              </p>
              <p>
                Since then, I’ve worked across different areas — marketing, branding, digital,
                UX / UI, product — picking up a bit of everything along the way.
              </p>
              <p>
                Now I feel like I’ve come full circle, getting back into code and using tools
                like Cursor to build things again — including this very site 😊
              </p>
            </div>
          </div>
        </section>
      ) : (
        <section
          id="cta"
          className="rounded-3xl border border-border/60 bg-card/60 p-8 shadow-sm"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">
              A mix of projects I've led and teamed up on — bringing ideas to life,
              solving problems, and making things look and feel great along the way
            </h2>
          </div>
          <div className="mt-6 divide-y divide-border/60">
            <div className={ctaProjectRowClass}>
              <div className={ctaProjectTextClass}>
                  <p className="text-base font-semibold">Website Redesign @ Unit4</p>
                  <p className="text-sm text-muted-foreground">DCX - 2024/25</p>
                </div>
              <div className={ctaProjectActionClass}>
                <Button
                  size="sm"
                  variant="ghost"
                  asChild
                  className={otherProjectButtonClass}
                >
                  <a href="https://www.unit4.com/" target="_blank" rel="noreferrer">
                    <span className="font-semibold">View Website</span>
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M5 12h14M13 5l7 7-7 7"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
            <div className={ctaProjectRowClass}>
              <div className={ctaProjectTextClass}>
                  <p className="text-base font-semibold">
                    Intertal HR & Compensation Software @ WTW
                  </p>
                  <p className="text-sm text-muted-foreground">DCX - 2023/24</p>
                </div>
              <div className={ctaProjectActionClass}>
                <p className="text-right text-sm text-muted-foreground">Case Study Available</p>
              </div>
            </div>
            <div className={ctaProjectRowClass}>
              <div className={ctaProjectTextClass}>
                  <p className="text-base font-semibold">Homepage Redesign @ ACN</p>
                  <p className="text-sm text-muted-foreground">DCX - 2022</p>
                </div>
              <div className={ctaProjectActionClass}>
                <Button
                  size="sm"
                  variant="ghost"
                  asChild
                  className={otherProjectButtonClass}
                >
                  <a
                    href="https://www.alwaleedculturalnetwork.org/en/homepage/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="font-semibold">View Website</span>
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M5 12h14M13 5l7 7-7 7"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
            <div className={ctaProjectRowClass}>
              <div className={ctaProjectTextClass}>
                  <p className="text-base font-semibold">
                    Internal AI-forecast Planning Software @ Levi's
                  </p>
                  <p className="text-sm text-muted-foreground">Reason - 2021/22</p>
                </div>
              <div className={ctaProjectActionClass}>
                <p className="text-right text-sm text-muted-foreground">Case Study Available</p>
              </div>
            </div>
            <div className={ctaProjectRowClass}>
              <div className={ctaProjectTextClass}>
                  <p className="text-base font-semibold">New Feature Design @ Royal Mail App</p>
                  <p className="text-sm text-muted-foreground">W12 - 2021</p>
                </div>
              <div className={ctaProjectActionClass}>
                <Button
                  size="sm"
                  variant="ghost"
                  asChild
                  className={otherProjectButtonClass}
                >
                  <a
                    href="https://www.royalmail.com/downloadapp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="font-semibold">View App</span>
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M5 12h14M13 5l7 7-7 7"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
            <div className={ctaProjectRowClass}>
              <div className={ctaProjectTextClass}>
                  <p className="text-base font-semibold">Website Redesign @ Auth0 (Okta)</p>
                  <p className="text-sm text-muted-foreground">Aerolab - 2021</p>
                </div>
              <div className={ctaProjectActionClass}>
                <p className="text-right text-sm text-muted-foreground">Case Study Available</p>
              </div>
            </div>
            <div className={ctaProjectRowClass}>
              <div className={ctaProjectTextClass}>
                  <p className="text-base font-semibold">Website Redesign @ Banco Santa Fe</p>
                  <p className="text-sm text-muted-foreground">Aerolab - 2020/21</p>
                </div>
              <div className={ctaProjectActionClass}>
                <Button
                  size="sm"
                  variant="ghost"
                  asChild
                  className={otherProjectButtonClass}
                >
                  <a
                    href="https://www.bancosantafe.com.ar/personas"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="font-semibold">View Website</span>
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M5 12h14M13 5l7 7-7 7"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
            <div className={ctaProjectRowClass}>
              <div className={ctaProjectTextClass}>
                <p className="text-base font-semibold">Smart Helmet App Design @ Unit1</p>
                <p className="text-sm text-muted-foreground">Aerolab - 2020</p>
              </div>
              <div className={ctaProjectActionClass}>
                <Button
                  size="sm"
                  variant="ghost"
                  asChild
                  className={otherProjectButtonClass}
                >
                  <a
                    href="https://www.unit1gear.com/pages/app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="font-semibold">View App</span>
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M5 12h14M13 5l7 7-7 7"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

    </PageTransition>
  );
}
