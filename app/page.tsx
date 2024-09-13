import CollegeSuccessPath from "@/components/CollegeSuccessPath";
import Hero from "@/components/Hero";
import InfiniteCollegeCarousel from "@/components/InfiniteCollegeCarousel";
import MentorShowcase from "@/components/MentorShowCase";
import Navbar from "@/components/Navbar";
import mentors from "@/constants/mentors";

export default function Home() {
  return (
      <>
        <Navbar />
        <Hero />
        <InfiniteCollegeCarousel />
        <CollegeSuccessPath />
        <MentorShowcase mentors={mentors}/>
      </>
  );
}
