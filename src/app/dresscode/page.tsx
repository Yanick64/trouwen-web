import DetailPageHeader from "@/components/DetailPageHeader";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";

const colors = ["#BFCEB5", "#BEDFF8", "#F2CFDD", "#FAF5AE", "#F3B598"];

export default function DresscodePage() {
  return (
    <main>
      <DetailPageHeader />

      <section className="bg-cream mt-16">
        <div className="container py-16">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              {/* Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 text-olive">
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
                </div>
              </div>

              {/* Title */}
              <h1 className="heading-section text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-center mb-8">
                Dress Code
              </h1>

              {/* Content */}
              <div className="body-text space-y-6 text-center">
                <p>
                  <strong className="block text-xl mb-4">
                    Garden Party Chic
                  </strong>
                  Voor onze bruiloft laat je inspireren door Garden Party Chic:
                  een elegante, zomerse stijl met zachte kleuren, lichte stoffen
                  en een romantische sfeer. Kies vooral iets waar je je
                  comfortabel in voelt. Vrouwen kunnen gaan voor een lange of
                  midi-jurk, jumpsuit of pak in florals of zomerse (pastel)
                  tinten. Mannen voor een lichtgekleurd pak, bijvoorbeeld in
                  linnen; een das is optioneel.
                </p>

                <div className="flex flex-row items-center justify-center">
                  {colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 rounded-full -mx-0.5"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                <Image
                  src="/dresscode.png"
                  alt=""
                  width={1000}
                  height={1500}
                  className="mt-16"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
