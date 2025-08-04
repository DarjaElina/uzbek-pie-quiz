import { createStatisticRecordSchema } from "@/lib/validators";
import z from "zod";

export type StatisticInput = z.infer<typeof createStatisticRecordSchema>;

export type Statistic = StatisticInput & {
  id: string;
  createdAt: Date;
};

export type StatisticGroup = Array<{
  type: string;
  count: number;
}>;
