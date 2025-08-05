"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex flex-col justify-center items-center text-center gap-6 px-4 py-20">
      <div>
        <Image
          priority
          alt="Holding traditional Uzbek bread"
          src="/images/gallery/uzbek-bread.avif"
          width="300"
          height="300"
          className="rounded-2xl brightness-90 hover:brightness-100 w-full h-auto"
        />
      </div>
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight max-w-3xl">
        {t("title")}
      </h1>
      <p className="max-w-xl text-muted-foreground text-lg sm:text-xl">
        {t("description")}
      </p>
      <Button
        asChild
        size="lg"
        className="text-lg font-semibold rounded-xl px-8 py-6"
      >
        <Link href="/quiz">{t("start")}</Link>
      </Button>

      <Link
        href="/gallery"
        className="text-muted-foreground text-md hover:underline"
      >
        {t("galleryLink")}
      </Link>
    </div>
  );
}
