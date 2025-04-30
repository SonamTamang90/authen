import GradientBackgroud from "@/components/gradient-background";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="overflow-hidden bg-gray-50">
      <GradientBackgroud />
      <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
        <div className="w-full max-w-md rounded-xl bg-white shadow-md ring-1 ring-black/5">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
