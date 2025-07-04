"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useUIStore } from "@/store";
import { Loader2 } from "lucide-react";

export function LoadingSpinner() {
  const { isLoading, loadingText } = useUIStore();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-xl border"
          >
            <div className="flex flex-col items-center gap-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Loader2 className="w-8 h-8 text-blue-500" />
              </motion.div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {loadingText}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 