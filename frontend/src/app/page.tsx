import HeroSection from "@/components/HeroSection";
import { LandingNavbar } from "@/components/LandingNavbar";
import CompanyCarousel from "@/components/CompanyCarousel";
import MockupSection from "@/components/MockupSection";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Comparison from "@/components/Comparison";
import Working from "@/components/Working";
import Features from "@/components/Features";

export default function Home() {
  return (
    <div>
      <LandingNavbar />
      <HeroSection />
      <CompanyCarousel />
      <MockupSection />
      <Pricing />
      <Features />
      <Comparison />
      <Working />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
