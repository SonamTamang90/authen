import { Checkbox, Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./button";
import { CheckIcon } from "@heroicons/react/16/solid";

interface AuthFormProps {
  formType: "SIGN_IN" | "SIGN_UP";
  defaultValues: string;
}

const AuthForm = ({ formType, defaultValues }: AuthFormProps) => {
  return (
    <>
      <form className="p-7 sm:p-11">
        <div className="flex items-start">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={44} height={44} />
          </Link>
        </div>
        <h1 className="mt-8 text-sm/5 font-medium text-gray-950">
          Welcome back!
        </h1>
        <p className="mt-1 text-sm/5 text-gray-600">
          Sign in to your account to continue.
        </p>
        {Object.keys(defaultValues).map((field) => (
          <Field key={field} className="mt-8 space-y-3">
            <Label className="text-sm/5 font-medium text-gray-950">
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </Label>
            <Input
              required
              type="email"
              name="email"
              className={clsx(
                "block w-full rounded-lg border border-transparent shadow-sm ring-1 ring-black/10",
                "px-[calc(--spacing(2)-1px)] py-[calc(--spacing(1.5)-1px)] text-base/6 sm:text-sm/6",
                "data-focus: -outline-offset-1 data-focus:outline-2 data-focus:outline-black",
              )}
            />
          </Field>
        ))}

        {formType === "SIGN_IN" ? (
          <div className="mt-8 flex items-center justify-between text-sm/5">
            <Field className="flex items-center gap-3">
              <Checkbox
                name="remember-me"
                className={clsx(
                  "group rign-black/10 block size-4 rounded-sm border border-transparent shadow-sm ring-1 focus:outline-hidden",
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
          ""
        )}

        <div className="mt-8">
          <Button className="w-full">
            {formType === "SIGN_IN" ? "Sign in" : "Sign up"}
          </Button>
        </div>
      </form>
      <div className="m-1.5 rounded-lg bg-gray-50 py-4 text-center text-sm/5 text-gray-950 ring-1 ring-black/5">
        {formType === "SIGN_IN" ? (
          <p>
            {" "}
            Not a member?{" "}
            <Link href="/sign-up" className="font-medium hover:text-gray-600">
              Create an account
            </Link>
          </p>
        ) : (
          <p>
            Already a member?{" "}
            <Link href="/sign-in" className="font-medium hover:text-gray-600">
              Sign in
            </Link>
          </p>
        )}
      </div>
    </>
  );
};

export default AuthForm;
