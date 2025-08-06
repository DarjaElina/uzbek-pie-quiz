"use client";

import { PieResult } from "@/types/quiz.types";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import ShareDialog from "./share-in-social";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const ResultCard = ({
  res,
  mode = "result",
}: {
  res: PieResult | null;
  mode?: "result" | "share";
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const t = useTranslations("ResultPage");

  const shareTitle = res?.name ? t("iAm", { result: res.name }) : "";
  const shareText = res?.personality || "";
  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-2xl">
          {mode === "result" && res?.name
            ? t("youAre", { result: res.name })
            : mode === "share" && res?.name
              ? `${t("iAm", { result: res.name })}!`
              : ""}
        </CardTitle>
        <CardDescription className="text-center text-xl">
          {res?.personality}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col items-center gap-4">
        {res?.imageUrl && (
          <Image
            priority
            src={res.imageUrl}
            alt={res.name ?? "Uzbek samsa"}
            width={500}
            height={500}
            className="rounded-xl shadow-md"
          />
        )}
        <p className="text-center text-base">
          {mode !== "share" && res?.description}
        </p>
      </CardContent>

      <CardFooter className="flex flex-col items-center gap-3 w-full">
        {mode === "result" ? (
          <>
            <Button
              className="w-full sm:w-auto"
              onClick={() => setDialogOpen(true)}
            >
              {t("shareResult")}
            </Button>
            <Button
              className="w-full sm:w-auto"
              variant="outline"
              onClick={() => location.reload()}
            >
              {t("takeQuizAgain")}
            </Button>
          </>
        ) : (
          <Button asChild>
            <Link href="/quiz">{t("tryItYourself")}</Link>
          </Button>
        )}
      </CardFooter>
      <ShareDialog
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        type={res?.type}
        title={shareTitle}
        text={shareText}
      />
    </Card>
  );
};

export default ResultCard;
