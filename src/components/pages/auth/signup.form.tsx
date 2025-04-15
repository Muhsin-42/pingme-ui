"use client";
import {zodResolver} from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {Mail, Lock, ArrowRight, User} from "lucide-react";
import {useForm} from "react-hook-form";
import {toast} from "sonner";
import React from "react";
import {SignupFormValues, signupSchema} from "./signup.schema";
import {noTokenAxios} from "@/lib/axios/no-token.axios";

const SignupForm = () => {
  const signupForm = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
  });

  const onSignupSubmit = async (values: SignupFormValues) => {
    console.log("Signup values:", values);
    try {
      await noTokenAxios.post("/auth/register", values);
      toast.success("Account created successfully");

      // eslint-disable-next-line
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to register");
    }
  };

  return (
    <Form {...signupForm}>
      <form
        onSubmit={signupForm.handleSubmit(onSignupSubmit)}
        className="space-y-4"
      >
        <FormField
          control={signupForm.control}
          name="name"
          render={({field}) => (
            <FormItem>
              <FormLabel className="text-foreground/80">Full Name</FormLabel>
              <FormControl>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="John Doe"
                    className="pl-10 auth-input"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={signupForm.control}
          name="email"
          render={({field}) => (
            <FormItem>
              <FormLabel className="text-foreground/80">Email</FormLabel>
              <FormControl>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="name@example.com"
                    className="pl-10 auth-input"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={signupForm.control}
            name="password"
            render={({field}) => (
              <FormItem>
                <FormLabel className="text-foreground/80">Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="password"
                      placeholder="••••••••"
                      className="pl-10 auth-input"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={signupForm.control}
            name="confirmPassword"
            render={({field}) => (
              <FormItem>
                <FormLabel className="text-foreground/80">Confirm</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="password"
                      placeholder="••••••••"
                      className="pl-10 auth-input"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={signupForm.control}
          name="agreeToTerms"
          render={({field}) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="border-muted-foreground/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm font-normal text-muted-foreground">
                  I agree to the{" "}
                  <a href="#" className="text-primary hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-2 transition-all"
        >
          <span>Create Account</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </form>
    </Form>
  );
};

export default SignupForm;
