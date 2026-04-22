"use client";
import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import productImage from "@/assets/product-image.png";
import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animateTarget,
  animate,
} from "motion/react";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];
const FeatureTab = (tab: (typeof tabs)[number]) => {
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);

  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    animate(xPercentage, [0, 100, 100, 0, 0], {
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    });
    animate(yPercentage, [0, 0, 100, 100, 0], {
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    });
  }, []);

  const handleTabHover = () => {
    if (dotLottieRef.current === null) return;
    dotLottieRef.current.seek(0);
    dotLottieRef.current.play();
  };

  return (
    <div
      onMouseEnter={handleTabHover}
      className="border border-white/50 rounded-xl items-center relative  flex lg:flex-1 gap-2.5 p-2.5 r  "
    >
      <motion.div
        style={{
          maskImage: maskImage,
        }}
        className="absolute inset-0 -m-px rounded-xl border-2 border-[#A369ff] [-webkit-mask-image:radial-gradient(80px_80px_at_0%_0%,black,transparent)]  "
      ></motion.div>
      <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center ">
        <DotLottiePlayer
          ref={dotLottieRef}
          src={tab.icon}
          className="h-5 w-5"
          autoplay
        />
      </div>
      <div className="font-medium">{tab.title}</div>
      {tab.isNew && (
        <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold ">
          New
        </div>
      )}
    </div>
  );
};

export const Features = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl font-medium  md:text-6xl text-center tracking-tighter ">
          Elevate your SEO efforts.
        </h2>
        <p className="text-white/70  md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5 ">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO
        </p>
        <div className="mt-5 flex flex-col md:flex-row gap-3 ">
          {tabs.map((tab) => (
            <FeatureTab {...tab} key={tab.title} />
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundImage: `url(${productImage.src})`,
            }}
          ></div>
          {/* <Image src={productImage} alt="Product image" /> */}
        </div>
      </div>
    </section>
  );
};
