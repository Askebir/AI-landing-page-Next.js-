import LogoIcon from "@/assets/logo.svg";
import MenuIon from "@/assets/icon-menu.svg"
import { Menu } from "lucide-react";


export const Header = () => {
  return <header className="py-4  border-b border-white/15 md:border-none " > 
    <div className="container" >
      <div className="flex justify-between items-center md:border max-w-2xl mx-auto border-white/15 md:p-2.5 rounded-xl  " >
        <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15" >
          <LogoIcon className="h-8 w-8" />
        </div>
      <div className="hidden md:block" >
      <nav className="flex gap-8 text-sm " >
          <a href="#" className=" text-white/70  hover:text-white transition" >Feature</a>
          <a href="#" className=" text-white/70  hover:text-white transition"  >Developer</a>
          <a href="#" className=" text-white/70  hover:text-white transition"  >Pricing</a>
          <a href="#" className=" text-white/70  hover:text-white transition"  >Changellog</a>
        </nav>

      </div>
        <div className="flex gap-4 items-center" >
          <button className="relative py-2 px-3 rounded-lg font-medium te
          xt-sm bg-gradient-to-b from-[#190d2e] to-[4a2208q] shadow-[0px_0px_12px_#8c54ff] "  >
            <div className="absoute inset-0" >
             <div className=" rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom, black, transparent)] " ></div>
             <div className=" rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top, black, transparent)] " ></div>
             <div className="absolute inset-0 shadow-[0_0_10px_rgb(140, 69,225,.7)_inset] rounded-lg" ></div>
            </div>
          
            Join waitlist</button>
          <Menu className="md:hidden" />
    
        </div>

      </div>
    </div>
  </header>;
};
