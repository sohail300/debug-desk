"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  User,
  BarChart2,
  AlertCircle,
  Briefcase,
  FolderKanban,
} from "lucide-react";

const sidebarItems = [
  { icon: User, label: "Profile", href: "/profile" },
  { icon: BarChart2, label: "Analytics", href: "/analytics" },
  { icon: AlertCircle, label: "Issues", href: "/issues" },
  { icon: Briefcase, label: "Organizations", href: "/organizations" },
  { icon: FolderKanban, label: "Projects", href: "/projects" },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.div
      className=" fixed left-0 top-0 bottom-0 z-40 flex flex-col bg-white shadow-xl m-2 rounded-lg overflow-hidden"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      animate={{
        width: isOpen ? "240px" : "80px",
      }}
    >
      <div className="flex flex-col space-y-2 py-4 px-2 ">
        {sidebarItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <motion.div
              className={` flex items-center justify-center sm:justify-start px-3 py-3 rounded-lg transition-colors relative ${
                pathname === item.href
                  ? "text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {true && (
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2563eb] to-[#22d3ee] rounded-lg"
                  layoutId="activeIndicator"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
              <item.icon
                className={`h-6 w-6 ${
                  pathname === item.href ? "text-blue-600" : "text-gray-700"
                }`}
              />
              <motion.span
                className="ml-3 font-medium hidden sm:inline-block"
                animate={{
                  opacity: isOpen ? 1 : 0,
                  width: isOpen ? "auto" : 0,
                }}
              >
                {item.label}
              </motion.span>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
