import CollegeSuccessPath from "@/components/CollegeSuccessPath";
import Hero from "@/components/Hero";
import InfiniteCollegeCarousel from "@/components/InfiniteCollegeCarousel";
import MentorShowcase from "@/components/MentorShowCase";
import Navbar from "@/components/Navbar";
import SignupComponent from "@/components/JoinNow";
import mentors from "@/constants/mentors";
import Stats from "@/components/Stats";
import MentorReview from "@/components/MentorReview";
import categories from "@/constants/categories";
import reviews from "@/constants/reviews";
import BecomeMentor from "@/components/BecomeMentor";
import Faq from "@/components/Faq";


export default function Home() {
  return (
      <>
        <Navbar />
        <Hero />
        <InfiniteCollegeCarousel />
        <CollegeSuccessPath />
        <MentorShowcase mentors={mentors}/>
        <SignupComponent />
        <Stats />
        <MentorReview categories={categories} reviews={reviews} />
        <BecomeMentor />
        <Faq />
      </>
  );
}
