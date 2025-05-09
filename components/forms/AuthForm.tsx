"use client";

import { Checkbox, Field, Input, Label } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../Button";
import { FieldValues } from "react-hook-form";
import {
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { LockClosedIcon } from "@heroicons/react/24/outline";

interface AuthFormType<T extends FieldValues> {
  formType: "SIGN_IN" | "SIGN_UP";
  defaultValues: T;
}

const AuthForm = <T extends FieldValues>({
  formType,
  defaultValues,
}: AuthFormType<T>) => {
  const [showPassword, setShowPassword] = useState<Record<string, boolean>>({
    password: false,
    confrimpasword: false,
  });

  const togglePasswordVisibility = (field: string) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const fieldIcons: Record<string, React.ReactNode> = {
    fullname: <UserIcon className="h-5 w-5 text-gray-400" />,
    email: <EnvelopeIcon className="h-5 w-5 text-gray-400" />,
    password: <LockClosedIcon className="h-5 w-5 text-gray-400" />,
    confirmpassword: <LockClosedIcon className="h-5 w-5 text-gray-400" />,
  };

  const getPlaceholder = (field: string) => {
    switch (field) {
      case "email":
        return "you@example.com";
      case "fullname":
        return "John Doe";
      case "password":
        return "••••••••";
      case "confirmpassword":
        return "••••••••";
      default:
        return `Enter your ${field}`;
    }
  };

  return (
    <form action="#" method="POST">
      <div className="flex items-start">
        <Link href="/" title="Home">
          <Image src="/logo.png" alt="Brand Logo" width={44} height={44} />
        </Link>
      </div>
      <h1 className="mt-8 text-base/6 font-medium text-gray-950">
        {formType === "SIGN_IN" ? "Welcome back!" : "Welcome!"}
      </h1>
      <p className="mt-1 text-sm/5 text-gray-600">
        {formType === "SIGN_IN"
          ? "Sign in to your account to continue."
          : "Create your account to get started"}
      </p>
      {Object.keys(defaultValues).map((field) => (
        <Field key={field} className="mt-8 space-y-3">
          <Label className="text-sm/5 font-medium text-gray-950">
            {field === "email"
              ? "Email Address"
              : field === "fullname"
                ? "Full Name"
                : field === "confirmpassword"
                  ? "Confirm Password"
                  : field.charAt(0).toUpperCase() + field.slice(1)}
          </Label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              {fieldIcons[field]}
            </div>
            <Input
              required
              placeholder={getPlaceholder(field)}
              type={
                field === "password" || field === "confirmpassword"
                  ? "password"
                  : field === "email"
                    ? "email"
                    : "text"
              }
              name="email"
              className={clsx(
                "block w-full rounded-lg border border-transparent shadow-sm ring-1 ring-black/10",
                "px-10 py-[calc(--spacing(1.5)-1px)] text-base/6 text-gray-950 sm:text-sm/6",
                "data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-black",
              )}
            />
            {(field === "password" || field === "confirmpassword") && (
              <button
                type="button"
                tabIndex={-1}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={() => togglePasswordVisibility(field)}
              >
                {showPassword[field] ? (
                  <EyeSlashIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            )}
          </div>
        </Field>
      ))}

      <div className="mt-8 text-sm/5">
        {formType === "SIGN_IN" ? (
          <div className="flex items-center justify-between">
            <Field className="flex items-center gap-3">
              <Checkbox
                name="remember-me"
                className={clsx(
                  "group block size-4 rounded-sm border border-transparent shadow-sm ring-1 ring-black/10 focus:outline-hidden",
                  "data-checked:bg-black data-checked:ring-black",
                  "data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-black",
                )}
              >
                <CheckIcon className="fill-white opacity-0 group-data-checked:opacity-100" />
              </Checkbox>
              <Label className="text-gray-950">Remember me</Label>
            </Field>
            <Link
              href="#"
              className="font-medium text-gray-950 hover:text-gray-600"
            >
              Forgot password?
            </Link>
          </div>
        ) : (
          <Field className="flex items-center gap-3">
            <Checkbox
              name="remember-me"
              className={clsx(
                "group block size-4 rounded-sm border border-transparent shadow-sm ring-1 ring-black/10 focus:outline-hidden",
                "data-checked:bg-black data-checked:ring-black",
                "data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-black",
              )}
            >
              <CheckIcon className="fill-white opacity-0 group-data-checked:opacity-100" />
            </Checkbox>
            <Label className="text-gray-950">
              I agree to the <Link href="#">Terms of Service</Link> and{" "}
              <Link href="#">Privacy Policy</Link>
            </Label>
          </Field>
        )}
      </div>
      <div className="mt-8">
        <Button className="w-full">
          {formType === "SIGN_IN" ? "Sign in" : "Create Account"}
        </Button>
      </div>
      <div className="mt-8 text-center text-sm/5 text-gray-950">
        {formType === "SIGN_IN" ? (
          <p>
            Not a member?{" "}
            <Link href="/sign-up" className="font-medium hover:text-gray-600">
              Create an account
            </Link>
          </p>
        ) : (
          <p>
            Already have a account?{" "}
            <Link href="/sign-in" className="font-medium hover:text-gray-600">
              Sign in
            </Link>
          </p>
        )}
      </div>
    </form>
  );
};

export default AuthForm;
