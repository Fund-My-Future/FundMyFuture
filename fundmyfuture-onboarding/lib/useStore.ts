// (This store will manage onboarding progress and user data globally.)
import { create } from "zustand";
import { User } from "@/models/user";

interface OnboardingState {
    currentStep: number; // Current step in the onboarding process
    userData: Partial<User>; // User data collected during onboarding
    setCurrentStep: (step: number) => void;
    setUserData: (data: Partial<User>) => void;
    resetOnboarding: () => void; // Reset onboarding state
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
    currentStep: 1, // Default to step 1
    userData: {}, // Default to empty user data
    setCurrentStep: (step) => set({ currentStep: step }),
    setUserData: (data) => set((state) => ({ userData: { ...state.userData, ...data } })),
    resetOnboarding: () => set({ currentStep: 1, userData: {} }),
  }));