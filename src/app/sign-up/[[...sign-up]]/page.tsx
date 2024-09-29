import { SignUp } from "@clerk/nextjs";
import Header from "@/components/Header";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-teal-50 to-teal-100">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8 text-ascendPrimary">
            Sign up for Ascend AI
          </h1>
          <SignUp 
            signInUrl='/sign-in'
            forceRedirectUrl="/dashboard"
            appearance={{
              elements: {
                rootBox: "mx-auto",
                card: "shadow-xl",
              },
            }}
          />
        </div>
      </main>
    </div>
  );
}