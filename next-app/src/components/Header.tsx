"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export function Header() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
          <Button variant="outline" size="sm" asChild>
            <a href={site.cta.href}>{site.cta.actionLabel}</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
