import AuthForm from "@/components/auth-form";

const SignUp = () => {
  return (
    <AuthForm
      formType="SIGN_UP"
      defaultValues={{ username: "", email: "", password: "" }}
    />
  );
};

export default SignUp;
