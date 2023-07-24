"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiMaterialsScience } from "react-icons/gi";
import React from "react";
import { Code, Image, LayoutDashboard, MessageSquare } from "lucide-react";

import { cn } from "@/lib/utils";

import { ThemeToggle } from "@/components/theme-toggle";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-violet-700",
  },
  {
    label: "Chats",
    icon: MessageSquare,
    href: "/chat",
    color: "text-blue-700",
  },
  {
    label: "Codes",
    icon: Code,
    href: "/code",
    color: "text-emerald-700",
  },
  {
    label: "Images",
    icon: Image,
    href: "/image",
    color: "text-amber-700",
  },
];

const SideBar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4  h-full bg-stone-900 text-white">
      <div className="px-3 py-2 flex-1 flex flex-col">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative mr-4">
            <GiMaterialsScience size={32} className="text-blue-700" />
          </div>
          <h1 className={cn("text-2xl font-bold")}>AI Waves</h1>
        </Link>

        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-500"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default SideBar;
