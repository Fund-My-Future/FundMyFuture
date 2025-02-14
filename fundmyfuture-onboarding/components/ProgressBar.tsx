"use client";

import { useOnboardingStore } from "@/lib/useStore";

const steps = [
  "User Verification / Sign Up",
  "User Details",
  "Instructions",
  "Role Registration",
  "Application",
  "Review & Submit",
  "Complete",
];

export default function ProgressBar() {
  const { currentStep } = useOnboardingStore();

  return (
    <div className="w-full bg-gray-200 text-gray-700 flex items-center p-4 mt-2 rounded-lg">
      <ul className="flex space-x-4 w-full justify-between">
        {steps.map((title, index) => (
          <li key={index} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center border ${currentStep > index + 1 ? "bg-orange-500 text-white" : "border-gray-400 text-gray-400"
                }`}
            >
              {index + 1}
            </div>
            <span className={`${currentStep === index + 1 ? "font-bold text-gray-900" : "text-gray-500"}`}>
              {title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
