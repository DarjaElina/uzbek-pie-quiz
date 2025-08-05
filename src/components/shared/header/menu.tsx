"use client";
import { Button } from "@/components/ui/button";

import {
  EllipsisVertical,
  FileChartColumn,
  Heart,
  Home,
  Turntable,
} from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ModeToggle from "./mode-toggle";
import { useState } from "react";

const Menu = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <Button asChild variant="ghost">
          <Link href="/">
            <Home /> Home
          </Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/statistics">
            <FileChartColumn /> Statistics
          </Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/gallery">
            <Turntable /> Gallery
          </Link>
        </Button>
        <Button onClick={() => setSheetOpen(false)} asChild variant="ghost">
          <Link href="/attributions">
            <Heart />
            Attributions
          </Link>
        </Button>
        <ModeToggle />
      </nav>
      <nav className="md:hidden">
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start p-6">
            <SheetTitle>Menu</SheetTitle>
            <Button onClick={() => setSheetOpen(false)} asChild variant="ghost">
              <Link href="/">
                <Home /> Home
              </Link>
            </Button>
            <Button onClick={() => setSheetOpen(false)} asChild variant="ghost">
              <Link href="/statictics">
                <FileChartColumn />
                Statistics
              </Link>
            </Button>
            <Button onClick={() => setSheetOpen(false)} asChild variant="ghost">
              <Link href="/gallery">
                <Turntable /> Gallery
              </Link>
            </Button>
            <Button onClick={() => setSheetOpen(false)} asChild variant="ghost">
              <Link href="/attributions">
                <Heart />
                Attributions
              </Link>
            </Button>
            <ModeToggle />
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
