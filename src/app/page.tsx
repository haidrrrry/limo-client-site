import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ServiceGrid from "@/components/ServiceGrid";
import FleetGrid from "@/components/FleetGrid";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-gold selection:text-black">
      <Navbar />
      <Hero />
      <Features />
      <ServiceGrid />
      <FleetGrid />
      <Testimonials />
      <FAQ />
      <BookingForm />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
