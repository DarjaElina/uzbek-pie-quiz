"use client";

import { Button } from "../ui/button";
import {
  VKShareButton,
  VKIcon,
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
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
import { SERVER_URL } from "@/lib/constants";
import { useLocale, useTranslations } from "next-intl";

interface DialogProps {
  dialogOpen: boolean;
  setDialogOpen: (open: boolean) => void;
  type: string | undefined;
  title: string;
  text: string;
}

const ShareDialog = ({ dialogOpen, setDialogOpen, type }: DialogProps) => {
  const locale = useLocale();
  const shareUrl = `${SERVER_URL}/${locale}/share/${type?.toLowerCase()}`;
  const t = useTranslations("ResultPage");
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t("shareResult")}</DialogTitle>
          <DialogDescription>{t("shareWith")}</DialogDescription>
        </DialogHeader>
        <div className="flex justify-center gap-4 mt-4 flex-wrap">
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
          <TwitterShareButton
            url={shareUrl}
            title="Check out my Uzbek Pie result!"
          >
            <TwitterIcon size={40} round />
          </TwitterShareButton>
          <LinkedinShareButton
            url={shareUrl}
            summary="Discover your Uzbek Pie personality!"
          >
            <LinkedinIcon size={40} round />
          </LinkedinShareButton>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">{t("cancel")}</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ShareDialog;
