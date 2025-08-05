"use client";

import { Button } from "../ui/button";
import {
  VKShareButton,
  VKIcon,
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { PieType } from "@/generated/prisma";
import { SERVER_URL } from "@/lib/constants";
import { Dispatch, SetStateAction } from "react";

interface DialogProps {
  dialogOpen: boolean;
  setDialogOpen: Dispatch<SetStateAction<boolean>>;
  type: PieType | undefined;
}

const ShareDialog = ({ dialogOpen, setDialogOpen, type }: DialogProps) => {
  const shareUrl = `${SERVER_URL}/share/${type?.toLowerCase()}`;
  console.log(shareUrl);
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Share</DialogTitle>
          <DialogDescription>
            You can share the result with your friends
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center gap-4 mt-4">
          <VKShareButton url={shareUrl}>
            <VKIcon size={40} round />
          </VKShareButton>
          <FacebookShareButton url={shareUrl} hashtag="#PieQuiz">
            <FacebookIcon size={40} round />
          </FacebookShareButton>
          <TelegramShareButton url={shareUrl}>
            <TelegramIcon size={40} round />
          </TelegramShareButton>
          <WhatsappShareButton url={shareUrl} separator=":: ">
            <WhatsappIcon size={40} round />
          </WhatsappShareButton>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ShareDialog;
