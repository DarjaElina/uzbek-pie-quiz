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

const ResultCard = ({ res }: { res: PieResult | null }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
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
        <Button className="cursor-pointer" onClick={() => setDialogOpen(true)}>
          Share result
        </Button>
        <Button
          className="cursor-pointer"
          variant="outline"
          onClick={() => location.reload()}
        >
          Take the quiz again
        </Button>
      </CardFooter>
      <ShareDialog
        dialogOpen={dialogOpen}
        type={res?.type}
        setDialogOpen={setDialogOpen}
      />
    </Card>
  );
};

export default ResultCard;
