// Layout for the onboarding steps
"use client";

import ProgressBar from "@/components/ProgressBar";
import { ReactNode } from "react";

export default function OnboardingLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col h-screen w-5/6 flex-1 mx-auto">
            {/* Progress Bar */}
            <ProgressBar />
        <div className="flex-1 flex justify-center bg-gray-100 p-8">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full">
                {children}
            </div>
        </div>
        </div>
    )
}
