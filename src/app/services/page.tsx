import HeroSection from "@/components/OurServices/HeroSection";
import ProcessSection from "@/components/OurServices/ProcessSection";
import ServicesGrid from "@/components/OurServices/ServicesGrid";
import WhyChooseUs from "@/components/OurServices/WhyChooseUs";

export default function page (){
    return(
        <div>
            <HeroSection/>
            <ServicesGrid/>
            {/* <ProcessSection/> */}
            <WhyChooseUs/>
        </div>
    )
}