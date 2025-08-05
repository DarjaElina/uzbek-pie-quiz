"use client";

import { Bar, BarChart, XAxis } from "recharts";
import { useTranslations } from "next-intl";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { StatisticGroup } from "@/types/statistic.types";

interface StatisticsProps {
  statisticData: StatisticGroup;
}

const chartConfig = {
  type: {
    label: "Samsa Type",
  },
} satisfies ChartConfig;

const Statistics = ({ statisticData }: StatisticsProps) => {
  const t = useTranslations("StatisticsPage");

  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[200px] max-w-4xl m-auto"
    >
      <BarChart data={statisticData}>
        <XAxis
          dataKey="type"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(type) => t(`${type}`) || type}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent labelKey="count" nameKey="count" />}
        />
        <Bar dataKey="count" fill="var(--color-primary)" radius={8} />
      </BarChart>
    </ChartContainer>
  );
};

export default Statistics;
