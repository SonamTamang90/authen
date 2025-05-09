"use client";

import AuthForm from "@/components/forms/AuthForm";

const SignUp = () => {
  return (
    <AuthForm
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
