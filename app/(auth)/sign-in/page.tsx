"use client";

import AuthForm from "@/components/auth-form";
import { SignInSchema } from "@/lib/validation";

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
