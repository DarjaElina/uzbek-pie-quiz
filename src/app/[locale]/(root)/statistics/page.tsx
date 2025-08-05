import Statistics from "@/components/shared/statistics";
import { getStatisticData } from "@/lib/actions/statistic.actions";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Statistics",
};
const StatisticPage = async () => {
  const statisticData = await getStatisticData();
  const t = await getTranslations("StatisticsPage");

  return (
    <div className="px-4 py-20">
      <h1 className="text-4xl sm:text-5xl text-center font-extrabold leading-tight">
        {t("title")}
      </h1>
      <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">
        {t("description")}
      </p>
      <Statistics statisticData={statisticData} />
    </div>
  );
};

export default StatisticPage;
