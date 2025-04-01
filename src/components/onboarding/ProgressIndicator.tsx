import React from "react";

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="flex w-full max-w-[552px] items-stretch text-base text-white font-semibold whitespace-nowrap text-center flex-wrap">
      {Array.from({ length: totalSteps }, (_, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber <= currentStep;
        const isLast = stepNumber === totalSteps;

        return (
          <React.Fragment key={stepNumber}>
            <div
              className={`${
                isActive
                  ? "bg-[rgba(86,131,210,1)]"
                  : "bg-[rgba(218,218,218,1)] text-[rgba(95,95,95,1)]"
              } w-8 h-8 pt-[7px] pb-[13px] px-3 rounded-[50%]`}
            >
              {stepNumber}
            </div>
            {!isLast && (
              <div
                className={`border w-[98px] shrink-0 h-px my-auto ${
                  stepNumber < currentStep
                    ? "border-[rgba(86,131,210,1)]"
                    : "border-[rgba(218,218,218,1)]"
                } border-solid`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
