import React from "react";
import { OnboardingLayout } from "@/components/onboarding/OnboardingLayout";
import { PersonalInfoForm } from "@/components/onboarding/PersonalInfoForm";

const Index = () => {
  const handleBack = () => {
    console.log("Navigate back to previous step");
    // In a real application, this would navigate to the previous step
  };

  const handleContinue = () => {
    console.log("Navigate to next step");
    // In a real application, this would navigate to the next step
  };

  return (
    <OnboardingLayout
      title="Join the Knowledge Hub"
      subtitle="Your personalized AI knowledge platform."
      currentStep={3}
      totalSteps={5}
    >
      <PersonalInfoForm onBack={handleBack} onContinue={handleContinue} />
    </OnboardingLayout>
  );
};

export default Index;
