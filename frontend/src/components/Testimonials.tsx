"use client";

import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import abhishek from "@/assets/testimonials/abhishek.jpg";
import arindam from "@/assets/testimonials/arindam.jpg";
import abhinav from "@/assets/testimonials/abhinav.jpg";
import hitesh from "@/assets/testimonials/hitesh.jpg";
import rownak from "@/assets/testimonials/rownak.jpg";
import shivansh from "@/assets/testimonials/shivansh.jpg";
import bharti from "@/assets/testimonials/bharti.jpg";

const testimonialData = [
  {
    id: 1,
    content: "Amazing platform! Makes issue tracking so much easier.",
    name: "Arindam",
    post: "Co-Director@SociolinQ",
    avatar: arindam,
  },
  {
    id: 2,
    content: "Clean UI and powerful features. Highly recommended!",
    name: "Abhishek",
    post: "Co-Director@SociolinQ",
    avatar: abhishek,
  },
  {
    id: 3,
    content: "Seamless workflow and great team collaboration tools.",
    name: "Abhinav",
    post: "Developer@Webyapar",
    avatar: abhinav,
  },
  {
    id: 4,
    content: "Smooth experience, intuitive design, and great analytics.",
    name: "Shivansh",
    post: "CEO@Glocybs",
    avatar: shivansh,
  },
  {
    id: 5,
    content: "Great customer support and easy to use. Highly recommended!",
    name: "Hitesh",
    post: "Founder@College Charcha",
    avatar: hitesh,
  },
  {
    id: 6,
    content: "Helped us streamline our workflow and improve productivity.",
    name: "Rownak",
    post: "Founder@Logitrix",
    avatar: rownak,
  },
  {
    id: 7,
    content: "A must-have for teams! Helps streamline issue management.",
    name: "Bharti",
    post: "Founder@Streeya",
    avatar: bharti,
  },
];

interface TestimonialCardProps {
  content: string;
  name: string;
  avatar: string | StaticImageData;
  post: string;
}

const TestimonialCard = React.memo(
  ({ content, name, avatar, post }: TestimonialCardProps) => (
    <motion.div
      className="card bg-white p-0 rounded-lg shadow-md"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <p className="text-gray-700 mb-4">{content}</p>
      <div className="flex items-center gap-2">
        <Image
          alt={name}
          src={avatar || "/placeholder.svg"}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <div className="font-medium tracking-tight leading-5 text-gray-900">
            {name}
          </div>
          <div className="font-medium tracking-tight leading-5 text-gray-500">
            {post}
          </div>
        </div>
      </div>
    </motion.div>
  )
);

TestimonialCard.displayName = "TestimonialCard";

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden w-full">
      <div className="container mx-auto relative">
        <h3 className="bg-clip-text bg-gradient-to-r from-blue-500 via-blue-200 to-blue-400 opacity-1 pb-2 font-semibold text-balance text-transparent sm:text-2xl md:text-3xl lg:text-5xl leading-none tracking-tighter translate-y-[-1rem] animate-fade-in [--animation-delay:200ms] text-center mb-12">
          What our users say
        </h3>
        <div className="flex justify-center gap-16 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          {/* Mobile Column */}
          <motion.div
            className="flex flex-col gap-6 pb-6"
            animate={{
              y: ["-80%", "0%"],
            }}
            transition={{
              y: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 10,
                ease: "linear",
              },
            }}
          >
            {testimonialData.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </motion.div>

          {/* Tablet Column */}
          <motion.div
            className="hidden md:flex flex-col gap-6 pb-6"
            animate={{
              y: ["0%", "-80%"],
            }}
            transition={{
              y: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 15,
                ease: "linear",
              },
            }}
          >
            {testimonialData.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
