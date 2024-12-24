

import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import NewCollection from "@/components/NewCollection";
import PromotionalBanner from "@/components/PromotionalBanner";
import TermsAndConditions from "@/components/TermsAndConditions";
import { createClient } from "@/utils/supabase/client";

export default async function Home() {

  const supabase = createClient();

  const { data } = await supabase.from('product').select();
  if(data){
    console.log(data);
  }
        
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
