"use client";

import { Check } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "0",
    description: "Great for small startups.",
    buttonText: "Start for Free",
    features: [
      "1 Organization included",
      "1 Project per Organisation",
      "Collaborate with up to 20 team members",
    ],
  },
  {
    name: "Professional",
    price: "5,000",
    description: "Best for growing startups.",
    buttonText: "Purchase for Professional",
    isPopular: true,
    features: [
      "Unlimited Organisations",
      "Unlimited Projects",
      "Unlimited team members",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="relative overflow-hidden w-full  py-12">
      <div className="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="bg-clip-text bg-gradient-to-r from-blue-500 via-blue-200 to-blue-400 opacity-1 pb-2 font-semibold text-balance text-transparent sm:text-2xl md:text-3xl lg:text-5xl leading-none tracking-tighter translate-y-[-1rem] animate-fade-in [--animation-delay:200ms] text-center mb-12">
          Pricing
        </h3>

        <div className="flex justify-around">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`w-[400px] relative flex flex-col rounded-2xl backdrop-blur-sm border border-gray-800 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-800 p-8 shadow-2xl`}
            >
              {tier.isPopular && (
                <div className="absolute top-4 right-4">
                  <button className="px-4 py-1 rounded-full relative bg-gray-800 text-white text-xs hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
                    <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                    <span className="relative z-20">Most Popular</span>
                  </button>
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-base text-white">{tier.name}</h3>
                <div className="mt-4 flex items-baseline text-white">
                  <span className="text-5xl font-medium tracking-tight">
                    ₹{tier.price}
                  </span>
                  {tier.isPopular && (
                    <span className="ml-1 text-sm text-gray-400">
                      For Lifetime
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm text-gray-400">{tier.description}</p>
              </div>

              <button
                className={`mb-8 rounded-lg py-3 px-4 text-sm text-white shadow-sm ${
                  tier.isPopular ? "blue-gradient-btn" : "gray-gradient-btn"
                }`}
              >
                {tier.buttonText}
              </button>

              <div>
                <div className="flex items-center gap-4">
                  <div className="h-[2px] flex-1 bg-gray-600"></div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Features
                  </p>
                  <div className="h-[2px] flex-1 bg-gray-600"></div>
                </div>

                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0 border border-gray-500 rounded-full p-1 bg-gray-950">
                        <Check className="h-3 w-3 text-white" strokeWidth={3} />
                      </div>
                      <p className="ml-3 text-sm text-gray-300">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
