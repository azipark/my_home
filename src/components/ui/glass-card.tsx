import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  hoverEffect?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, hoverEffect = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "rounded-lg border border-border/50 bg-background/80 backdrop-blur-md backdrop-filter shadow-sm dark:bg-card/30 dark:backdrop-blur-md",
          hoverEffect &&
            "hover:shadow-lg hover:shadow-purple-500/10 dark:hover:shadow-purple-500/20 transition-all duration-500 ease-out",
          className
        )}
        whileHover={
          hoverEffect
            ? {
                y: -8,
                scale: 1.02,
                transition: { 
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94]
                },
              }
            : undefined
        }
        whileTap={
          hoverEffect
            ? {
                scale: 0.98,
                transition: { duration: 0.1 },
              }
            : undefined
        }
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        {...props}
      />
    );
  }
);

GlassCard.displayName = "GlassCard";

export { GlassCard };
