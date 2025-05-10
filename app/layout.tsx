import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Authen",
  description:
    "Authentication system with Next, Next Auth, Tailwind, React Hook Form, Zod Validations and MongoDB",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  console.log(session);
  return (
    <html lang="en" suppressHydrationWarning>
      <SessionProvider session={session}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} text-gray-950 antialiased`}
        >
          {children}
          <Toaster position="top-center" />
        </body>
      </SessionProvider>
    </html>
  );
};

export default RootLayout;
