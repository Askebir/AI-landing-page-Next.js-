"use client";
import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import quantrumLogo from "@/assets/logo-quantum.png";
import pulseLogo from "@/assets/logo-pulse.png";
import echoLogo from "@/assets/logo-echo.png";
import { motion } from "motion/react";

export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5 ">
          <div
            className="flex    md:flex-nono overflow-hidden 
"
          >
            <h2>
              Trust by top <br /> innovative teams
            </h2>
          </div>
          <div className=" flex flex-1 overflow-hidden   [mask-image:linear-gradient(to_right,black_90%,transparent )] ">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className="flex  flex-none gap-5 -translate-x-1/2 [mask-image:linear-gradient(to_left,black_90%,transparent)]  "
            >
              {[
                acmeLogo,
                apexLogo,
                celestialLogo,
                quantrumLogo,
                pulseLogo,
                echoLogo,
                acmeLogo,
                apexLogo,
                celestialLogo,
                quantrumLogo,
                pulseLogo,
                echoLogo,
              ].map((logo) => (
                <div className="pr-10">
                  <img src={logo.src} key={logo.src} className="h-6 w-auto " />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
