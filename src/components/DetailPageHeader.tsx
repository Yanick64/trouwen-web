"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function DetailPageHeader() {
  return (
    <header className="bg-cream fixed top-0 left-0 right-0 z-50">
      <div className="container py-6">
        <div className="flex items-center justify-between">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="flex items-center gap-2 text-foreground hover:text-olive transition-colors"
            >
              <Icon icon="mdi:arrow-left" className="w-5 h-5" />
              <span className="text-sm uppercase tracking-wider">Terug</span>
            </Link>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href="/"
              className="heading-display text-xl md:text-2xl font-light text-foreground"
            >
              Martine{" "}
              <span className="font-normal italic tracking-normal lowercase">
                &
              </span>{" "}
              Yanick
            </Link>
          </motion.div>

          {/* Spacer for alignment */}
          <div className="w-20" />
        </div>
      </div>
    </header>
  );
}
