import Heading from "@/components/common/Heading";
import Image from "next/image";
import { MdOutlineFileDownload } from "react-icons/md";
import type { StaticImageData } from "next/image";
import profileImg from "@/public/images/abir.jpeg";
import codecloudLogo from "@/public/svg/codeclouds_colour.svg";
import upworkLogo from "@/public/images/upwork.png";
import realtyLogo from "@/public/images/realty.png";
import venkelLogo from "@/public/images/venkel.webp";
import agrudLogo from "@/public/images/agrud.png";

export default function Home() {
  const BrandBlock = ({
    imgSrc,
    filter = false,
  }: {
    imgSrc: StaticImageData;
    filter?: boolean;
  }) => {
    return (
      <div className="flex gap-4 items-center flex-shrink-0 p-5 h-40">
        {filter && (
          <Image
            src={imgSrc}
            alt="logo"
            height={80}
            width={160}
            className="object-contain"
            style={{
              filter:
                "grayscale(100%) brightness(0) invert(0.5) sepia(1) saturate(0) hue-rotate(180deg)",
            }}
          />
        )}
        {!filter && (
          <Image
            src={imgSrc}
            alt="logo"
            height={80}
            width={160}
            className="object-contain"
          />
        )}
      </div>
    );
  };

  return (
    <main className="dotted-background">
      <section className="min-w-screen">
        <header className="hidden flex justify-between items-center p-4 bg-black dotted-background">
          <a
            href="mailto:hello@kawsar.design"
            className="flex items-center gap-2"
          >
            <svg className="w-4 h-4"></svg>
            hello@kawsar.design
          </a>

          <nav className="flex gap-4">
            <a href="#">LinkedIn</a>
            <span>/</span>
            <a href="#">Dribbble</a>
            <span>/</span>
            <a href="#">Instagram</a>
          </nav>
        </header>

        <div className="container py-12 px-6 flex flex-col items-center">
          <div className="rounded-full">
            <Image
              src={profileImg}
              height={150}
              width={150}
              alt="profile-pic"
              priority
              className="rounded-full"
            />
          </div>
          <div className="mt-6 mb-6">
            <Heading variant="h5">Hi, I&#39;m Abir 👋</Heading>
          </div>
          <div className="text-center mt-6 mb-6">
            <Heading className="mb-2 text-white fade-text" variant="h2">
              Building digital
            </Heading>
            <Heading variant="h2" className="mb-2 text-gray-500 fade-text">
              products, brands, and
            </Heading>
            <Heading variant="h2" className="text-white fade-text">
              app experiences.
            </Heading>
          </div>
          <div className="mt-6 mb-6 px-16 py-4 bg-[#151515] text-white border border-gray-800 flex gap-2 items-center justify-center">
            <span>Resume</span>
            <MdOutlineFileDownload />
          </div>
        </div>
      </section>
      <section className="bg-secondary border border-gray-800">
        <div className="container py-12 px-6">
          <div className="max-w-[400px] overflow-x-auto">
            <div className="flex gap-4 w-max">
              <BrandBlock imgSrc={codecloudLogo} filter />
              <BrandBlock imgSrc={upworkLogo} filter />
              <BrandBlock imgSrc={realtyLogo} filter />
              <BrandBlock imgSrc={venkelLogo} filter />
              <BrandBlock imgSrc={agrudLogo} filter />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
