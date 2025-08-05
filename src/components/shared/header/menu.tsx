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
import LangToggle from "./lang-toggle";
import { useTranslations } from "next-intl";

const Menu = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const t = useTranslations("Header");
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex">
        <Button asChild variant="ghost">
          <Link href="/">
            <Home /> {t("home")}
          </Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/statistics">
            <FileChartColumn /> {t("statistics")}
          </Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/gallery">
            <Turntable /> {t("gallery")}
          </Link>
        </Button>
        <Button onClick={() => setSheetOpen(false)} asChild variant="ghost">
          <Link href="/attributions">
            <Heart />
            {t("attributions")}
          </Link>
        </Button>
        <ModeToggle />
        <LangToggle />
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
                <Home /> {t("home")}
              </Link>
            </Button>
            <Button onClick={() => setSheetOpen(false)} asChild variant="ghost">
              <Link href="/statictics">
                <FileChartColumn />
                {t("statistics")}
              </Link>
            </Button>
            <Button onClick={() => setSheetOpen(false)} asChild variant="ghost">
              <Link href="/gallery">
                <Turntable /> {t("gallery")}
              </Link>
            </Button>
            <Button onClick={() => setSheetOpen(false)} asChild variant="ghost">
              <Link href="/attributions">
                <Heart />
                {t("attributions")}
              </Link>
            </Button>
            <ModeToggle />
            <LangToggle />
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
