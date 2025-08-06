"use server";

import ResultCard from "@/components/shared/result-card";
import { PieType } from "@/generated/prisma";
import { getMetaDataByType } from "@/lib/utils";
import { PieTypeEnum } from "@/lib/validators";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocalizedResults } from "@/lib/utils";
import { getTranslations } from "next-intl/server";

type SharePageProps = {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: SharePageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const pieSlug = slug.toUpperCase();
  const t = await getTranslations({ locale, namespace: "Metadata" });

  if (!PieTypeEnum.options.includes(pieSlug as PieType)) {
    return {
      title: t("title"),
      description: t("description"),
    };
  }

  return getMetaDataByType(pieSlug as PieType, locale);
}

export default async function SharePage({ params }: SharePageProps) {
  const { slug } = await params;
  const results = await getLocalizedResults();

  const res = results.find((r) => r.type === slug.toUpperCase());

  if (!res) notFound();

  return (
    <div className="m-auto max-w-3xl py-20">
      <ResultCard res={res} mode="share" />
    </div>
  );
}
