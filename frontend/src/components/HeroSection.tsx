"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import GoogleSVG from "./GoogleSVG";
import { useClerk } from "@clerk/nextjs";

const HeroSection = () => {
  const [loading, setLoading] = useState(false);
  const { redirectToSignIn } = useClerk();

  async function handleSignin() {
    try {
      redirectToSignIn({
        redirectUrl: "/", // Redirects back to home after sign-in
        strategy: "oauth_google", // Correct way to specify OAuth provider
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative container mx-auto py-56 text-center">
      <div className="mt-32 absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-96 bg-blue-500/20 rounded-full blur-3xl" />

      <h1 className="bg-clip-text bg-gradient-to-r from-blue-500 via-blue-200 to-blue-400 opacity-1 pb-2 font-semibold text-5xl text-balance text-transparent sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tighter translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
        Debug Desk
      </h1>

      <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
        Simplified Issue Tracking for Teams
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        {/* <Button
          variant="outline"
          className="flex items-center silver-gradient-btn hover:text-gray-800 z-50"
          onClick={handleSignin}
        >
          <GoogleSVG /> <span>Sign in with Google</span>
        </Button> */}
      </div>
    </section>
  );
};

export default HeroSection;
