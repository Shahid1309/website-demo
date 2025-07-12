
import CallToAction from "@/components/About/CallToAction";
import FeaturedProject from "@/components/HomePages/FeaturedProject";
import HeroPage from "@/components/HomePages/HeroPage";
import OurClient from "@/components/HomePages/OurClient";
import ServicesSection from "@/components/HomePages/ServicesSection";
import TestimonialsSection from "@/components/HomePages/TestimonialsSection";




export default function Home() {
  return (
   <>
   <div className="  ">
    
   
   <HeroPage/>
   <OurClient/>
   <ServicesSection/>
   <FeaturedProject/>
   <TestimonialsSection/>
   <CallToAction/>
   
   </div>
   </>
  );
}
