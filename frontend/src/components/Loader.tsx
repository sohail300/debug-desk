"use client";

import React from "react";
import { motion } from "framer-motion";

export const GradientSpinner = ({ size = 60 }: { size?: number }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 bg-opacity-80 z-50">
      <motion.div
        className="rounded-full border-4 border-t-transparent"
        style={{
          width: size,
          height: size,
          borderImage: "linear-gradient(to right, #2563eb, #22d3ee) 1",
          borderTopColor: "transparent",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};
