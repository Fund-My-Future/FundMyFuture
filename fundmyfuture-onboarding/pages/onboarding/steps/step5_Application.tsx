/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

// React Hook Form & Zod
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Store & Components
import { useOnboardingStore } from "@/lib/useStore";
import { Button } from "@/components/ui/button";
import StepNavigation from "@/components/StepNavigation";

export default function Step5_Application() {
  const { setUserData, setCurrentStep } = useOnboardingStore();


  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">
        Step 5: AI-Powered Application Support (FMF Application Support GPT)
      </h1>
      <StepNavigation next={() => setCurrentStep(6)} prev={() => setCurrentStep(4)} />
    </div>
  );
}
