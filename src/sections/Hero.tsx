"use client";
import Button from "@/components/Button";
import starsBg from "@/assets/stars.png";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPostionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <motion.section
      ref={sectionRef}
      className="h-[492px]  flex  items-center md:h-[600px] m-5 overflow-hidden relative "
      style={{
        backgroundImage: `url(${starsBg.src})`,
        backgroundPositionY,
      }}
      animate={{
        backgroundPositionX: starsBg.width,
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 120,
      }}
    >
      <div
        className="
  absolute md:h-64 sm:h-48 md:w-64 sm:w-48  rounded-full
  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2

  bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.9)_0%,rgba(184,148,255,0.6)_30%,rgba(90,40,180,0.9)_65%,rgba(30,10,80,1)_100%)]
  
  shadow-[-30px_-30px_60px_rgba(255,255,255,0.25)]
  border border-white/20
"
      ></div>
      {/* first rings */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
        className="absolute h-[220px]  w-[220px]  md:w-[480px] md:h-[480px]   border rounded-full border-white opacity-20   top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 "
      >
        <div className="absolute  h-2 w-2  left-0 bg-white rounded-full  top-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
        <div className="absolute  h-2 w-2  left-1/2 bg-white rounded-full  top-0 -translate-x-1/2 -translate-y-1/2 "></div>
        <div className="absolute  h-5 w-5 border border-white  left-full  rounded-full  top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center ">
          <div className="h-2 w-2 bg-white rounded-full "> </div>
        </div>
      </motion.div>
      {/* 2nd ring */}
      <motion.div
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        className="absolute h-[250px] w-[250px]  md:w-[580px] md:h-[580px]  rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   border-dashed "
      >
        {" "}
      </motion.div>
      {/* //3rd ring */}
      <motion.div
        animate={{
          rotate: "1turn",
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        className="absolute  h-[300px] w-[300px]  md:w-[680px] md:h-[680px]  rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   border-dashed "
      >
        {" "}
      </motion.div>
      <div className="container mt-16 relative ">
        <h1
          className="text-6xl font-semibold tracking-tighter 
   bg-gradient-to-br from-white via-white to-purple-700 
  text-transparent bg-clip-text md:text-[168px] sm:text-[90px] text-center"
        >
          AI SEO
        </h1>
        <p className="text-sm  text-white/70 mt-5 md:text-xl max-w-xl mx-auto md:leading=none text-center">
          your site's visibility effortlessly with AI, where smart technology
          meets user friendly SEO tools.
        </p>

        <div className=" flex justify-center mt-5">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </motion.section>
  );
};
