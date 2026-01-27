"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
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

        <nav className="hidden items-center gap-6 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Button variant="outline" size="sm" asChild>
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

        <div className="flex items-center gap-2 md:hidden">
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
          <Button variant="outline" size="sm" onClick={() => setIsOpen((open) => !open)}>
            <span className="sr-only">Toggle navigation</span>
            <svg viewBox="0 0 24 24" className="h-[23px] w-6" fill="none" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-border/60 bg-background md:hidden"
          >
            <div className="flex flex-col gap-3 px-4 py-4">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="outline" size="sm" asChild>
                <a href={site.cta.href}>{site.cta.actionLabel}</a>
              </Button>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
