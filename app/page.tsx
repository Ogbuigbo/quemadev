import Image from "next/image";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Solution from "./_components/Solution";
import Facts from "./_components/Facts";
import Contact from "./_components/Contact";
import Logo from "./_components/Logo";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <About />
      <Solution />
      <Logo/>
      <Facts/>
      <Contact/>
    </div>
  );
}
