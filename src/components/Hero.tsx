"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative md:min-h-screen flex flex-col justify-between bg-olive">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <Image
          src="/banner.jpg"
          alt="Martine & Yanick"
          fill
          className="object-cover md:object-cover object-[43%_0%]"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 text-white container pt-8 md:pt-16">
        <motion.h1
          className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span>Martine</span>
          <span className="font-normal italic tracking-normal lowercase mx-2 md:mx-6">
            &
          </span>
          <span>Yanick</span>
        </motion.h1>
      </div>

      {/* Bottom Info Bar */}
      <div className="relative z-10 flex justify-between text-white container pb-6 md:pb-16 mt-42 md:mt-0">
        <motion.div
          className="sm:text-2xl text-base tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          31 juli 2026
        </motion.div>
        <motion.div
          className="sm:text-2xl text-base tracking-wider text-right"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          #debruiloftvanons
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 hidden md:block left-1/2 transform -translate-x-1/2 z-10 bg-white rounded-full p-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
      >
        <a
          href="#love-story"
          className="text-foreground opacity-75 hover:opacity-100 transition-opacity"
        >
          <Icon icon="mdi:arrow-down" className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
}
