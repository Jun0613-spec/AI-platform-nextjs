"use client";

import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SideBar from "@/components/sidebar";

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button className="md:hidden" variant="ghost" size="icon">
          <Menu className="text-black dark:text-neutral-300" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 text-neutral-300">
        <SideBar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
