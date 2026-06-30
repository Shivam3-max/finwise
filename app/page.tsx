import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedAdvisors from "@/components/home/FeaturedAdvisors";
import RatesTicker from "@/components/home/RatesTicker";
import CalculatorsPreview from "@/components/home/CalculatorsPreview";
import LearningPreview from "@/components/home/LearningPreview";
import Testimonials from "@/components/home/Testimonials";
import Partners from "@/components/home/Partners";

export default function HomePage() {
  return (
    <>
      <Hero />
      <RatesTicker />
      <Categories />
      <WhyChooseUs />
      <FeaturedAdvisors />
      <CalculatorsPreview />
      <LearningPreview />
      <Testimonials />
      <Partners />
    </>
  );
}
