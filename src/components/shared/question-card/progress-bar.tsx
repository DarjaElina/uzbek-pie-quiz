"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  currentStep: number;
  totalSteps?: number;
}

const ProgressBar = ({ currentStep, totalSteps = 10 }: ProgressBarProps) => {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div className="flex flex-col gap-1 items-start">
      <Progress value={percentage} className="w-full h-2 bg-muted" />
      <p className="text-sm text-muted-foreground">
        {currentStep}/{totalSteps}
      </p>
    </div>
  );
};

export default ProgressBar;
