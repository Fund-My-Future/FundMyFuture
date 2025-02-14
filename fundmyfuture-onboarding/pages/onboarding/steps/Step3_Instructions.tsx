/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

// React Hook Form & Zod
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Store & Components
import { useOnboardingStore } from "@/lib/useStore";
import { Button } from "@/components/ui/button";
import StepNavigation from "@/components/StepNavigation";

export default function Step3_Instructions() {
  const { setUserData, setCurrentStep } = useOnboardingStore();


  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">
        Step 3: Onboarding Instructions / Welcome Screen
      </h1>
      <StepNavigation next={() => setCurrentStep(4)} prev={() => setCurrentStep(2)} />
    </div>
  );
}
