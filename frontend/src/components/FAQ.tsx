"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "01",
    question: "What is Debug Desk?",
    answer:
      "Debug Desk is a powerful project management tool that helps teams organize, track, and manage their work efficiently. It blends an intuitive design with robust features to streamline workflows and boost productivity.",
  },
  {
    id: "02",
    question: "Can I use Debug Desk for free?",
    answer:
      "Yes! You get 1 organization and 1 project in that organization for free.",
  },
  {
    id: "03",
    question: "What if I need more than one project?",
    answer:
      "You'll need to purchase the full version, which costs $50 for lifetime access (price may change soon, so act fast!).",
  },
  {
    id: "04",
    question: "How many team members can I add?",
    answer: "Unlimited. There are no restrictions on team members.",
  },
  {
    id: "05",
    question: "Is Debug Desk suitable for small teams?",
    answer:
      "Debug Desk is scalable and flexible, making it ideal for small teams while also growing alongside your organization.",
  },
  {
    id: "06",
    question: "Can Debug Desk handle multiple projects simultaneously?",
    answer:
      "Yes! Debug Desk is designed for multi-project management, allowing you to seamlessly switch between different projects.",
  },
  {
    id: "07",
    question: "Is there a learning curve for new users?",
    answer:
      "Debug Desk is built for ease of use. With an intuitive interface, a helpful onboarding process, and detailed documentation, new users can get started quickly.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = React.useState<string | null>(null);

  return (
    <div className="w-full max-w-6xl mx-auto space-y-4 pt-12 pb-24">
      <h3 className="bg-clip-text bg-gradient-to-r from-blue-500 via-blue-200 to-blue-400 opacity-1 pb-2 font-semibold text-balance text-transparent sm:text-2xl md:text-3xl lg:text-5xl leading-none tracking-tighter translate-y-[-1rem] animate-fade-in [--animation-delay:200ms] text-center mb-12">
        FAQs
      </h3>
      {faqData.map((item) => (
        <div key={item.id} className="group">
          <div
            className="cursor-pointer"
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
          >
            <div className="flex items-start py-4 gap-16">
              <div className="flex-shrink-0 mt-1">
                <div className="bg-zinc-800 rounded-full py-1 px-3 border border-gray-600 text-sm text-white">
                  {item.id}
                </div>
              </div>
              <div className="flex-1 ml-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-white">
                    {item.question}
                  </h3>
                  <button className="ml-4 text-white">
                    {openId === item.id ? "-" : "+"}
                  </button>
                </div>
                <AnimatePresence>
                  {openId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-2 text-zinc-400">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
