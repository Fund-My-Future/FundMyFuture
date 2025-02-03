export class VerificationService {
  async sendOTP(email: string): Promise<string> {
    const otp = this.generateOTP();
    // Send OTP via email
    return otp;
  }

  async verifyOTP(email: string, otp: string): Promise<boolean> {
    // Verify OTP
    return true;
  }

  private generateOTP(): string {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  }
}