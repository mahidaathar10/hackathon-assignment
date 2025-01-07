import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/Product";
import CategorySection from "./components/CategorySection";
import StyleSection from "./components/StyleSection";
import ProductSection from "./components/ProductSection";

import LogoSection from "./components/LogoSection";

export default function Home() {
  return (
    <div>
      <TopBar/>
      <Header/>
      <Navbar/>
      <Hero />
      <LogoSection />
      <FeaturedProducts />
      <CategorySection />
      <StyleSection />
      <ProductSection />
    </div>
  );
}