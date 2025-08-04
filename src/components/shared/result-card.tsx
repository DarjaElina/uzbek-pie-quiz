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

const ResultCard = ({ res }: { res: PieResult | null }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-2xl">
          You are a {res?.name}
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
            alt={res.name}
            width={500}
            height={500}
            className="rounded-xl shadow-md"
          />
        )}
        <p className="text-center text-base">{res?.description}</p>
      </CardContent>

      <CardFooter className="flex flex-col gap-2 items-center">
        <p className="text-muted-foreground text-sm">
          Share this with your friend or…
        </p>
        <Button className="cursor-pointer" onClick={() => location.reload()}>
          Take the quiz again!
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResultCard;
