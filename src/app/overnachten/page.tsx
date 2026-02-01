import DetailPageHeader from "@/components/DetailPageHeader";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";

export default function OvernachtenPage() {
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
                    <path d="M8 56V24l24-16 24 16v32" />
                    <path d="M8 56h48" />
                    <rect x="24" y="36" width="16" height="20" />
                    <rect x="28" y="40" width="8" height="8" />
                    <path d="M16 32h8v8h-8z" />
                    <path d="M40 32h8v8h-8z" />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h1 className="heading-section text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-center mb-8">
                Overnachten
              </h1>

              {/* Content */}
              <div className="body-text space-y-6 text-center">
                <p>
                  <strong className="block text-xl mb-4">
                    Overnachten in de buurt van Slot Doddendael
                  </strong>
                  Willen jullie na onze bruiloft graag in de buurt blijven
                  overnachten? Rondom Slot Doddendael zijn er volop fijne opties
                  te vinden. In Arnhem en Nijmegen liggen diverse hotels, en in
                  de directe omgeving van het Slot vind je charmante bed &amp;
                  breakfasts voor een rustige en comfortabele overnachting.
                </p>

                <div className="bg-olive/10 p-6 rounded-lg">
                  <p>
                    <strong className="block text-lg mb-2">
                      Speciale afspraken met Van der Valk Nijmegen-Lent
                    </strong>
                    Voor onze bruiloftsgasten is er bij Van der Valk
                    Nijmegen-Lent een speciale kortingscode beschikbaar.
                  </p>
                  <p className="mt-4">
                    Boek je bij Van der Valk en wil je graag gebruikmaken van
                    een taxi terug naar het Slot? Laat dit dan even weten bij je
                    aanmelding via de RSVP, zodat wij dit voor jullie kunnen
                    regelen.
                  </p>
                  <p className="mt-4">
                    <strong>Kortingscode 10% bij Van der Valk:</strong>
                    <br />
                    <a
                      href="https://booking-v5.vandervalkonline.com/hotel-nijmegen-lent/configuration?promotionCode=NMG-SLOT"
                      target="_blank"
                      className="text-olive underline hover:text-olive-dark"
                    >
                      Boek hier met korting
                    </a>
                  </p>
                </div>
              </div>

              {/* Accommodations */}
              <div className="mt-12">
                <h2 className="heading-section text-2xl md:text-3xl font-light text-foreground text-center mb-8">
                  Onze favoriete adresjes in de buurt
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* B&Bs */}
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-4 text-foreground">
                      Bed &amp; Breakfasts
                    </h3>
                    <div className="space-y-4 text-left">
                      <div>
                        <p className="font-medium">
                          B&amp;B Bed of Flowers – Beuningen
                        </p>
                        <p className="text-sm">
                          <a
                            href="http://www.bedofflowers.nl/"
                            target="_blank"
                            className="text-olive underline"
                          >
                            www.bedofflowers.nl
                          </a>
                          <br />
                          Tel: 024 6750849
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">
                          B&amp;B Riek &amp; Nel – Beuningen
                        </p>
                        <p className="text-sm">
                          <a
                            href="https://www.bedandbreakfast.nl/nl/a/XAqHW79RTBu4/riek-nel"
                            target="_blank"
                            className="text-olive underline"
                          >
                            Bekijk op BedAndBreakfast.nl
                          </a>
                          <br />
                          Tel: 06 53286137
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">B&amp;B Dubois – Ewijk</p>
                        <p className="text-sm">
                          <a
                            href="https://www.airbnb.nl/rooms/31896331?source_impression_id=p3_1769955951_P3CvJ5T6EeFvuEmM"
                            target="_blank"
                            className="text-olive underline"
                          >
                            Bekijk op Airbnb.nl
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hotels */}
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-4 text-foreground">
                      Hotels
                    </h3>
                    <div className="space-y-4 text-left">
                      <div>
                        <p className="font-medium">
                          Van der Valk Nijmegen-Lent
                        </p>
                        <p className="text-sm">
                          <a
                            href="https://www.valknijmegen.nl"
                            target="_blank"
                            className="text-olive underline"
                          >
                            www.valknijmegen.nl
                          </a>
                          <br />
                          Tel: 024 7920200
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">Manna – Nijmegen</p>
                        <p className="text-sm">
                          <a
                            href="https://www.manna-nijmegen.nl/"
                            target="_blank"
                            className="text-olive underline"
                          >
                            www.manna-nijmegen.nl
                          </a>
                          <br />
                          Tel: 024 3650990
                        </p>
                      </div>
                    </div>
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
