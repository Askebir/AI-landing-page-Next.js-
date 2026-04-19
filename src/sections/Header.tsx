import LogoIcon from "@/assets/logo.svg";
import MenuIon from "@/assets/icon-menu.svg";
import { Menu } from "lucide-react";
import Button from "@/components/Button";

export const Header = () => {
  return (
    <header className="py-4  border-b border-white/15 md:border-none sticky top-0  z-10">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden "></div>
      <div className="container">
        <div className="flex backdrop-blur justify-between items-center md:border max-w-2xl md:mx-6 mx-auto border-white/15 md:p-2.5 rounded-xl  ">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block "></div>
          <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
            <LogoIcon className="h-8 w-8" />
          </div>
          <div className="hidden md:mx-3 md:block">
            <nav className="flex gap-8 text-sm ">
              <a
                href="#"
                className=" text-white/70  hover:text-white transition"
              >
                Feature
              </a>
              <a
                href="#"
                className=" text-white/70  hover:text-white transition"
              >
                Developer
              </a>
              <a
                href="#"
                className=" text-white/70  hover:text-white transition"
              >
                Pricing
              </a>
              <a
                href="#"
                className=" text-white/70  hover:text-white transition"
              >
                Changellog
              </a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Button>Join waitlist</Button>
            <Menu className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
