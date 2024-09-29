"use client";
import Link from "next/link"
import Image from "next/image"
import { useAuth, UserButton } from "@clerk/nextjs"

const clerkAppearance = {
  elements: {
    avatarBox: {
      width: '40px',
      height: '40px',
    },
    userButtonAvatarBox: {
      width: '40px',
      height: '40px',
    },
  },
};

export default function Header() {
  const { isSignedIn } = useAuth()

  return (
    <header className="px-4 lg:px-6 h-14 sm:h-20 md:h-24 flex items-center justify-between">
      <Link className="flex items-center" href="/">
        <Image
          src="/ascend-ai.png"
          alt="Ascend AI Logo"
          width={120}
          height={120}
          className="w-[70px] h-[50px] sm:w-[80px] sm:h-[60px] md:w-[120px] md:h-[90px] mr-2 sm:mr-3 md:mr-4 mt-6 ml-8"
        />
        <span className="text-lg sm:text-xl md:text-3xl font-semibold md:font-bold text-ascendPrimary mt-6">Ascend AI</span>
      </Link>
      
      <div className="flex items-center">
        {!isSignedIn && (
          <nav className="flex gap-4 sm:gap-6 mr-4">
            <Link className="text-sm font-medium hover:underline underline-offset-4 text-ascendPrimary" href="/sign-up">
              Sign Up
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4 text-ascendPrimary" href="/sign-in">
              Sign In
            </Link>
          </nav>
        )}
        <UserButton appearance={clerkAppearance} />
      </div>
    </header>
  )
}