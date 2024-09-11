import CollegeSuccessPath from "@/components/CollegeSuccessPath";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
      <>
        <Navbar />
        <Hero />
        <CollegeSuccessPath />
      </>
  );
}
