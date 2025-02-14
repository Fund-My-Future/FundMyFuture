/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

// React Hook Form & Zod
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Store & Components
import { useOnboardingStore } from "@/lib/useStore";
import { Button } from "@/components/ui/button";
import StepNavigation from "@/components/StepNavigation";

export default function Step2_UserDetails() {
  const { setUserData, setCurrentStep } = useOnboardingStore();


  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">
        Step 2: Step 2: Personal Details Collection
      </h1>
      <StepNavigation next={() => setCurrentStep(3)} prev={() => setCurrentStep(1)} />
    </div>
  );
}
