"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
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
          <svg
            width="36"
            height="36"
            viewBox="0 0 368 368"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block h-9 w-9 dark:hidden"
            aria-hidden="true"
          >
            <g clipPath="url(#clip0_logo_light)">
              <rect width="368" height="368" fill="white" />
              <rect x="45.8918" y="91.8379" width="321.622" height="229.73" fill="#F9BF81" />
              <rect width="46" height="92" transform="matrix(-1 0 0 1 46 138)" fill="#F9BF81" />
              <path
                d="M45.8916 91.8379V137.784H-0.0537109L-0.0537109 91.8379H45.8916ZM368 53H367.514V91.8379L45.8916 91.8379L45.8916 45.8926L184 45.8926V0L368 0V53Z"
                fill="#120900"
              />
              <path
                d="M91.8379 275.623H137.784V321.568H183.73V275.623H229.676V321.568H321.568V275.623H367.514V321.568H367.515V367.514H91.8379L91.8379 321.568H45.8916L45.8916 137.784H91.8379V275.623ZM321.568 275.622H229.676V229.677H321.568V275.622ZM229.676 183.73H183.73V137.784H229.676V183.73ZM321.568 183.73H275.622V137.784L321.568 137.784V183.73Z"
                fill="#120900"
              />
            </g>
            <defs>
              <clipPath id="clip0_logo_light">
                <rect width="368" height="368" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            width="36"
            height="36"
            viewBox="0 0 368 368"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden h-9 w-9 dark:block"
            aria-hidden="true"
          >
            <g clipPath="url(#clip0_logo_dark)">
              <rect width="46" height="92" transform="matrix(-1 0 0 1 46 138)" fill="#F9BF81" />
              <path d="M0 0L184 0V46L46 46L46 92H0L0 0Z" fill="white" />
              <path d="M46 322H92L92 368H0L0 230H46L46 322Z" fill="white" />
              <path
                d="M368 276H322V322H230V276H184V322H138V276H92V138H46V92L368 92V276ZM229.676 229.677V275.622H321.568V229.677L229.676 229.677ZM183.73 137.784V183.73H229.676V137.784H183.73ZM275.622 137.784V183.73H321.568V137.784H275.622Z"
                fill="#F9BF81"
              />
            </g>
            <defs>
              <clipPath id="clip0_logo_dark">
                <rect width="368" height="368" fill="white" />
              </clipPath>
            </defs>
          </svg>
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
