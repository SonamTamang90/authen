import AuthForm from "@/components/auth-form";

const SignIn = () => {
  return (
    <AuthForm formType="SIGN_IN" defaultValues={{ email: "", password: "" }} />
  );
};

export default SignIn;
