"use client";

import Image from "next/image";
import { useState } from "react";
import { FadeIn } from "./FadeIn";

interface TimelineItem {
  time: string;
  title: string;
}

const dayProgram: TimelineItem[] = [
  { time: "13:30 uur", title: "Aanvang" },
  { time: "14:00 uur", title: "Ceremonie" },
  { time: "14:45 uur", title: "Proost & Taart" },
  { time: "17:30 uur", title: "Diner" },
];

const eveningProgram: TimelineItem[] = [
  { time: "19:30 uur", title: "Pre-party" },
  { time: "21:00 uur", title: "Feest" },
  { time: "00:30 uur", title: "Einde" },
];

export default function Program() {
  const [activeTab, setActiveTab] = useState<"dag" | "avond">("dag");

  const currentProgram = activeTab === "dag" ? dayProgram : eveningProgram;

  return (
    <section className="bg-cream-light py-16">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Timeline */}
          <div>
            {/* Section Title */}
            <FadeIn>
              <h2 className="heading-section text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-12">
                Bruiloft
                <br />
                Programma
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex gap-8">
                {/* Timeline */}
                <div className="flex-1">
                  <div className="space-y-6">
                    {currentProgram.map((item, index) => (
                      <div key={index} className="flex items-start gap-6">
                        <div className="text-foreground/70 w-24 pt-1">
                          {item.time}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-4">
                            <div className="w-3 h-3 rounded-full bg-olive" />
                            <span className="font-medium text-foreground">
                              {item.title}
                            </span>
                          </div>
                          {index < currentProgram.length - 1 && (
                            <div className="ml-1.5 mt-2 w-px h-8 bg-olive/30" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tab Switcher */}
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setActiveTab("dag")}
                    className={`px-4 py-2 uppercase tracking-wider transition-colors writing-mode-vertical cursor-pointer ${
                      activeTab === "dag"
                        ? "bg-olive text-white"
                        : "bg-cream text-foreground hover:bg-cream-dark"
                    }`}
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                    }}
                  >
                    Dag
                  </button>
                  <button
                    onClick={() => setActiveTab("avond")}
                    className={`px-4 py-2 uppercase tracking-wider transition-colors cursor-pointer ${
                      activeTab === "avond"
                        ? "bg-olive text-white"
                        : "bg-cream text-foreground hover:bg-cream-dark"
                    }`}
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                    }}
                  >
                    Avond
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Image */}
          <FadeIn delay={0.3} direction="right">
            <Image
              src="/doddendael.jpg"
              alt=""
              width={600}
              height={600}
              className="w-full"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
