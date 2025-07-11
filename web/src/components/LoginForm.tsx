"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Mail, Lock, User, Quote } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { FormEvent } from "react";

interface LoginFormProps {
  onBack: () => void;
}

const LoginForm = ({ onBack }: LoginFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const body = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    // Use NEXT_PUBLIC_API_URL for client-side fetch
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://api:5000";

    await fetch(`${apiUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Login failed");
        }
        const data = await response.json();
        localStorage.setItem("accessToken", data.access_token);
        setIsLoading(false);
        toast({
          title: "Welcome to VoteQuotes!",
          description: "You have successfully logged in.",
        });
        onBack();
      })
      .catch((error) => {
        console.error("Login error:", error.message);
        setIsLoading(false);
        toast({
          title: "Login Failed",
          description: error.message,
          variant: "destructive",
        });
      });

    // Simulate API call
    // setTimeout(() => {
    //   setIsLoading(false);
    //   toast({
    //     title: "Welcome to VoteQuotes!",
    //     description: "You have successfully logged in.",
    //   });
    //   onBack();
    // }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Button
          variant="outline"
          onClick={onBack}
          className="mb-6 hover:bg-white"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Quotes
        </Button>

        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Quote className="h-7 w-7 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">VoteQuotes</h1>
          </div>
          <p className="text-gray-600">Join the conversation on democracy</p>
        </div>

        {/* Login/Signup Tabs */}
        <Card className="shadow-lg border-0">
          <Tabs defaultValue="login" className="w-full">
            <CardHeader className="pb-4">
              <TabsList className="grid w-full grid-cols-2 bg-gray-100">
                <TabsTrigger
                  value="login"
                  className="data-[state=active]:bg-white"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  className="data-[state=active]:bg-white"
                >
                  Sign Up
                </TabsTrigger>
              </TabsList>
            </CardHeader>

            <CardContent>
              <TabsContent value="login" className="space-y-4">
                <CardTitle className="text-xl text-center mb-2">
                  Welcome Back
                </CardTitle>
                <CardDescription className="text-center mb-6">
                  Sign in to continue voting on quotes
                </CardDescription>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>

                <div className="text-center">
                  <Button variant="link" className="text-sm text-blue-600">
                    Forgot your password?
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="signup" className="space-y-4">
                <CardTitle className="text-xl text-center mb-2">
                  Join VoteQuotes
                </CardTitle>
                <CardDescription className="text-center mb-6">
                  Create an account to start voting
                </CardDescription>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="Create a password"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : "Create Account"}
                  </Button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                  By signing up, you agree to our Terms of Service and Privacy
                  Policy
                </p>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>

        {/* Social Login Options */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 mb-4">Or continue with</p>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="bg-white hover:bg-gray-50">
              <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </Button>
            <Button variant="outline" className="bg-white hover:bg-gray-50">
              <svg
                className="h-4 w-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
