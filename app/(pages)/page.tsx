import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import NewCollection from "@/components/NewCollection";
import PromotionalBanner from "@/components/PromotionalBanner";
import TermsAndConditions from "@/components/TermsAndConditions";

export default function Home() {
  return (
    <div>
      <PromotionalBanner/> 
      <Navbar/>
      <HeroSection/>
      <NewCollection/>
      <Categories/>
      <Footer/>
      <TermsAndConditions/>
    </div>
  );
}
