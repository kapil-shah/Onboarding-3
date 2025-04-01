import React, { ReactNode } from "react";
import { ProgressIndicator } from "./ProgressIndicator";

interface OnboardingLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  currentStep: number;
  totalSteps: number;
}

export const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({
  children,
  title,
  subtitle,
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="bg-[rgba(247,247,245,1)] flex flex-col overflow-hidden items-center pt-[62px] pb-[31px] px-20 max-md:px-5 min-h-screen">
      <div className="flex w-[761px] max-w-full flex-col items-center ml-6">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/5a83a85e877946ab8621e3fb34eb3696/394b9c65c96de4efd5c4b94834c167f5ebb3cd77?placeholderIfAbsent=true"
          className="aspect-[3.28] object-contain w-[131px] max-w-full"
          alt="Wizly Logo"
        />

        <h1 className="text-[rgba(61,61,61,1)] text-[25px] font-semibold leading-[1.3] text-center mt-[49px] max-md:mt-10">
          {title}
        </h1>

        <p className="text-[rgba(98,107,118,1)] text-base font-normal leading-[1.3] text-center mt-[11px]">
          {subtitle}
        </p>

        <div className="mt-12 max-md:mt-10 w-full flex justify-center">
          <ProgressIndicator
            currentStep={currentStep}
            totalSteps={totalSteps}
          />
        </div>

        <div className="w-full mt-12 max-md:mt-10">{children}</div>

        <div className="flex w-[258px] max-w-full items-stretch gap-2 text-base text-[rgba(98,107,118,1)] font-normal leading-[1.3] mt-[37px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/5a83a85e877946ab8621e3fb34eb3696/f49b26f5b9c496b4b2c643591be0a219d7fe2000?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-4 shrink-0 my-auto"
            alt="Copyright icon"
          />
          <div className="grow shrink w-[231px]">
            2025 Wizly. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};
