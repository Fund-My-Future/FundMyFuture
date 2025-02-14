/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from 'next/image';

// React Hook Form and Zod
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authSchema } from "@/lib/formSchema";

// Shadcn UI components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

// Store
import { useOnboardingStore } from "@/lib/useStore";

// Components
import StepNavigation from "@/components/StepNavigation";

export default function Step1_Authentication() {
  const { setUserData, setCurrentStep } = useOnboardingStore();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = () => {
    // handle form submission
  };

  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-8 w-full">
      <Card className="max-w-4xl w-full space-y-8">
        <CardContent className="space-y-8">
          <div className="text-center mb-8">
            <p className="text-lg font-semibold text-orange-600 uppercase p-4">Step 1 of 6</p>
            <h2 className="text-3xl font-semibold text-gray-900">User Verification / Sign Up.</h2>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName" className="text-lg">First Name</Label>
                <Input
                  id="firstName"
                  type='text'
                  placeholder="First Name"
                  {...register("firstName")}
                  className="mt-1 text-lg focus:ring focus:ring-orange-500"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-lg">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Last Name"
                  {...register("lastName")}
                  className="mt-1 text-lg focus:ring focus:ring-orange-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-lg">Phone Number</Label>
              <div className="flex gap-2">
                <Input
                  disabled
                  value="+254"
                  className="w-20 text-lg focus:ring focus:ring-orange-500"
                />
                <Input
                  id="phone"
                  placeholder="74238619"
                  {...register("phone")}
                  className="flex-1 text-lg focus:ring focus:ring-orange-500"
                />
                <Button variant="outline" className="w-24 bg-orange-500 text-white hover:bg-orange-600 text-lg">
                  Verify
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-lg">Email Address</Label>
              <div className="flex gap-2">
                <Input
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  {...register("email")}
                  className="flex-1 text-lg focus:ring focus:ring-orange-500"
                />
                <Button variant="outline" className="w-24 bg-orange-500 text-white hover:bg-orange-600 text-lg">
                  Verify
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-lg">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                {...register("password")}
                className="mt-1 text-lg focus:ring focus:ring-orange-500"
              />
              {/* Add password strength meter here */}
            </div>

            <div className="space-y-2">
              <Label className="text-lg">SMS Code</Label>
              <div className="flex gap-2">
                <InputOTP maxLength={4}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                </InputOTP>
                <Button variant="outline" className="w-24 text-lg">
                  Resend
                </Button>
                <Button className="w-24 bg-orange-500 text-white hover:bg-orange-600 text-lg">
                  Confirm
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-lg">Email Code</Label>
              <div className="flex gap-2">
                <InputOTP maxLength={4}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                </InputOTP>
                <Button variant="outline" className="w-24 text-lg">
                  Resend
                </Button>
                <Button className="w-24 bg-orange-500 text-white hover:bg-orange-600 text-lg">
                  Confirm
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full text-lg"
            >
              <Image
                className="h-6 w-6 mr-2"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google logo"
                width={24}
                height={24}
              />
              Sign in with Google
            </Button>
          </form>
          <div className="flex justify-center">
            <StepNavigation next={() => setCurrentStep(2)} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
