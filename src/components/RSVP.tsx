"use client";

import Image from "next/image";
import { FadeIn } from "./FadeIn";

export default function RSVP() {
  return (
    <section className="bg-olive-dark text-center">
      <div className="container py-16 text-white relative">
        {/* Desktop: Absolute positioned images in corners */}
        <FadeIn
          direction="left"
          className="hidden lg:block absolute top-16 left-4"
        >
          <Image src="/program-1.jpg" alt="" width={225} height={225} />
        </FadeIn>

        <FadeIn
          direction="right"
          className="hidden lg:block absolute right-4 bottom-16"
        >
          <Image src="/program-2.jpg" alt="" width={225} height={225} />
        </FadeIn>

        {/* Title */}
        <FadeIn className="relative z-10">
          <h2 className="heading-section text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Ben jij er bij?
          </h2>
        </FadeIn>

        {/* Description */}
        <FadeIn delay={0.1} className="relative z-10">
          <p className="body-text mb-10">
            Laat je ons vóór 1 juni 2026 weten of je erbij bent?
          </p>
        </FadeIn>

        {/* CTA Button */}
        <FadeIn delay={0.2} className="relative z-10">
          <a
            href="https://forms.gle/fXSb9iagwzDCj46w8"
            target="_blank"
            className="btn-footer"
          >
            Aanmelden
          </a>
        </FadeIn>

        {/* Contact Info */}
        <FadeIn delay={0.3} className="relative z-10">
          <div className="mt-12 pt-8 border-t border-foreground/20 mx-auto inline-block max-w-md w-full">
            <p className="mb-2">Bij vragen en/of opmerkingen</p>
            <a
              href="mailto:hetbruiloftsteam@gmail.com"
              className="hover:underline"
            >
              hetbruiloftsteam@gmail.com
            </a>
          </div>
        </FadeIn>

        {/* Mobile: Overlapping images below content */}
        <FadeIn delay={0.4} className="lg:hidden mt-12 relative h-48">
          <Image
            src="/program-1.jpg"
            alt=""
            width={200}
            height={200}
            className="absolute left-1/2 -translate-x-[90%] -rotate-6"
          />
          <Image
            src="/program-2.jpg"
            alt=""
            width={200}
            height={200}
            className="absolute left-1/2 -translate-x-[10%] rotate-[4deg]"
          />
        </FadeIn>
      </div>
    </section>
  );
}
