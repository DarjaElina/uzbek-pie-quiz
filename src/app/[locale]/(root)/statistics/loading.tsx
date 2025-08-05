import { useTranslations } from "next-intl";
const LoadingPage = () => {
  const t = useTranslations("Loading");
  return (
    <div className="flex flex-col justify-center items-center h-[60vh] text-center text-2xl font-medium gap-4">
      <span className="animate-spin text-3xl">🥟</span>
      <p>{t("loading")}</p>
    </div>
  );
};

export default LoadingPage;
