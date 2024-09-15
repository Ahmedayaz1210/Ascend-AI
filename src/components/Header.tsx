import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 sm:h-20 md:h-24 flex items-center">
      <Link className="flex items-center" href="#">
        <Image
          src="/ascend-ai.png"
          alt="Ascend AI Logo"
          width={80}
          height={80}
          className="w-[50px] h-[35px] sm:w-[50px] sm:h-[35px] md:w-[90px] md:h-[60px] mr-2 sm:mr-3 md:mr-4 mt-6 ml-8"
        />
        <span className="text-lg sm:text-xl md:text-3xl font-semibold md:font-bold text-ascendPrimary mt-6">Ascend AI</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {/* Add the following code snippet to the Header when launching the web app */}
        {/* <Link className="text-sm font-medium hover:underline underline-offset-4 text-primary" href="#">
          Sign Up
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4 text-primary" href="#">
          Sign In
        </Link> */}
      </nav>
    </header>
  )
}