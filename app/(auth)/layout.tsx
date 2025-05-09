import SocialAuthForm from "@/components/forms/SocialAuthForm";
import GradientBackgroud from "@/components/GradientBackground";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="overflow-hidden bg-gray-50">
      <GradientBackgroud />
      <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
        <div className="w-full max-w-md rounded-xl bg-white p-7 shadow-md ring-1 ring-black/5 sm:p-11">
          {children}
          <SocialAuthForm />
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
