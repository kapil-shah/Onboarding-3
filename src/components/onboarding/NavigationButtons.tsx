import React from "react";

interface NavigationButtonsProps {
  onBack?: () => void;
  onContinue?: () => void;
  bioLength?: number;
  maxBioLength?: number;
  showWordCount?: boolean;
  minWords?: number;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onBack,
  onContinue,
  bioLength = 0,
  maxBioLength = 2000,
  showWordCount = false,
  minWords = 150,
}) => {
  return (
    <div className="flex items-stretch gap-5 flex-wrap justify-between mt-[9px] w-full">
      <div className="flex flex-col items-stretch">
        {showWordCount && (
          <div className="text-[#626b76] text-sm font-normal">
            Minimum {minWords} words
          </div>
        )}
        <button
          onClick={onBack}
          className="bg-white border flex min-h-[43px] items-center gap-2.5 overflow-hidden text-base text-[rgba(86,131,210,1)] font-medium whitespace-nowrap text-center justify-center mt-9 px-[25px] py-3 rounded-[9px] border-[rgba(86,131,210,1)] border-solid max-md:px-5"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/5a83a85e877946ab8621e3fb34eb3696/10dc6f91a5dab27d574378658e3d6ae92a6b91c4?placeholderIfAbsent=true"
            className="aspect-[1.36] object-contain w-[15px] self-stretch shrink-0 my-auto"
            alt="Back arrow"
          />
          <span className="self-stretch my-auto">Back</span>
        </button>
      </div>
      <div className="flex flex-col items-stretch whitespace-nowrap">
        {showWordCount && (
          <div className="text-[#626b76] text-sm font-normal text-right max-md:mr-[9px]">
            {bioLength}/{maxBioLength}
          </div>
        )}
        <button
          onClick={onContinue}
          className="bg-[rgba(86,131,210,1)] flex min-h-[43px] items-center gap-2.5 overflow-hidden text-base text-white font-medium text-center justify-center mt-9 pl-2.5 pr-[9px] py-3 rounded-[9px]"
        >
          <span className="self-stretch my-auto">Continue</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/5a83a85e877946ab8621e3fb34eb3696/a36bb998ff13ecaa4702ba052a7e373aae8de91a?placeholderIfAbsent=true"
            className="aspect-[1.27] object-contain w-3.5 self-stretch shrink-0 my-auto"
            alt="Continue arrow"
          />
        </button>
      </div>
    </div>
  );
};
