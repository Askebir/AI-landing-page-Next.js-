import Button from "@/components/Button";
import starBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";

export const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="container  ">
        <div
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative "
          style={{
            backgroundImage: `url(${starBg.src})`,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(30%_50%_at_50%_46%,black,transparent)] "
            style={{
              backgroundImage: `url(${gridLines.src})`,
            }}
          ></div>
          <div className="relative">
            <h2 className="text-5xl tracking-tighter  font-medium text-center">
              AI driven SEO for everyone.
            </h2>
            <p className="text-center text-lg text-white/70 px-4  mt-5 tracking-tight ">
              Achieve clear, impactful results without the compleity.
            </p>
            <div className="flex justify-center mt-8">
              <Button>Join waitlist</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
