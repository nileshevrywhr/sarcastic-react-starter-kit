
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServerStats from "@/components/ServerStats";
import LocationInfo from "@/components/LocationInfo";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ServerStats />
      <LocationInfo />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
