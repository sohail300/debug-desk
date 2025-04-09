"use client";

import React, { useRef, useEffect } from "react";
import productImage from "@/assets/product-image.webp";
import Image from "next/image";
import pyramid from "@/assets/pyramid.png";
import tube from "@/assets/tube.png";

const MockupSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    interface ParallaxEntry extends IntersectionObserverEntry {
      isIntersecting: boolean;
    }

    const updateParallax = (entries: ParallaxEntry[]): (() => void) | void => {
      const entry = entries[0];
      if (!entry.isIntersecting) return;

      const updatePosition = (): void => {
        const rect = section.getBoundingClientRect();
        const scrollPercentage =
          1 - (rect.top + rect.height) / (window.innerHeight + rect.height) + 1;
        section.style.setProperty(
          "--scroll-percentage",
          scrollPercentage.toString()
        );
      };

      // Use requestAnimationFrame for smooth updates
      let ticking = false;
      const onScroll = (): void => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            updatePosition();
            ticking = false;
          });
          ticking = true;
        }
      };

      updatePosition();
      window.addEventListener("scroll", onScroll, { passive: true });

      return (): void => window.removeEventListener("scroll", onScroll);
    };

    const observer = new IntersectionObserver(updateParallax, {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden w-full"
      style={
        {
          "--pyramid-move": "calc(var(--scroll-percentage, 0) * -50px)",
          "--tube-move": "calc(var(--scroll-percentage, 0) * -70px)",
        } as React.CSSProperties
      }
    >
      <div className="container mx-auto relative">
        <h3 className="bg-clip-text bg-gradient-to-r from-blue-500 via-blue-200 to-blue-400 opacity-1 pb-2 font-semibold text-balance text-transparent sm:text-2xl md:text-3xl lg:text-5xl leading-none tracking-tighter translate-y-[-1rem] animate-fade-in [--animation-delay:200ms] text-center mb-12">
          Detect. Debug. Deploy.
        </h3>
        <div className="relative w-[70%] m-auto">
          <Image
            src={productImage}
            alt="Product Image"
            width={2408}
            height={1542}
            className="mt-10"
            style={{ color: "transparent" }}
          />
          <Image
            className="hidden md:block absolute -right-36 -top-32"
            src={pyramid}
            alt="Pyramid Image"
            height={262}
            width={262}
            style={{
              transform: `translateY(calc(50.726px + var(--pyramid-move))) translateZ(0)`,
              transition: "transform 0.1s linear",
              willChange: "transform",
            }}
          />
          <Image
            src={tube}
            alt="Tube image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              transform: `translateY(calc(50.726px + var(--tube-move))) translateZ(0)`,
              transition: "transform 0.1s linear",
              willChange: "transform",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default MockupSection;
