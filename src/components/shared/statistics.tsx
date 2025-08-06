"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";
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
      className="min-h-[200px] m-auto w-full max-w-[600px] sm:max-w-[800px]"
    >
      <ResponsiveContainer width="100%" height={300}>
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
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default Statistics;
