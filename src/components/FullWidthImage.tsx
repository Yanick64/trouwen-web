"use client";

import Image from "next/image";
import { FadeIn } from "./FadeIn";

export default function FullWidthImage() {
  return (
    <section className="relative min-h-screen w-full bg-olive grid grid-cols-1 md:grid-cols-2">
      <FadeIn
        direction="left"
        className="relative min-h-[50vh] md:min-h-screen"
      >
        <Image
          src="/left.jpg"
          alt="Our love story"
          fill
          className="object-cover object-center"
        />
      </FadeIn>

      <FadeIn direction="right" className="flex items-center justify-center">
        <Image
          src="/right.jpg"
          alt="Our love story"
          width={1600}
          height={1600}
          className="p-8 md:p-16 w-full max-w-[600px]"
        />
      </FadeIn>
    </section>
  );
}
