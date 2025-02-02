"use client";

import Link from "next/link";
// import { useAuth } from '@clerk/nextjs'
import { Button } from "@/components/ui/button";
import { LogOutIcon, SquareKanban } from "lucide-react";
import GoogleSVG from "./GoogleSVG";

export function LandingNavbar() {
  //   const { isSignedIn, signOut } = useAuth()
  const isSignedIn = false;

  return (
    <nav className="flex items-center justify-end p-4 bg-transparent fixed top-0 w-full z-50">
      <div className="">
        {isSignedIn ? (
          <div className="flex items-center space-x-8">
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="blue-gradient-btn hover:text-white"
              >
                <SquareKanban className="h-4 w-8" />
                Dashboard
              </Button>
            </Link>
            <Button
              // onClick={() => signOut()}
              variant="outline"
              className="silver-gradient-btn hover:text-gray-800"
            >
              <LogOutIcon className="h-4 w-8 " />
              Logout
            </Button>
          </div>
        ) : (
          <Button
            variant="outline"
            className="flex items-center silver-gradient-btn hover:text-gray-800"
          >
            <GoogleSVG /> <span>Sign in</span>
          </Button>
        )}
      </div>
    </nav>
  );
}
