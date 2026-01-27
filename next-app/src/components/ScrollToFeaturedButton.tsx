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
      <span className="relative flex h-9 w-6 items-start justify-center rounded-full border border-foreground/50">
        <motion.span
          className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
        />
      </span>
      <span>Scroll down to see my work</span>
    </button>
  );
}
