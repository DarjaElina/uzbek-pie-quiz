import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
  galleryAttributions,
  quizAttributions,
} from "@/lib/constants/attributions";

export default function AttributionsPage() {
  const t = useTranslations("AttributionsPage");
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-center flex flex-col gap-6">
      <h1 className="text-4xl font-extrabold">{t("title")}</h1>
      <p className="text-muted-foreground text-lg">{t("thanks")}</p>

      <ul className="list-disc list-inside text-muted-foreground">
        {galleryAttributions.map(({ title, url, author, profile }, i) => (
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
            <a
              href={profile}
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {author}
            </a>
          </li>
        ))}
      </ul>

      <Link
        href="/gallery"
        className="mt-10 inline-block text-muted-foreground text-m hover:underline"
      >
        ← {t("backToGallery")}
      </Link>

      <h2 className="text-2xl font-bold mt-10">Quiz Image Attributions</h2>
      <ul className="list-disc list-inside text-muted-foreground">
        {quizAttributions.map(({ title, url, author, profile }, i) => (
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

      <h2 className="text-2xl font-bold mt-10">Favicon</h2>
      <a
        href="https://www.flaticon.com/free-icons/empanada"
        title="empanada icons"
        className="text-muted-foreground underline"
      >
        Empanada icons created by Freepik - Flaticon
      </a>
    </div>
  );
}
