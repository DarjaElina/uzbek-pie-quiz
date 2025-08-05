import Statistics from "@/components/shared/statistics";
import { getStatisticData } from "@/lib/actions/statistic.actions";
const StatisticPage = async () => {
  const statisticData = await getStatisticData();

  return (
    <div className="px-4 py-20">
      <h1 className="text-4xl sm:text-5xl text-center font-extrabold leading-tight">
        Statistics
      </h1>
      <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">
        These statistics are based on quiz results submitted by users — see
        which pie types are the most popular!
      </p>
      <Statistics statisticData={statisticData} />
    </div>
  );
};

export default StatisticPage;
