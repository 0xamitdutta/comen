import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"


const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-200">
      <div className="container px-8 mx-auto relative lg:text-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Image src="/assets/logo.png" alt="Logo" height={50} width={50} className="mr-2" />
          </div>
          <ul className="hidden lg:flex space-x-12">
            <li><a href="">Get Started</a></li>
            <li><a href="">Find Mentors</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">FAQs</a></li>
          </ul>
          <div className="hidden lg:flex justify-center items-center space-x-12">
            <Link href={"#"} className={buttonVariants({ variant: "outline" })}>Log In</Link>
            <Link href={"#"} className={buttonVariants({ variant: "default" })}>Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;