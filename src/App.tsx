import { Nav } from "./components/Nav";
import { SiteBackground } from "./components/SiteBackground";
import { RouteField } from "./components/RouteField";
import { Hero } from "./components/Hero";
import { Directions } from "./components/Directions";
import { Services } from "./components/Services";
import { WhyUs } from "./components/WhyUs";
import { Banner } from "./components/Banner";
import { CargoForm } from "./components/CargoForm";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen text-ink">
      <SiteBackground />
      <RouteField />
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-lg focus:bg-amber-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-onaccent"
      >
        Əsas məzmuna keç
      </a>
      <Nav />
      <main>
        <Hero />
        <Directions />
        <Services />
        <WhyUs />
        <Banner />
        <CargoForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
