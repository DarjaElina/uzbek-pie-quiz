import Image from "next/image";
import { uzbekImages } from "@/lib/constants/images";
import Link from "next/link";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  const t = useTranslations("GalleryPage");
  return (
    <div className="flex flex-col justify-center items-center text-center gap-6 px-4 py-20">
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight max-w-3xl">
        {t("title")}
      </h1>
      <p className="max-w-2xl text-muted-foreground text-lg sm:text-xl">
        {t("description1")}
      </p>
      <p className="max-w-2xl text-muted-foreground text-lg sm:text-xl">
        {" "}
        {t("description2")}
      </p>

      <Link
        href="/attributions"
        className="text-muted-foreground text-md hover:underline"
      >
        {t("seeAttributions")}
      </Link>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {uzbekImages.map((img, i) => (
          <div key={i} className="mb-4 break-inside-avoid">
            <Image
              priority
              alt={img.alt}
              src={img.src}
              width={300}
              height={300}
              className="w-full h-auto rounded-xl shadow-lg hover:scale-105 hover:brightness-110 transition-all"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
