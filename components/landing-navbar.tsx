"use client";

import { Nunito } from "next/font/google";
import { GiMaterialsScience } from "react-icons/gi";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Nunito({ subsets: ["latin"] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <GiMaterialsScience size={32} className="text-blue-700" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          AI Waves
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button className="rounded-full bg-blue-600 hover:bg-blue-700">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};
