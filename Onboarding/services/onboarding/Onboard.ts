import { User, Student, SME } from "../../models/User";

export class OnboardingService {
    private currentStep: number = 1;
    private userData: Partial<User> = {};

    async verifyEmail(email: string): Promise<boolean> {
        // Send verification email/OTP
        return true;
    }

    // Set personal details
    async setPersonalDetails(details: User['personalDetails']): Promise<void> {
        this.userData.personalDetails = details;
        this.currentStep = 3;
    }

    // Set role
    async setRole(role: 'student' | 'sme'): Promise<void> {
        this.userData.role = role;
        this.currentStep = 4;
    }

    async completeStudentRegistration(studentData: Partial<Student>): Promise<Student> {
        // Complete registration for students
        return {} as Student;
    }

    async completeSMERegistration(smeData: Partial<SME>): Promise<SME> {
        // Complete registration for SMEs
        return {} as SME;
    }

    getCurrentStep(): number {
        return this.currentStep;
    }
}