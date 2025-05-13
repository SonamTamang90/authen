"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validation";

const SignUp = () => {
  return (
    <AuthForm
      schema={SignUpSchema}
      formType="SIGN_UP"
      defaultValues={{
        fullname: "",
        email: "",
        password: "",
        confirmpassword: "",
      }}
    />
  );
};

export default SignUp;
