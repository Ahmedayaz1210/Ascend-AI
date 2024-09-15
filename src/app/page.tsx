
import Header from "@/components/Header"
import LandingPageStarter from "@/components/LandingPageStarter"
import Features from "@/components/Features"
import Footer from "@/components/Footer"
import LandingPageBottom from "@/components/LandingPageBottom"
export default function Home() {
  return (
<div className="flex flex-col min-h-screen bg-gradient-to-br from-white via-teal-50 to-teal-100">
      <Header />
      <main className="flex-1">
        <LandingPageStarter />
        <Features />
        <LandingPageBottom />
      </main>
      <Footer />
    </div>
  );
}
