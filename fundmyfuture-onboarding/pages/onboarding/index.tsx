// Entry point for the onboarding process
"use client";

import { useOnboardingStore } from "@/lib/useStore";
import OnboardingLayout from "./layout";

// Import the multi-step form components
import Step1_Authentication from "./steps/Step1_Authentication";
import Step2_UserDetails from "./steps/Step2_UserDetails";
import Step3_Instructions from "./steps/Step3_Instructions";
import Step4_RoleRegistration from "./steps/Step4_RoleRegistration";
import Step5_Application from "./steps/step5_Application";
import Step6_ReviewSubmit from "./steps/Step6_ReviewSubmit";
import Step7_Complete from "./steps/step7_Complete";

export default function Onboarding() {
    const { currentStep } = useOnboardingStore();

    // Render the appropriate step based on the current step
    return (
        <OnboardingLayout>
            {currentStep === 1 && <Step1_Authentication />}
            {currentStep === 2 && <Step2_UserDetails />}
            {currentStep === 3 && <Step3_Instructions />}
            {currentStep === 4 && <Step4_RoleRegistration />}
            {currentStep === 5 && <Step5_Application />}
            {currentStep === 6 && <Step6_ReviewSubmit />}
            {currentStep === 7 && <Step7_Complete />}
        </OnboardingLayout>
    )
}