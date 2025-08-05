"use client";
import Link from "next/link";
import Menu from "./menu";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("Header");
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <span className="font-bold text-2xl ml-3">{t("name")}</span>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
