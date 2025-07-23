"use client";

import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "./ui/button";
import { 
  UserCircleIcon, 
  Cog6ToothIcon, 
  ArrowRightStartOnRectangleIcon,
  ChevronDownIcon
} from "@heroicons/react/24/outline";
import NotificationDropdown from "./NotificationDropdown";

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
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-8">
          <Link href={ROUTES.HOME} className="flex items-center gap-2">
            <Image src="/assets/logo.png" alt="logo" width={32} height={32} />
            <span className="text-xl font-bold text-gray-900">Authen</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href={ROUTES.HOME} 
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Dashboard
            </Link>
            <Link 
              href="#" 
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Activity
            </Link>
            <Link 
              href="#" 
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Analytics
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {/* Notifications */}
          <NotificationDropdown />

          {/* User Menu */}
          <div className="relative" ref={dropdownRef}>
            <Button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 rounded-lg bg-white border border-gray-200 p-2 text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm transition-all"
            >
              {user?.image ? (
                <Image
                  src={user.image}
                  alt={user.name || "User"}
                  width={28}
                  height={28}
                  className="rounded-full"
                />
              ) : (
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold">
                  {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                </div>
              )}
              <span className="hidden md:inline max-w-32 truncate">
                {user?.name || "User"}
              </span>
              <ChevronDownIcon className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </Button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 rounded-lg border border-gray-200 bg-white py-2 shadow-xl ring-1 ring-black ring-opacity-5">
                <div className="border-b border-gray-100 px-4 py-3">
                  <div className="flex items-center gap-3">
                    {user?.image ? (
                      <Image
                        src={user.image}
                        alt={user.name || "User"}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold">
                        {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 truncate">{user?.name || "User"}</p>
                      <p className="text-sm text-gray-500 truncate">
                        {truncateEmail(user?.email)}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-1">
                  <Link
                    href="#"
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <UserCircleIcon className="h-5 w-5 text-gray-400" />
                    View Profile
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <Cog6ToothIcon className="h-5 w-5 text-gray-400" />
                    Account Settings
                  </Link>
                </div>
                
                <div className="border-t border-gray-100 py-1">
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <ArrowRightStartOnRectangleIcon className="h-5 w-5 text-red-500" />
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
