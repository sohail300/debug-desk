"use client";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import glocybs from "@/assets/companies/glocybs.png";
import sociolinq from "@/assets/companies/sociolinq.png";
import streeya from "@/assets/companies/streeya.png";
import webyapar from "@/assets/companies/webyapar.png";

export default function CompanyCarousel() {
  console.log(glocybs.src);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  const companies = [
    {
      name: "Glocybs",
      src: glocybs,
    },
    {
      name: "Sociolinq",
      src: sociolinq,
    },
    {
      name: "Streeya",
      src: streeya,
    },
    {
      name: "Webyapar",
      src: webyapar,
    },
  ];

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <section className="py-24 relative overflow-hidden w-full">
      <div className="container mx-auto relative">
        <h3 className="bg-clip-text bg-gradient-to-r from-blue-500 via-blue-200 to-blue-400 opacity-1 pb-2 font-semibold text-balance text-transparent sm:text-2xl md:text-3xl lg:text-5xl leading-none tracking-tighter translate-y-[-1rem] animate-fade-in [--animation-delay:200ms] text-center mb-12">
          Trusted by Startups
        </h3>

        <div className="embla w-full" ref={emblaRef}>
          <div className="embla__container">
            {companies.map((company) => (
              <Image
                className="h-6 sm:h-12 md:h-20 w-auto object-contain embla__slide"
                key={company.name}
                src={company?.src}
                alt={`${company.name} Logo`}
                width={1000}
                height={40}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
