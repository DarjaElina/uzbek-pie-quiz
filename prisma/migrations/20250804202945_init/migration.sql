-- CreateEnum
CREATE TYPE "public"."PieType" AS ENUM ('CLASSIC', 'PUMPKIN', 'LAMB', 'CHEESE', 'POTATO');

-- CreateTable
CREATE TABLE "public"."Statistic" (
    "id" TEXT NOT NULL,
    "type" "public"."PieType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Statistic_pkey" PRIMARY KEY ("id")
);
