import Image from "next/image";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Contact from "./contact";
import Project from "./project";


const VERTICAL_LINES = [4.5, 35, 65, 95.5];
const HORIZONTAL_LINES = [9, 67];
const PLUS_MARKERS: [number, number][] = [
  [4.5, 9], [35, 9], [65, 9], [95.5, 9],
  [4.5, 37],
  [4.5, 67], [35, 67], [65, 67], [95.5, 67],
  [4.5, 97], [95.5, 97],
];

const NAME = "GRACE";

export default function Home() {
  return (
    <>
    <Navbar/>
    <main
      className="relative min-h-screen overflow-hidden bg-[#ef5526] text-white
                 [background-image:radial-gradient(ellipse_at_center,#f65f31_0%,#ef5526_55%,#c8430f_100%)]"
    >
      {/* Grid lines + "+" markers */}
      <div className="pointer-events-none absolute inset-0 z-[4]" aria-hidden="true">
        {VERTICAL_LINES.map((x) => (
          <span key={`v-${x}`} className="absolute inset-y-0 w-px bg-white/20" style={{ left: `${x}%` }} />
        ))}
        {HORIZONTAL_LINES.map((y) => (
          <span key={`h-${y}`} className="absolute inset-x-0 h-px bg-white/20" style={{ top: `${y}%` }} />
        ))}
        {PLUS_MARKERS.map(([x, y]) => (
          <span
            key={`p-${x}-${y}`}
            className="absolute -translate-x-1/2 -translate-y-1/2 text-lg leading-none text-white/80"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            +
          </span>
        ))}
      </div>

      {/* Large faded name behind the photo */}
      <h2
        className="absolute left-[3.5%] top-[11%] z-[2] select-none whitespace-nowrap text-[19vw] font-black leading-none tracking-tighter text-white/[0.12]"
        aria-hidden="true"
      >
        {NAME}
      </h2>

      {/* Hero photo: put your image in /public/my_pic.jpeg */}
      <div
        className="absolute bottom-0 left-1/2 z-[3] h-[72%] w-[78%] max-w-[560px] -translate-x-1/2
                   md:left-[47%] md:h-[90%] md:w-[44%]
                   [mask-image:linear-gradient(to_bottom,#000_72%,transparent_100%)]"
      >
        <Image
          src="/mypic.png"
          alt="Portrait"
          fill
          priority
          sizes="(min-width: 768px) 44vw, 78vw"
          className="rounded-t-[999px] object-cover object-top"
        />
        <div className="absolute inset-0 rounded-t-[999px] bg-orange-500/20 mix-blend-multiply" />
      </div>

      {/* Tagline */}
      <p
        className="absolute left-[7%] top-[13%] z-[5] max-w-[230px] indent-5 text-[11px] font-medium uppercase leading-snug tracking-wide
                   sm:text-sm md:left-[4.5%] md:top-[36%]"
      >
        I design user-centered digital experiences that are simple smart and impactful
      </p>

      {/* Year */}
      <span className="absolute bottom-[17%] left-[4.5%] z-[6] text-sm font-semibold md:bottom-[24%] md:text-base">
        ©2026
      </span>

      {/* Big name */}
      <h1 className="absolute bottom-[5%] left-[4.2%] z-[6] text-[17vw] font-black leading-[0.8] tracking-tighter md:text-[12vw]">
        {NAME}
      </h1>
    </main>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  );
}
