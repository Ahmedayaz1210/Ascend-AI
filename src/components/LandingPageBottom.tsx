import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function LandingPageBottom() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-ascendPrimary mb-8">
                            Ready to transform your habits and achieve your goals?
                        </h2>
                        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 text-ascendPrimary">
                            Sign up for Ascend AI now and unlock powerful AI-driven tools designed to enhance your personal growth and drive results.
                        </p>
                    </div>
                    <div className="w-full max-w-sm space-y-2">
                        <Link href="https://tally.so/r/3ELo2N" target="_blank">
                            <Button type="submit">
                                Join Waitlist
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
