"use client";

import {
  galleryImageAttributions,
  quizImageAttributions,
} from "@/lib/attributions";
import Link from "next/link";

export default function AttributionsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-center flex flex-col gap-6">
      <h1 className="text-4xl font-extrabold">Image Attributions</h1>
      <p className="text-muted-foreground text-lg">
        Big thanks to all the amazing photographers who shared these beautiful
        visuals. 🧡
      </p>

      <ul className="list-disc list-inside text-muted-foreground">
        {galleryImageAttributions.map(({ title, url, author, profile }, i) => (
          <li key={i}>
            <a
              href={url}
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>{" "}
            by{" "}
            {profile ? (
              <a
                href={profile}
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {author}
              </a>
            ) : (
              author || "Unknown"
            )}
          </li>
        ))}
      </ul>

      <Link
        href="/gallery"
        className="mt-10 inline-block text-muted-foreground text-sm hover:underline"
      >
        ← Back to gallery
      </Link>

      <h2 className="text-2xl font-bold mt-10">Quiz Image Attributions</h2>
      <ul className="list-disc list-inside text-muted-foreground">
        {quizImageAttributions.map(({ title, url, author, profile }, i) => (
          <li key={i}>
            <a
              href={url}
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>{" "}
            by{" "}
            {profile ? (
              <a
                href={profile}
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {author}
              </a>
            ) : (
              author || "Unknown"
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
