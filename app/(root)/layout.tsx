import { auth } from "@/auth";
import Navbar from "@/components/Navbar";
import { ToastProvider } from "@/components/ui/toast-provider";
import { redirect } from "next/navigation";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session?.user) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={session.user} />
      <main className="mx-auto max-w-7xl p-4 pb-8">{children}</main>
      <ToastProvider />
    </div>
  );
};

export default RootLayout;
