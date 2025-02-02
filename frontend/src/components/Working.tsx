"use client";
import { motion } from "framer-motion";
import { Building, FolderKanban, Bug, Rocket, Users } from "lucide-react";

const steps = [
  {
    icon: Building,
    title: "Create Your Organization",
    description: "Set up your company profile",
  },
  {
    icon: FolderKanban,
    title: "Set Up Your Project",
    description: "Define project scope and goals",
  },
  {
    icon: Users,
    title: "Invite Team Members",
    description: "Collaborate with your team",
  },
  {
    icon: Bug,
    title: "Start Tracking Issues",
    description: "Log and manage bugs efficiently",
  },
  {
    icon: Rocket,
    title: "Streamline Workflow",
    description: "Automate and optimize processes",
  },
];

const Working = () => {
  return (
    <section className="py-24 relative overflow-hidden w-full">
      <div className="container mx-auto px-4">
        <h3 className="bg-clip-text bg-gradient-to-r from-blue-500 via-blue-200 to-blue-400 opacity-1 pb-2 font-semibold text-balance text-transparent sm:text-2xl md:text-3xl lg:text-5xl leading-none tracking-tighter translate-y-[-1rem] animate-fade-in [--animation-delay:200ms] text-center mb-12">
          How it works
        </h3>
        <div className="relative max-w-4xl mx-auto">
          {/* Central timeline */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex items-center mb-24 last:mb-0 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } max-w-[calc(50%-2rem)]`}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-full opacity-30 blur-md"></div>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center shadow-lg relative z-10">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div
                  className={`mx-6 ${
                    index % 2 === 0 ? "text-left" : "text-right"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Working;
