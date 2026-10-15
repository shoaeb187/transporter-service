import { Fleet } from "@/components/Fleet";
import { FloatingWhatsApp, Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import {
  BusinessCard,
  Destinations,
  FinalCta,
  HowItWorks,
  Services,
  WhyUs,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Fleet />
        <WhyUs />
        <Destinations />
        <HowItWorks />
        <BusinessCard />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
