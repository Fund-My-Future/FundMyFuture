import { User, Student, SME } from "../../models/User";

export class ReviewService {
  async reviewApplication(user: User): Promise<boolean> {
    if (user.role === 'student') {
      return this.reviewStudentApplication(user as Student);
    }
    return this.reviewSMEApplication(user as SME);
  }

  private async reviewStudentApplication(student: Student): Promise<boolean> {
    // Review student application
    return true;
  }

  private async reviewSMEApplication(sme: SME): Promise<boolean> {
    // Review SME application
    return true;
  }
}