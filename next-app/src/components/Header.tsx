"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const { resolvedTheme, setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (!mounted) {
      return;
    }
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" aria-label={site.name}>
          <span className="sr-only">{site.name}</span>
          <Image
            src={mounted && resolvedTheme === "dark" ? "/logo-dark-v2.png" : "/logo-light.png"}
            width={36}
            height={36}
            alt=""
            className="h-9 w-9"
            aria-hidden="true"
            priority
          />
        </Link>

        <nav className="flex items-center gap-6">
          <Button
            size="sm"
            asChild
            className={cn(
              isDark
                ? "rounded-[4px] bg-white text-black hover:bg-white/90"
                : "rounded-[4px] bg-black text-white hover:bg-black/90",
              "hidden"
            )}
          >
            <a href={site.cta.href}>{site.cta.actionLabel}</a>
          </Button>
          <Button variant="ghost" size="sm" onClick={toggleTheme}>
            <span className="sr-only">Toggle theme</span>
            {mounted && theme === "dark" ? (
              <svg viewBox="0 0 24 24" className="h-[23px] w-6" fill="none" stroke="currentColor">
                <path
                  d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M3 12h2M19 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-[23px] w-6" fill="none" stroke="currentColor">
                <path
                  d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </Button>
        </nav>
      </div>
    </header>
  );
}
