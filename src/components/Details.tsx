"use client";

import DetailCard from "./DetailCard";
import { FadeIn } from "./FadeIn";

// Icon components
const LocationIcon = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-full h-full"
  >
    <path d="M32 4C20.954 4 12 12.954 12 24c0 14 20 36 20 36s20-22 20-36c0-11.046-8.954-20-20-20z" />
    <circle cx="32" cy="24" r="8" />
  </svg>
);

const DressCodeIcon = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-full h-full"
  >
    <path d="M32 8l-8 4v8l8 4 8-4v-8l-8-4z" />
    <path d="M24 20v24l8 12 8-12V20" />
    <path d="M20 24c-4 2-8 8-8 16v8h40v-8c0-8-4-14-8-16" />
  </svg>
);

const AccommodationIcon = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-full h-full"
  >
    <path d="M8 56V24l24-16 24 16v32" />
    <path d="M8 56h48" />
    <rect x="24" y="36" width="16" height="20" />
    <rect x="28" y="40" width="8" height="8" />
    <path d="M16 32h8v8h-8z" />
    <path d="M40 32h8v8h-8z" />
  </svg>
);

export default function Details() {
  const details = [
    {
      icon: <LocationIcon />,
      title: "Trouwlocatie",
      description:
        "We trouwen op het prachtige Slot Doddendael in Ewijk. Een romantische locatie met een Italiaanse vibe. Het slot heeft een rijke geschiedenis en een prachtige wijngaard.",
      linkHref: "/locatie",
    },
    {
      icon: <DressCodeIcon />,
      title: "Dress Code",
      description:
        "De dresscode is Garden Party Chic. Dit betekent dat je een elegante, zomerse stijl kunt dragen met zachte kleuren, lichte stoffen en een romantische sfeer.",
      linkHref: "/dresscode",
    },
    {
      icon: <AccommodationIcon />,
      title: "Overnachten",
      description:
        "Er zijn veel overnachtingsmogelijkheden in de buurt. Je kunt gebruikmaken van extra korting bij Van der Valk.",
      linkHref: "/overnachten",
    },
  ];

  return (
    <section id="details" className="bg-cream flex items-center">
      <div className="container py-16">
        {/* Section Title */}
        <FadeIn>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="heading-section text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
              Details
            </h2>
          </div>
        </FadeIn>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-12 xl:gap-32">
          {details.map((detail, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <DetailCard
                icon={detail.icon}
                title={detail.title}
                description={detail.description}
                linkHref={detail.linkHref}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
