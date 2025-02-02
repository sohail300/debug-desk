import React from "react";
import { Twitter, Linkedin, Github } from "lucide-react";
import { getCurrYear } from "@/app/utils/getCurrYear";
import Image from "next/image";
import debugDesk from "@/assets/debug-desk.png";

const Footer = () => {
  return (
    <footer className="pb-8 relative overflow-hidden w-full">
      <div className="container mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="my-8">
          <div className="relative h-14 w-14 rounded-full p-1">
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
        </div>

        {/* Navigation Links */}
        <nav className="mb-8">
          <ul className="flex gap-8 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Customers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Help
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Careers
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Links */}
        <div className="flex gap-6 mb-8 text-gray-400">
          <a
            href="https://github.com/sohail300"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/md-sohail-ansari-b51201278/"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://x.com/sohail_twts"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            <Twitter size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400">
          © {getCurrYear()}, Debug Desk. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
