import type { Metadata } from "next";
import "./globals.css";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";
export const metadata: Metadata = {
  title: "Authen | Secure Authentication System",
  description:
    "Authen is a robust, scalable authentication and authorization solution built with Next.js, Typescript, and MongoDB.Featuring OAuth, email verification, password recovery, and seamless integration for modern web applications.",
  keywords:
    "authentication, authorization, Next.js, TypeScript, MongoDB, secure login, OAuth, user management",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  console.log(session);
  return (
    <html lang="en">
      <body className="text-gray-950 antialiased">
        <SessionProvider session={session}>
          {children}
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
