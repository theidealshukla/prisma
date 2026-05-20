import Hero from "@/components/modern/Hero";
import RecentProjects from "@/components/modern/RecentProjects";
import WhyChooseUs from "@/components/modern/WhyChooseUs";
import Services from "@/components/modern/Services";
import Testimonials from "@/components/modern/Testimonials";
import Footer from "@/components/modern/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <RecentProjects />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}
