import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Coverage } from './components/Coverage';
import { Testimonials } from './components/Testimonials';
import { ValuationCTA } from './components/ValuationCTA';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Coverage />
      <Testimonials />
      <ValuationCTA />
      <Footer />
    </>
  );
}
