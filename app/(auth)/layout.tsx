import GradientBackground from "@/components/GradientBackground";
import Image from "next/image";
import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="overflow-hidden bg-gray-50">
      <GradientBackground />
      <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
        <div className="w-full max-w-md rounded-xl bg-white shadow-md ring-1 ring-black/5">
          <div className="p-7 sm:p-11">
            <div className="mb-8 flex items-start">
              <Link href="/">
                <Image
                  src="/assets/logo.png"
                  alt="logo"
                  width={32}
                  height={32}
                />
              </Link>
            </div>
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
