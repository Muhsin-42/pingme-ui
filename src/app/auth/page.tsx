"use client";
import {useState} from "react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {toast} from "sonner";
import {Github, Facebook, Twitter} from "lucide-react";
import LoginForm from "@/components/pages/auth/login.form";
import SignupForm from "@/components/pages/auth/signup.form";

const AuthForm = () => {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  const socialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    toast.loading(`Connecting to ${provider}...`);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="glassmorphism p-8 rounded-2xl shadow-lg animate-fadeIn">
        <div className="space-y-2 text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-violet-400 to-fuchsia-300 bg-clip-text text-transparent">
            {activeTab === "login" ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-sm text-muted-foreground">
            {activeTab === "login"
              ? "Sign in to your account to continue"
              : "Fill in your details to get started"}
          </p>
        </div>

        <Tabs
          defaultValue="login"
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as "login" | "signup")}
          className="space-y-6"
        >
          <TabsList className="grid grid-cols-2 w-full bg-secondary/30">
            <TabsTrigger
              value="login"
              className="data-[state=active]:bg-primary/20"
            >
              Sign In
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="data-[state=active]:bg-primary/20"
            >
              Sign Up
            </TabsTrigger>
          </TabsList>

          {/* Login Tab */}
          <TabsContent value="login" className="space-y-6">
            <LoginForm />
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-background px-2 text-muted-foreground">
                  or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <Button
                variant="outline"
                onClick={() => socialLogin("github")}
                className="auth-input hover:bg-muted/30"
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => socialLogin("twitter")}
                className="auth-input hover:bg-muted/30"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => socialLogin("facebook")}
                className="auth-input hover:bg-muted/30"
              >
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </TabsContent>

          {/* Signup Tab */}
          <TabsContent value="signup" className="space-y-6">
            <SignupForm />

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-background px-2 text-muted-foreground">
                  or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <Button
                variant="outline"
                onClick={() => socialLogin("github")}
                className="auth-input hover:bg-muted/30"
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => socialLogin("twitter")}
                className="auth-input hover:bg-muted/30"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => socialLogin("facebook")}
                className="auth-input hover:bg-muted/30"
              >
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthForm;
