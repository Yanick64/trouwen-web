"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { FadeIn } from "./FadeIn";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
  readMore?: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Kan ik mijn kinderen of een +1 meenemen?",
    answer:
      "We hebben de uitnodigingen persoonlijk geadresseerd. Dat betekent dat alleen de personen die op de uitnodiging vermeld staan, zijn uitgenodigd. We hopen op jullie begrip en kijken ernaar uit om deze dag samen met de genodigden te vieren.",
  },
  {
    question: "Is er parkeergelegenheid?",
    answer:
      "Ja! Er is gratis parkeergelegenheid op het terrein van Slot Doddendael voor alle gasten. Je hoeft dus niet te zoeken naar een parkeerplek.",
  },
  {
    question: "Is de locatie bereikbaar met het openbaar vervoer?",
    answer:
      "Ja, dat kan. Vanaf station Nijmegen kun je de bus nemen richting Ewijk. Vanaf de dichtstbijzijnde bushalte is het nog een korte wandeling naar het kasteel.",
  },
  {
    question: "Cadeautip?",
    answer:
      "Wij wensen graag een bijdrage voor onze huwelijksreis. Zo nemen we jullie symbolisch een beetje mee op ons avontuur.",
  },
  {
    question: "Hoe laat worden we verwacht?",
    answer:
      "Op de dag zelf willen we graag op tijd beginnen. Voor een daggast is dit om 13:30 uur en voor een avondgast om 19:30 uur. Zorg dat je op tijd bent om niets van het moment te missen!",
  },
  {
    question: "Wat is de dresscode?",
    answer:
      "De dresscode is Garden Party Chic. Dit betekent dat je een elegante, zomerse stijl kunt dragen met zachte kleuren, lichte stoffen en een romantische sfeer.",
    readMore: "/dresscode",
  },
  {
    question: "Wordt er rekening gehouden met dieetwensen?",
    answer:
      "Zeker! In de RSVP kun je eventuele allergieën of dieetwensen doorgeven, dan zorgen wij dat dit wordt meegenomen.",
  },
  {
    question: "Mogen we foto’s maken?",
    answer:
      "Tijdens de ceremonie vragen we jullie vriendelijk om geen foto’s of video’s te maken, zodat iedereen het moment volledig kan beleven. De rest van de dag mag dat natuurlijk wel! We hebben een professionele foto- en videograaf die de hele dag alles vastlegt, zodat niemand iets hoeft te missen. Na de ceremonie stellen we ook een POV-app beschikbaar. Daarmee kunnen jullie op een leuke en laagdrempelige manier foto’s maken en delen! Als je foto’s of video’s wilt delen op social media (zoals Instagram), zouden we het fijn vinden als jullie dit pas doen nadat wij zelf iets hebben gedeeld, en niet eerder. Zo kunnen wij ons moment eerst zelf aankondigen.",
  },
  {
    question: "Zijn er overnachtingsmogelijkheden in de buurt?",
    answer:
      "Ja, in de omgeving van Slot Doddendael zijn verschillende hotels en B&B’s. We hebben een paar suggesties op de website voor jullie verzameld.",
    readMore: "/overnachten",
  },
  {
    question: "Wat als het slecht weer is?",
    answer:
      "We hopen op stralend weer maar geen zorgen! Slot Doddendael heeft prachtige binnenruimtes, dus ook bij slecht weer gaat alles gewoon door.",
  },
  {
    question: "Nog een andere vraag?",
    answer:
      "Heb je een vraag die hier niet tussen staat? Neem dan gerust contact op met onze ceremoniemeesters Anne Mirthe en Bo, zij helpen jullie graag verder.",
  },
];

const ChevronIcon = () => (
  <svg
    className="accordion-chevron w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

export default function FAQ() {
  return (
    <section className="bg-cream py-16">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Column - Title */}
          <div className="lg:col-span-1 flex">
            <FadeIn direction="left">
              <h2 className="heading-section text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight">
                Frequently
                <br />
                Asked
                <br />
                Questions
              </h2>
            </FadeIn>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-2">
            <Accordion.Root type="single" collapsible defaultValue="01">
              {faqItems.map((item, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <Accordion.Item
                    value={index.toString()}
                    className="border-b border-foreground"
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="accordion-trigger group cursor-pointer">
                        <div className="flex items-start text-lg md:text-xl">
                          <span className="w-10">
                            {(index + 1).toString().padStart(2, "0")}
                          </span>
                          <span className="">{item.question}</span>
                        </div>
                        <ChevronIcon />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="accordion-content">
                      <div className="pb-6 pl-10">
                        <p className="">{item.answer}</p>

                        {item.readMore && (
                          <Link
                            href={item.readMore as string}
                            className="mt-4 block font-bold underline hover:text-olive transition-colors"
                          >
                            Lees meer
                          </Link>
                        )}
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                </FadeIn>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </div>
    </section>
  );
}
