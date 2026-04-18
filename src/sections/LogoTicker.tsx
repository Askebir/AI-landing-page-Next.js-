import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import quantrumLogo from "@/assets/logo-quantum.png";
import pulseLogo from "@/assets/logo-pulse.png";
import echoLogo from "@/assets/logo-echo.png";

export const LogoTicker = () => {
  return (
    <section className="container">
      <div>
        <h2>Trust by top innovative teams</h2>
        <div className="flex ">
          {[
            acmeLogo,
            apexLogo,
            celestialLogo,
            quantrumLogo,
            pulseLogo,
            echoLogo,
          ].map((logo) => (
            <img src={logo.src} key={logo.src} className="h-6 w-auto " />
          ))}
        </div>
      </div>
    </section>
  );
};
