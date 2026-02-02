"use client";

import Image from "next/image";
import { FadeIn } from "./FadeIn";

export default function LoveStory() {
  return (
    <section id="love-story" className="bg-cream pt-16 lg:pt-0 overflow-hidden">
      <div className="container flex flex-col lg:flex-row lg:min-h-[800px]">
        {/* Left Column - Images */}
        <div className="flex flex-col lg:flex-1 relative">
          {/* Header and main image */}
          <div className="flex flex-row lg:justify-between items-center gap-4 sm:gap-6 my-auto relative z-10">
            <FadeIn direction="left" className="order-2 lg:order-1">
              <h2 className="bg-cream rounded heading-section text-4xl lg:text-5xl font-light text-left">
                <span className="block">Our</span>
                <span className="block">Love</span>
                <span className="block">Story</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2} className="order-1 lg:order-2">
              <Image
                src="/our-love-story.jpg"
                alt=""
                width={345}
                height={520}
                className="w-[280px] lg:w-[450px] h-auto z-10 relative"
              />
            </FadeIn>
          </div>

          <FadeIn
            delay={0.3}
            className="hidden lg:block mt-auto absolute bottom-0 right-0"
          >
            <Image src="/vienna.png" alt="" width={800} height={395} />
          </FadeIn>
        </div>

        {/* Right Column - Text */}
        <div className="flex items-center lg:px-12 xl:px-24 py-8 lg:py-16 lg:max-w-2xl">
          <div className="max-w-lg">
            <div className="body-text space-y-6">
              <FadeIn delay={0.1}>
                <p>
                  We ontmoetten elkaar in 2021 via Tinder, midden in de
                  coronaperiode. Onze eerste date? Aan de gracht in Utrecht met
                  een fles Pinot Grigio, want alle terrassen zaten vol. Het was
                  meteen onvergetelijk.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p>
                  Na veel leuke dates gingen we naar Venetië. Geen toeristen,
                  alleen wij en een beetje romantiek. Op Lido vroeg Yanick
                  Martine verkering in zee, op de dag dat Italië het EK won.
                  Venetië was het begin van alles: onze relatie en onze liefde
                  voor Italië.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p>
                  Sindsdien volgden een roadtrip door Toscane, avonturen in
                  Mexico, samenwonen (met poes Luna!), en ons huis in Vleuten.
                  En toen, op een privéboot bij Hong Island in Thailand, ging
                  Yanick op z&apos;n knie.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p>
                  Van een fles wijn aan de gracht tot een droomaanzoek op zee...
                </p>
              </FadeIn>
              <FadeIn delay={0.5}>
                <p>Onze reis samen is nog maar net begonnen.</p>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      {/* Venice image - shown only on mobile, below text */}
      <FadeIn delay={0.4} className="container lg:hidden">
        <Image
          src="/vienna.png"
          alt=""
          width={800}
          height={395}
          className="w-full h-auto"
        />
      </FadeIn>
    </section>
  );
}
