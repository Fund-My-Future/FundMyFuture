"use client";

import Image from 'next/image';

// React Hook Form and Zod
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authSchema } from "@/lib/formSchema";
import { FormData } from '@/lib/interfaces';

// Shadcn UI components
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

// Store
import { useOnboardingStore } from "@/lib/useStore";

// Components
import { CircleArrowRight } from 'lucide-react';

export default function Step1_Authentication() {
  const { setUserData, setCurrentStep } = useOnboardingStore();

  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      emailAddress: "",
      password: "",
      passwordConfirm: "",
    }
  });

  const onSubmit = (data: FormData) => {
    // include "+254" in the phone number
    data.phoneNumber = `+254${data.phoneNumber}`;
    console.log("Auth data", data);
    setUserData(data);
    setCurrentStep(2);
  };

  return (
    <Card className="flex justify-center px-4 sm:px-6 lg:px-8 w-full">
      <CardContent className="max-w-4xl w-full space-y-8">
        <div className="text-center mb-8">
          <p className="text-lg font-semibold text-orange-600 uppercase p-4">Step 1 of 6</p>
          <h2 className="text-3xl font-semibold text-gray-900">User Verification / Sign Up.</h2>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="firstName">First Name *</FormLabel>
                    <FormControl>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        {...field}
                        className="text-lg focus:ring focus:ring-orange-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="lastName">Last Name *</FormLabel>
                    <FormControl>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        {...field}
                        className="text-lg focus:ring focus:ring-orange-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-2">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="phoneNumber">Phone Number *</FormLabel>
                    <FormControl>
                      <div className="flex gap-2">
                        <Input
                          disabled
                          value="+254"
                          className="w-20 text-lg focus:ring focus:ring-orange-500"
                        />
                        <Input
                          id="phoneNumber"
                          type="tel"
                          placeholder="74238619"
                          {...field}
                          className="flex-1 text-lg focus:ring focus:ring-orange-500"
                        />
                        <Button variant="outline" className="w-24 bg-orange-500 text-white hover:bg-orange-600 text-lg">
                          Verify
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-2">
              <FormField
                control={form.control}
                name="emailAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="emailAddress">Email Address *</FormLabel>
                    <FormControl>
                      <div className="flex gap-2">
                        <Input
                          id="emailAddress"
                          type="email"
                          placeholder="Email Address"
                          {...field}
                          className="flex-1 text-lg focus:ring focus:ring-orange-500"
                        />
                        <Button variant="outline" className="w-24 bg-orange-500 text-white hover:bg-orange-600 text-lg">
                          Verify
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="password">Password *</FormLabel>
                    <FormControl>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Password"
                        {...field}
                        className="text-lg focus:ring focus:ring-orange-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="passwordConfirm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="passwordConfirm">Confirm Password *</FormLabel>
                    <FormControl>
                      <Input
                        id="passwordConfirm"
                        type="password"
                        placeholder="Confirm Password"
                        {...field}
                        className="text-lg focus:ring focus:ring-orange-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                type="button"
                variant="outline"
                className="w-full text-lg py-8"
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
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-purple-600 text-white text-lg w-36 flex items-center justify-center py-6"
                disabled={!form.formState.isValid}
              >
                Proceed
                <CircleArrowRight size={28} />
              </Button>
            </div>
          </form>
        </Form>

      </CardContent>
    </Card>
  );
}
