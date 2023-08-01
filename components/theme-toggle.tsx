import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="flex justify-center items-center gap-2 p-4">
      <Button
        onClick={() => setTheme("light")}
        className="w-full h-full bg-stone-700 text-white hover:bg-stone-700/50 gap-1"
      >
        <Sun size={18} />
        Light
      </Button>

      <Button
        onClick={() => setTheme("dark")}
        className=" w-full h-full
         bg-stone-700 text-white hover:bg-stone-700/50 gap-1"
      >
        <Moon size={18} />
        Dark
      </Button>
    </div>
  );
}
