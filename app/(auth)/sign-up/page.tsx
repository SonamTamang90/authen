"use client";

import AuthForm from "@/components/auth-form";
import { SignUpSchema } from "@/lib/validation";

const SignUp = () => {
  return (
    <AuthForm
      schema={SignUpSchema}
      formType="SIGN_UP"
      defaultValues={{ username: "", name: "", email: "", password: "" }}
    />
  );
};

export default SignUp;
