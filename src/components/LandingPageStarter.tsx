import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react";

export default function LandingPageStarter() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-end space-y-4 md:space-y-0 md:space-x-8  lg:ml-12">
          <div className="flex flex-col items-start space-y-4 text-left md:w-1/2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-teal-600 via-blue-500 to-purple-600 text-transparent bg-clip-text">
          Elevate Your Habits with AI-Powered Guidance
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 text-ascendPrimary">
              At Ascend AI, we're dedicated to revolutionizing the way individuals develop and maintain positive habits. Our mission is to provide an intuitive and powerful AI-driven habit tracking platform that empowers you to create meaningful and lasting personal growth.
            </p>
            <Link href="https://tally.so/r/3ELo2N" target="_blank">
              <Button className="mt-4">
                Join Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/mountain_ascend.png"
              alt="AI-Powered Habit Guidance"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}