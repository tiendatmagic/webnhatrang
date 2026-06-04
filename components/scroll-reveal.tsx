"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
}

export function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.8,
}: ScrollRevealProps) {
  const getVariants = () => {
    const hiddenMap = {
      up: { opacity: 0, y: 40 },
      down: { opacity: 0, y: -40 },
      left: { opacity: 0, x: -40 },
      right: { opacity: 0, x: 40 },
      none: { opacity: 0 },
    };

    return {
      hidden: hiddenMap[direction],
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: duration,
          delay: delay,
          ease: [0.4, 0, 0.2, 1] as const, // cubic-bezier matching original CSS
        },
      },
    };
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={getVariants()}
    >
      {children}
    </motion.div>
  );
}
