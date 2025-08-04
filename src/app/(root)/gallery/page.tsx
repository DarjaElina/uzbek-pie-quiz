"use client";

import Image from "next/image";
import { uzbekImages } from "@/db/images";
import Link from "next/link";

export default function GalleryPage() {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-6 px-4 py-20">
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight max-w-3xl">
        Inspiration gallery
      </h1>
      <p className="max-w-2xl text-muted-foreground text-lg sm:text-xl">
        I wanted to include these pictures here, because they are full of sun,
        summer, smell of peaches, spices and street traditional food. I hope
        they will bring sparkle of joy to your soul, as they brought it to mine.
      </p>
      <p className="max-w-2xl text-muted-foreground text-lg sm:text-xl">
        {" "}
        What started as a fun quiz turned into a journey into the warmth and
        richness of Uzbek culture—and I&apos;m so happy to share that with you.
      </p>

      <Link
        href="/attributions"
        className="text-muted-foreground text-md hover:underline"
      >
        🤎 See the attributions
      </Link>
      <div className="columns-2 sm:columns-3 md:columns-4 gap-4">
        {uzbekImages.map((img, i) => (
          <div key={i} className="mb-4 break-inside-avoid">
            <Image
              priority
              {...img}
              className="w-full rounded-xl shadow-lg hover:scale-105 hover:brightness-110 transition-all"
              alt={`Uzbek pie ${i}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
