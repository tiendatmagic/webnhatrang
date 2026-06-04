import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Pricing } from "@/components/pricing";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Footer } from "@/components/footer";
import { FloatingContact } from "@/components/floating-contact";

export default function Home() {
  return (
    <>
      {/* Header Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-1 w-full">
        {/* Hero Banner Section */}
        <Hero />
        
        {/* Experience Section */}
        <Experience />
        
        {/* Services Bento Grid Section */}
        <Services />

        {/* Pricing List Section */}
        <Pricing />
        
        {/* Process Steps Section */}
        <Process />
      </main>
      
      {/* Footer and Consultation Form Section */}
      <Footer />
      
      {/* Fixed Call-to-actions buttons */}
      <FloatingContact />
    </>
  );
}
