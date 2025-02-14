/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

// React Hook Form & Zod
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Store & Components
import { useOnboardingStore } from "@/lib/useStore";
import { Button } from "@/components/ui/button";

export default function Step7_Complete() {
  const { setUserData, setCurrentStep } = useOnboardingStore();


  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">
        Step 7: Onboarding Complete
      </h1>
      <Button onClick={() => setCurrentStep(1)}>Restart</Button>
    </div>
  );
}
