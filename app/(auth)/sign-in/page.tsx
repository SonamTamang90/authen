"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/validations";

const SignIn = () => {
  return (
    <AuthForm
      schema={SignInSchema}
      formType="SIGN_IN"
      defaultValues={{ email: "", password: "" }}
    />
  );
};

export default SignIn;
