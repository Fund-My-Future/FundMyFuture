export interface User {
    id: string;
    email: string;
    password: string; // hashed
    verified: boolean;
    personalDetails: {
        dateOfBirth: Date;
        countryOfOrigin: string;
        countryOfResidence: string;
        cityOfResidence: string;
        gender: 'male' | 'female' | 'other' | 'prefer-not-to-say';
        preferredLanguage?: string; // Optional
    };
    role: 'student' | 'sme';
    createdAt: Date;
    updatedAt: Date;
}

export interface Student extends User {
    financialDetails: {
        fundingRequired: number;
        scholarshipDetails?: string;
        financialStatus?: string;
    };
    assessments?: {
        sponsorshipEssay?: string;
        motivationEssay?: string;
        englishProficiency?: number;
    };
    humanitarianStatus?: boolean;
}

export interface SME extends User {
    companyDetails: {
        name: string;
        size: number;
        industry: string;
    };
    hiringNeeds: {
        role: string;
        jobDescription: string;
        duration: number;
    };
}