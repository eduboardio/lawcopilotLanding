"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Mail, Lock, User, Briefcase } from "lucide-react";
import Link from "next/link";
import BlurFade from "@/components/ui/blur-fade";
import { Badge } from "@/components/ui/badge";

export default function SignUp() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    role: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Redirect to dashboard or confirmation page
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 px-4 py-12">
      <BlurFade delay={0.25}>
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Get Started with Law Copilot
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Join thousands of legal professionals using AI to transform their practice
            </p>
          </div>

          <Card className="border-gray-200 dark:border-gray-800 dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="dark:text-gray-100 flex justify-between items-center">
                Create Your Account
                <Badge variant="secondary" className="text-xs">Coming Soon</Badge>
              </CardTitle>
              <CardDescription className="dark:text-gray-400">
                {step === 1 ? "Enter your personal information" : "Complete your professional profile"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                {step === 1 ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="dark:text-gray-200">First Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
                          <Input
                            id="firstName"
                            name="firstName"
                            placeholder="John"
                            className="pl-10 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-500"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="dark:text-gray-200">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Doe"
                          className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-500"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="dark:text-gray-200">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          className="pl-10 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-500"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="dark:text-gray-200">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
                        <Input
                          id="password"
                          name="password"
                          type="password"
                          placeholder="••••••••"
                          className="pl-10 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-500"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="dark:text-gray-200">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyName" className="dark:text-gray-200">Company or Law Firm</Label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
                        <Input
                          id="companyName"
                          name="companyName"
                          placeholder="Company Name"
                          className="pl-10 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-500"
                          value={formData.companyName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role" className="dark:text-gray-200">Your Role</Label>
                      <Input
                        id="role"
                        name="role"
                        placeholder="Attorney, Paralegal, Legal Operations, etc."
                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-500"
                        value={formData.role}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              {step === 2 && (
                <Button variant="outline" onClick={prevStep} className="dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
                  Back
                </Button>
              )}
              {step === 1 ? (
                <Button onClick={nextStep} className=" ml-auto bg-foreground hover:bg-foreground/80 text-background">
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button type="submit" onClick={handleSubmit} className="bg-foreground hover:bg-foreground/80 text-background">
                  Create Account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </CardFooter>
          </Card>

          <div className="text-center text-sm">
            <span className="text-gray-600 dark:text-gray-400">Already have an account?</span>{" "}
            <Link href="/signin" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
              Sign in
            </Link>
          </div>

          <div className="text-center text-xs text-gray-500 dark:text-gray-500">
            By signing up, you agree to our{" "}
            <Link href="/terms" className="underline dark:text-gray-400">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline dark:text-gray-400">
              Privacy Policy
            </Link>
          </div>
        </div>
      </BlurFade>
    </div>
  );
}