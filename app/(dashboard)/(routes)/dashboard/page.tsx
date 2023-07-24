"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, Code, Image, MessageSquare, Settings } from "lucide-react";

import { Card } from "@/components/ui/card";

import { cn } from "@/lib/utils";

const tools = [
  {
    label: "Chat",
    icon: MessageSquare,
    href: "/chat",
    color: "text-blue-700",
    bgColor: "bg-blue-700/10",
  },
  {
    label: "Codes",
    icon: Code,
    href: "/code",
    color: "text-emerald-700",
    bgColor: "bg-emerald-700/10",
  },
  {
    label: "Images",
    icon: Image,
    href: "/image",
    color: "text-amber-700",
    bgColor: "bg-amber-700/10",
  },
];

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center ">
          Unlock the power of AI
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400 font-light text-sm md:text-lg text-center">
          Experience the power of AI with us
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 dark:border-neutral-600 dark:bg-neutral-800 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold ">{tool.label}</div>
            </div>
            <ArrowRight size={20} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
