"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ValidationErrorProps {
  error?: string;
  className?: string;
}

export function ValidationError({ error, className }: ValidationErrorProps) {
  return (
    <AnimatePresence>
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -10, height: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex items-center gap-2 text-red-600 text-sm mt-1 min-h-[24px]",
            className
          )}
        >
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{error}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 