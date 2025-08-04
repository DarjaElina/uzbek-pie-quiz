"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function QuizLanding() {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-6 px-4 py-20">
      <Image
        priority
        alt="bread"
        src="/images/uzbek-bread.avif"
        width={300}
        height={300}
        className="rounded-2xl brightness-90 hover:brightness-100"
      />
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight max-w-3xl">
        🥟 Which Uzbek Pie Is Your Soul Pastry?
      </h1>
      <p className="max-w-xl text-muted-foreground text-lg sm:text-xl">
        Ever wondered if you&apos;re a classic meat samsa or a sweet pumpkin
        one? This quiz blends fun, flavor, and personality. Let&apos;s find your
        inner pie!
      </p>
      <Button
        asChild
        size="lg"
        className="text-lg font-semibold rounded-xl px-8 py-6"
      >
        <Link href="/quiz">Start the Quiz</Link>
      </Button>

      <Link
        href="/gallery"
        className="text-muted-foreground text-md hover:underline"
      >
        or browse the inspiration gallery →
      </Link>
    </div>
  );
}
