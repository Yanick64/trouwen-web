import DetailPageHeader from "@/components/DetailPageHeader";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";

export default function LocatiePage() {
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
                    <path d="M32 4C20.954 4 12 12.954 12 24c0 14 20 36 20 36s20-22 20-36c0-11.046-8.954-20-20-20z" />
                    <circle cx="32" cy="24" r="8" />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h1 className="heading-section text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-center mb-8">
                Trouwlocatie
              </h1>

              {/* Content */}
              <div className="body-text space-y-6 text-center">
                <p>
                  <strong className="block text-xl mb-4">
                    Slot Doddendael
                  </strong>
                  Voor onze trouwdag hebben we gekozen voor Slot Doddendael: een
                  romantisch, middeleeuws kasteeltje omringd door een
                  slotgracht, gelegen in het groen van het Land van Maas & Waal,
                  vlak bij Nijmegen. Zodra we hier voor het eerst aankwamen,
                  wisten we: dit is de plek.
                </p>
                <p>
                  Het kasteel werd gebouwd in de jaren ’30 van de 14e eeuw en
                  dankt zijn naam waarschijnlijk aan de lisdodde, een rietsoort
                  die nog altijd volop te vinden is in de drassige omgeving rond
                  het slot. Door de eeuwen heen heeft Slot Doddendael een rijke
                  en bewogen geschiedenis gekend. Het wisselde meerdere keren
                  van eigenaar, werd gebruikt als vesting, geplunderd en zelfs
                  meerdere malen in brand gestoken. Toch werd het steeds weer
                  opgebouwd.
                </p>
                <p>
                  Bijzonder vinden wij dat het slot in de 17e eeuw zelfs
                  dienstdeed als schuilkerk, toen de katholieke eredienst
                  verboden was. In de kelder kwamen mensen in het geheim samen
                  voor de mis — resten daarvan zijn vandaag de dag nog steeds te
                  zien. Na de laatste grote restauratie in 1972 kreeg Slot
                  Doddendael zijn huidige vorm en sfeer.
                </p>
                <p>
                  Tegenwoordig is het kasteel een geliefde plek voor bijzondere
                  momenten, en wij vinden het heel speciaal dat wij hier samen
                  met jullie onze liefde mogen vieren.
                </p>
              </div>

              {/* Practical Information */}
              <div className="mt-12">
                <h2 className="heading-section text-2xl md:text-3xl font-light text-foreground text-center mb-8">
                  Praktische informatie
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Address */}
                  <div className="bg-cream-light p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-4 text-foreground">
                      Adres
                    </h3>
                    <p>
                      Slot Doddendael
                      <br />
                      Binnenweg 2
                      <br />
                      6644 KD Ewijk
                    </p>
                    <a
                      href="https://www.google.com/maps/dir/52.0913949,5.0170452/Slot+Doddendael,+Binnenweg+2,+6644+KD+Ewijk/@51.9046552,5.5452218,11.7z/data=!4m10!4m9!1m1!4e1!1m5!1m1!1s0x47c7075bbd0749ad:0x428a92d86aea6824!2m2!1d5.7475706!2d51.874302!3e0?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      className="inline-block mt-3 text-olive underline"
                    >
                      Bekijk op Google Maps
                    </a>
                  </div>

                  {/* By Car */}
                  <div className="bg-cream-light p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-4 text-foreground">
                      Met de auto &amp; parkeren
                    </h3>
                    <p>
                      Slot Doddendael is goed bereikbaar via de A50 en A73. Op
                      het terrein is gratis parkeergelegenheid beschikbaar voor
                      alle gasten.
                    </p>
                  </div>

                  {/* Public Transport */}
                  <div className="bg-cream-light p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-4 text-foreground">
                      Openbaar vervoer
                    </h3>
                    <p>
                      Vanaf station Nijmegen kun je met de bus richting Ewijk
                      reizen. Vanaf de bushalte is het nog een korte wandeling
                      naar het kasteel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
