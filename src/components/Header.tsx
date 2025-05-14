"use client";

import Image from "next/image";
import AuthLayout from "./AuthLayout";
import { ModeToggle } from "./ModeToggole";
import { NavigationMenuItems } from "./NavigationMenuItems";
import { MdOutlineMenu } from "react-icons/md";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
  const { isSignedIn } = useAuth();

  return (
    <header
      className={`shadow-md outline outline-black/5 py-2 bg-white dark:bg-black dark:outline-white/5`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center p-4 gap-4 h-16">
          <div>
            <Image src="file.svg" alt="Logo" width={40} height={40} />
          </div>
          <div className="max-md:hidden block">
            <NavigationMenuItems />
          </div>
          <div className="flex flex-row gap-3 items-center">
            <ModeToggle />
            {isSignedIn && (
              <div>
                <Link
                  className="px-3 py-3 rounded-xl hover:shadow hover:bg-gray-100 dark:hover:bg-white/25 transition-all"
                  href="/dashboard"
                >
                  Dashboard
                </Link>
              </div>
            )}
            <AuthLayout />
            <div className="hidden max-md:block">
              <MdOutlineMenu className="text-3xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
