import { PieTypeEnum } from "@/lib/validators";
import z from "zod";

export type PieType = z.infer<typeof PieTypeEnum>;
