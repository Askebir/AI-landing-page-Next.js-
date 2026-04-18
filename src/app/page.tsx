import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";

export default function Home() {
  return (
    <div className=" ">
      <div className=" flex flex-col  m-8  items-center justify-center">
        <Header />
        <Hero />
        <LogoTicker />
      </div>
    </div>
  );
}
