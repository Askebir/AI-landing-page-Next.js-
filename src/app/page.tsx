import { CallToAction } from "@/sections/CallToAction";
import { Features } from "@/sections/Features";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div className=" ">
      <div className=" flex flex-col  m-8  items-center justify-center">
        <Header />
        <Hero />
        <LogoTicker />
        <Features />
        <Testimonials />
        <CallToAction />
      </div>
    </div>
  );
}
