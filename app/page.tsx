import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import ContactForm from "@/components/main/ContactForm";
import NewProjects from "@/components/main/NewProjects";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <NewProjects />
        <ContactForm />
      </div>
    </main>
  );
}
