"use client";

import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "./ui/button";

interface User {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

const Navbar = ({ user }: { user: User }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await signOut({ callbackUrl: ROUTES.SIGN_IN });
    router.push(ROUTES.SIGN_IN);
  };

  const truncateEmail = (email: string | null | undefined) => {
    if (!email) return "";
    if (email.length <= 20) return email;

    const atIndex = email.indexOf("@");
    if (atIndex <= 0) return email;

    const username = email.substring(0, atIndex);
    const domain = email.substring(atIndex);

    if (username.length <= 10) return email;
    return `${username.substring(0, 8)}...${domain}`;
  };

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link href={ROUTES.HOME} className="text-xl font-semibold">
          <Image src="/assets/logo.png" alt="logo" width={32} height={32} />
        </Link>

        <div className="relative" ref={dropdownRef}>
          <Button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 rounded-full bg-gray-100 p-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-950 text-white">
              {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
            </div>
            <span className="hidden text-sm/5 sm:inline">
              {user?.name || "User"}
            </span>
          </Button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-md border border-gray-200 bg-white py-2 shadow-lg">
              <div className="border-b border-gray-100 px-4 py-2">
                <p className="font-medium">{user?.name || "User"}</p>
                <p className="overflow-hidden text-sm text-ellipsis text-gray-500">
                  {truncateEmail(user?.email)}
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
