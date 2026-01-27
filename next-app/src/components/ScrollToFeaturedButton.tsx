"use client";

import { motion } from "framer-motion";

const SCROLL_OFFSET = 80;

export function ScrollToFeaturedButton() {
  const handleClick = () => {
    const featuredSection = document.getElementById("featured");
    if (!featuredSection) {
      return;
    }

    const top =
      featuredSection.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="group inline-flex items-center gap-3 text-sm font-medium text-foreground/80 transition hover:text-foreground"
    >
      <span className="relative flex h-9 w-6 items-start justify-center overflow-hidden rounded-full border border-foreground/50">
        <span className="absolute left-1/2 top-2 h-2 w-0.5 -translate-x-1/2 rounded-full bg-foreground/70" />
        <motion.span
          className="absolute left-1/2 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-foreground"
          initial={{ opacity: 1, y: 0 }}
          animate={{ y: [0, 0, 14], opacity: [0, 1, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.2, 1],
            repeatDelay: 0.1,
          }}
        />
      </span>
      <span>Scroll down to see my work</span>
    </button>
  );
}
