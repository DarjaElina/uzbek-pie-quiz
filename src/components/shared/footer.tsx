import { useTranslations } from "next-intl";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("Footer");

  return (
    <footer className="border-t">
      <div className="p-5 flex-center">
        {currentYear} {t("builtWith")}
      </div>
    </footer>
  );
};

export default Footer;
