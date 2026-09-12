
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ScheduleMeeting from "@/components/ScheduleMeeting";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
     
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <ScheduleMeeting />
      <ProjectsSection />
      <Footer />
    </main>
  );
}