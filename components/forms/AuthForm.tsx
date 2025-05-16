"use client";

import { DefaultValues, FieldValues, Path, useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import clsx from "clsx";
import { Button } from "../ui/button";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";

interface AuthFormProps<T extends FieldValues> {
  schema: ZodType<T>;
  formType: "SIGN_IN" | "SIGN_UP";
  defaultValues: T;
}

const AuthForm = <T extends FieldValues>({
  schema,
  formType,
  defaultValues,
}: AuthFormProps<T>) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Form {...form}>
      <form>
        <h1 className="text-base/6 font-medium">
          {formType === "SIGN_IN" ? "Welcome back!" : "Create your account"}
        </h1>
        <p className="mt-1 text-sm/5 text-gray-600">
          {formType === "SIGN_IN"
            ? "Sign in to your account to continue."
            : "Please enter your details to create an account"}
        </p>
        {Object.keys(defaultValues).map((field) => (
          <FormField
            key={field}
            control={form.control}
            name={field as Path<T>}
            render={({ field }) => (
              <FormItem className="mt-8 gap-0">
                <FormLabel className="text-sm/5 font-medium">
                  {field.name === "email"
                    ? "Email Address"
                    : field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      required
                      type={
                        field.name === "password"
                          ? showPassword
                            ? "text"
                            : "password"
                          : "text"
                      }
                      placeholder={
                        field.name === "email"
                          ? "Enter your email address"
                          : field.name === "password"
                            ? "Enter your password"
                            : field.name === "fullname"
                              ? "Enter your full name"
                              : field.name === "username"
                                ? "Enter your username"
                                : `Enter your ${field.name.toLowerCase()}`
                      }
                      className={clsx(
                        "block w-full rounded-lg border border-transparent shadow-sm ring-1 ring-black/10",
                        "text-base/6 sm:text-sm/6",
                        "focus:outline-2 focus:-outline-offset-2 focus:outline-black focus-visible:ring-0",
                      )}
                    />
                    {field.name === "password" && (
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center px-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                        ) : (
                          <EyeIcon className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    )}
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        ))}
        {formType === "SIGN_IN" ? (
          <div className="mt-8 flex items-center justify-between text-sm/5">
            <FormItem className="flex items-center gap-3">
              <Checkbox id="remember" />
              <FormLabel htmlFor="remember" className="font-medium">
                Remember me
              </FormLabel>
            </FormItem>
            <Link href="#" className="font-medium hover:text-gray-600">
              Forgot Password?
            </Link>
          </div>
        ) : null}

        <Button size="lg" className="mt-8 w-full rounded-full">
          {formType === "SIGN_IN" ? "Sign in" : "Create account"}
        </Button>
        <div className="mt-8 text-center text-sm/5">
          {formType === "SIGN_IN" ? (
            <p>
              Not a member?{" "}
              <Link href="/sign-up" className="font-medium hover:text-gray-600">
                Create an account
              </Link>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <Link href="/sign-in" className="font-medium hover:text-gray-600">
                Sign in
              </Link>
            </p>
          )}
        </div>
      </form>
    </Form>
  );
};

export default AuthForm;
