import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Authen | Secure Authentication System",
  description:
    "Authen is a robust, scalable authentication and authorization solution built with Next.js, Typescript, and MongoDB.Featuring OAuth, email verification, password recovery, and seamless integration for modern web applications.",
  keywords:
    "authentication, authorization, Next.js, TypeScript, MongoDB, secure login, OAuth, user management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-gray-950 antialiased">{children}</body>
    </html>
  );
}
