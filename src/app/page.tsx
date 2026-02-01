import Hero from "@/components/Hero";
import LoveStory from "@/components/LoveStory";
import FullWidthImage from "@/components/FullWidthImage";
import Details from "@/components/Details";
import Program from "@/components/Program";
import RSVP from "@/components/RSVP";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="body">
      <Hero />

      <LoveStory />

      <FullWidthImage />

      <Details />

      <Program />

      <RSVP />

      <FAQ />

      <Footer />
    </main>
  );
}
