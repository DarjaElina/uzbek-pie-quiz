"use server";
import { prisma } from "@/db/prisma";
import { StatisticInput } from "@/types/statistic.types";
import { createStatisticRecordSchema } from "../validators";
import { revalidatePath } from "next/cache";

export async function getStatisticData() {
  const rawData = await prisma.statistic.groupBy({
    by: ["type"],
    _count: true,
  });

  const allPieTypes = [
    "PUMPKIN",
    "CLASSIC",
    "LAMB",
    "CHEESE",
    "POTATO",
  ] as const;

  const chartData = allPieTypes.map((type) => {
    const match = rawData.find((item) => item.type === type);
    return {
      type,
      count: match?._count ?? 0,
    };
  });

  return chartData;
}

export async function createStatisticRecord(
  prevState: unknown,
  statisticInput: StatisticInput,
) {
  const { type } = statisticInput;
  try {
    const statisticRecord = createStatisticRecordSchema.parse({
      type,
    });

    await prisma.statistic.create({
      data: statisticRecord
    });

    revalidatePath('/statistics');

    return { success: true, message: "Record created successfully" };
  } catch (error) {
    console.error(error);

    return { success: false, message: "Failed to creare record" };
  }
}
