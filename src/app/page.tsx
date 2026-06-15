import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import News from "@/components/News";
import Seasonal from "@/components/Seasonal";
import ProductGrid from "@/components/ProductGrid";
import Journal from "@/components/Journal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="flex-1">
        <Hero />
        <About />
        <News />
        <Seasonal />
        <ProductGrid />
        <Journal />
      </main>
      <Footer />
    </>
  );
}
