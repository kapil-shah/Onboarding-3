import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavigationButtons } from "./NavigationButtons";

interface PersonalInfoFormProps {
  onBack?: () => void;
  onContinue?: () => void;
}

interface FormValues {
  firstName: string;
  lastName: string;
  designation: string;
  company: string;
  bio: string;
}

export const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  onBack,
  onContinue,
}) => {
  const { register, handleSubmit, watch } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      designation: "",
      company: "",
      bio: "",
    },
  });

  const bioValue = watch("bio");
  const [bioLength, setBioLength] = useState(0);

  const onSubmit = (data: FormValues) => {
    console.log(data);
    if (onContinue) onContinue();
  };

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBioLength(e.target.value.length);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="bg-white self-stretch flex w-full flex-col items-stretch px-[42px] py-[25px] rounded-[20px] max-md:max-w-full max-md:px-5">
        <h2 className="text-[rgba(61,61,61,1)] text-xl font-semibold leading-[1.3] text-center self-center">
          Tell Us About Yourself
        </h2>
        <p className="text-[rgba(98,107,118,1)] text-base font-normal leading-[1.3] text-center self-center mt-[11px] max-md:max-w-full">
          We've pulled this information from LinkedIn. Feel free to edit or
          enhance it.
        </p>

        <div className="flex items-stretch gap-9 flex-wrap mt-[35px] max-md:max-w-full">
          <div className="flex flex-col items-stretch flex-1 grow shrink-0 basis-0 w-fit">
            <label
              htmlFor="firstName"
              className="text-[rgba(61,61,61,1)] text-base font-semibold"
            >
              First Name
            </label>
            <input
              id="firstName"
              {...register("firstName")}
              placeholder="Your first name"
              className="bg-[rgba(247,247,245,1)] border text-sm text-[#626b76] font-normal mt-2 p-3.5 rounded-xl border-[rgba(218,218,218,1)] border-solid max-md:pr-5"
            />
          </div>
          <div className="flex flex-col items-stretch flex-1 grow shrink-0 basis-0 w-fit">
            <label
              htmlFor="lastName"
              className="text-[rgba(61,61,61,1)] text-base font-semibold"
            >
              Last Name
            </label>
            <input
              id="lastName"
              {...register("lastName")}
              placeholder="Your last name"
              className="bg-[rgba(247,247,245,1)] border text-sm text-[#626b76] font-normal mt-2 p-3.5 rounded-xl border-[rgba(218,218,218,1)] border-solid max-md:pr-5"
            />
          </div>
        </div>

        <div className="flex items-stretch gap-9 flex-wrap mt-7 max-md:max-w-full">
          <div className="flex flex-col items-stretch flex-1 grow shrink-0 basis-0 w-fit">
            <label
              htmlFor="designation"
              className="text-[rgba(61,61,61,1)] text-base font-semibold"
            >
              Designation
            </label>
            <input
              id="designation"
              {...register("designation")}
              placeholder="Your designation (e.g. Marketing Consultant)"
              className="bg-[rgba(247,247,245,1)] border text-sm text-[#626b76] font-normal mt-2 px-[13px] py-3.5 rounded-xl border-[rgba(218,218,218,1)] border-solid"
            />
          </div>
          <div className="flex flex-col items-stretch flex-1 grow shrink-0 basis-0 w-fit">
            <label
              htmlFor="company"
              className="text-[rgba(61,61,61,1)] text-base font-semibold"
            >
              Company
            </label>
            <input
              id="company"
              {...register("company")}
              placeholder="Your company"
              className="bg-[rgba(247,247,245,1)] border text-sm text-[#626b76] font-normal mt-2 p-3.5 rounded-xl border-[rgba(218,218,218,1)] border-solid max-md:pr-5"
            />
          </div>
        </div>

        <div className="mt-7">
          <label
            htmlFor="bio"
            className="text-[rgba(61,61,61,1)] text-base font-semibold"
          >
            Professional Bio
          </label>
          <textarea
            id="bio"
            {...register("bio")}
            placeholder="Your professional bio"
            onChange={handleBioChange}
            className="bg-[rgba(247,247,245,1)] border text-sm text-[#626b76] font-normal mt-2 pt-3.5 pb-[98px] px-3.5 rounded-xl border-[rgba(218,218,218,1)] border-solid w-full max-md:max-w-full max-md:pr-5 max-md:pb-[110px]"
          />
        </div>

        <NavigationButtons
          onBack={onBack}
          onContinue={handleSubmit(onSubmit)}
          bioLength={bioLength}
          maxBioLength={2000}
          showWordCount={true}
          minWords={150}
        />
      </div>
    </form>
  );
};
