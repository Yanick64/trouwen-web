"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { FadeIn } from "./FadeIn";

export default function Footer() {
  return (
    <footer id="contact" className="bg-olive-dark text-white pb-16">
      <Image
        src="/wine.jpg"
        alt=""
        width={2000}
        height={814}
        className="w-full object-cover mb-16"
      />

      <div className="container">
        <div className="grid lg:grid-cols-4 gap-12 items-center">
          {/* Left Column - Title */}
          <FadeIn direction="left">
            <div>
              <h2 className="heading-section text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                Get In
                <br />
                Touch
              </h2>
            </div>
          </FadeIn>

          {/* Middle Column - Martine */}
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Anne Mirthe Lindeboom</h3>
              <div className="space-y-2 text-white">
                <a
                  href="tel:+31615166353"
                  className="flex items-center gap-3 hover:underline"
                >
                  <Icon icon="mdi:phone" className="w-4 h-4" />
                  <span>+31 6 15 16 63 53</span>
                </a>
                <a
                  href="mailto:hetbruiloftsteam@gmail.com"
                  target="_blank"
                  className="flex items-center gap-3 hover:underline"
                >
                  <Icon icon="mdi:email" className="w-4 h-4" />
                  <span>hetbruiloftsteam@gmail.com</span>
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Right Column - Yanick */}
          <FadeIn delay={0.2}>
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Bo van Barneveld-Vlems</h3>
              <div className="space-y-2 text-white">
                <a
                  href="tel:+31639121830"
                  className="flex items-center gap-3 hover:underline"
                >
                  <Icon icon="mdi:phone" className="w-4 h-4" />
                  <span>+31 6 39 12 18 30</span>
                </a>
                <a
                  href="mailto:hetbruiloftsteam@gmail.com"
                  target="_blank"
                  className="flex items-center gap-3 hover:underline"
                >
                  <Icon icon="mdi:phone" className="w-4 h-4" />
                  <span>hetbruiloftsteam@gmail.com</span>
                </a>
              </div>
            </div>
          </FadeIn>

          {/* RVSP */}
          <FadeIn delay={0.3}>
            <a
              href="https://forms.gle/fXSb9iagwzDCj46w8"
              className="btn-footer ml-auto"
              target="_blank"
            >
              Aanmelden
            </a>
          </FadeIn>
        </div>
      </div>
    </footer>
  );
}
