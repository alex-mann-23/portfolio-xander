import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Xander Portfolio",
  description: "Minimalist portfolio built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute left-1/2 top-[-10%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.2),transparent_60%)] blur-3xl" />
            <div className="absolute right-[10%] top-[20%] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.2),transparent_60%)] blur-3xl" />
          </div>

          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:ring-2 focus:ring-ring/60"
          >
            Skip to content
          </a>

          <Header />

          <main id="content" className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
            {children}
          </main>

          <footer className="border-t border-border/60">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-muted-foreground sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
              <div className="space-y-2">
              <p>Alexander Mann — Digital Portfolio 2026</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a href={`mailto:${site.links.email}`}>{site.links.email}</a>
                </Button>
                {site.links.socials.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="text-sm transition hover:text-foreground"
                  >
                    {social.label}
                  </Link>
                ))}
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
