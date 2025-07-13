import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import ProductCatalog from "@/components/ProductCatalog";
import CarWashBooking from "@/components/CarWashBooking";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesOverview />
      <ProductCatalog />
      <CarWashBooking />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
