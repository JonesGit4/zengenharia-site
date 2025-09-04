import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Cases from "./sections/Cases";
import WhyChoose from "./sections/WhyChoose";
import FAQ from "./sections/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Cases />
      <WhyChoose />
      <FAQ />
    </main>
  );
}
