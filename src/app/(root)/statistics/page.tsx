"use server";
import Statistics from "@/components/shared/statistics";
import { getStatisticData } from "@/lib/actions/statistic.actions";
const StatisticPage = async () => {
  const statisticData = await getStatisticData();

  return (
    <div className="px-4 py-20">
      <h1 className="text-4xl sm:text-5xl text-center font-extrabold leading-tight">
        Statistics
      </h1>
      <Statistics statisticData={statisticData} />
    </div>
  );
};

export default StatisticPage;
