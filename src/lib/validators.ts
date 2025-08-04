import { z } from "zod";

export const PieTypeEnum = z.enum([
  "CLASSIC",
  "PUMPKIN",
  "LAMB",
  "CHEESE",
  "POTATO",
]);

// for creating statistic piece
export const createStatisticRecordSchema = z.object({
  type: PieTypeEnum,
});
