"use client";

import Image from "next/image";
import { Check, X } from "lucide-react";
import debugDesk from "@/assets/debug-desk.png";
import jira from "@/assets/jira.png";

const features = [
  {
    category: "FEATURES AND CAPABILITIES",
    items: [
      {
        name: "Task Management",
        debugDesk: "Simple and intuitive",
        jira: "Complex and feature-rich",
        hasDebugDesk: true,
        hasJira: true,
      },
      {
        name: "Learning Curve",
        debugDesk: "Minimal",
        jira: "Steep",
        hasDebugDesk: true,
        hasJira: false,
      },
      {
        name: "Setup Time",
        debugDesk: "< 5 minutes",
        jira: "Hours to days",
        hasDebugDesk: true,
        hasJira: false,
      },
      {
        name: "Team Size Support",
        debugDesk: "Up to 20 (free tier)",
        jira: "Unlimited",
        hasDebugDesk: true,
        hasJira: true,
      },
      {
        name: "Mobile Support",
        debugDesk: "Responsive web app",
        jira: "Native mobile apps",
        hasDebugDesk: true,
        hasJira: true,
      },
    ],
  },
  {
    category: "PRICING",
    items: [
      {
        name: "Free Tier",
        debugDesk: "1 Org, 1 Project",
        jira: "7-day trial only",
        hasDebugDesk: true,
        hasJira: false,
      },
      {
        name: "Paid Plans",
        debugDesk: "₹5,000 lifetime",
        jira: "Per user/month",
        hasDebugDesk: true,
        hasJira: true,
      },
    ],
  },
];

export default function Comparison() {
  return (
    <div className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="bg-clip-text bg-gradient-to-r from-blue-500 via-blue-200 to-blue-400 opacity-1 pb-2 font-semibold text-balance text-transparent sm:text-2xl md:text-3xl lg:text-5xl leading-none tracking-tighter translate-y-[-1rem] animate-fade-in [--animation-delay:200ms] text-center mb-12">
          Why choose us over others?
        </h3>
        <div className="relative overflow-hidden rounded-xl border border-gray-800 bg-black/40 backdrop-blur-sm">
          {/* Header */}
          <div className="grid grid-cols-3 gap-0.5 bg-gray-800/50 p-6">
            <div className="col-span-1"></div>
            <div className="col-span-1 flex flex-col justify-center">
              <div className="relative h-16 w-16 rounded-full p-2">
                <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-blue-600/40 rounded-full blur-xl"></div>
                <Image
                  src={debugDesk.src}
                  alt="Debug Desk"
                  width={100}
                  height={100}
                  className="h-full w-full object-contain z-50"
                />
              </div>
              <h3 className="mt-2 text-lg font-medium text-white">
                Debug Desk
              </h3>
            </div>
            <div className="col-span-1 flex flex-col justify-center">
              <div className="h-16 w-16 rounded-full p-2">
                <Image
                  src={jira.src}
                  alt="JIRA"
                  width={100}
                  height={100}
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="mt-2 text-lg font-medium text-white">Jira</h3>
            </div>
          </div>

          {/* Table Content */}
          <div className="divide-y divide-gray-800">
            {features.map((section) => (
              <div key={section.category}>
                <div className="bg-gray-900/50 px-6 py-3">
                  <h4 className="text-sm font-medium text-white">
                    {section.category}
                  </h4>
                </div>
                <div className="divide-y divide-gray-800/50">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="grid grid-cols-3 gap-0.5 px-6 py-4"
                    >
                      <div className="col-span-1">
                        <p className="text-sm text-gray-300">{item.name}</p>
                      </div>
                      <div className="col-span-1">
                        <div className="flex items-center gap-2">
                          {item.hasDebugDesk ? (
                            <Check
                              className="h-4 w-4 text-green-700 bg-green-700/20 rounded-full p-[2px]"
                              strokeWidth={2}
                            />
                          ) : (
                            <X
                              className="h-5 w-5 text-red-700 bg-red-700 rounded-full p-[2px]"
                              strokeWidth={2}
                            />
                          )}
                          <span className="text-sm text-white">
                            {item.debugDesk}
                          </span>
                        </div>
                      </div>
                      <div className="col-span-1">
                        <div className="flex items-center gap-2">
                          {item.hasJira ? (
                            <Check
                              className="h-4 w-4 text-green-700 bg-green-700/20 rounded-full p-[2px]"
                              strokeWidth={2}
                            />
                          ) : (
                            <X
                              className="h-4 w-4 text-red-700 bg-red-700/20 rounded-full p-[2px]"
                              strokeWidth={2}
                            />
                          )}
                          <span className="text-sm text-gray-400">
                            {item.jira}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
