import HeroSection from "@/components/common/HeroSection";
import ProjectsCards from "@/components/common/ProjectsCards";
import ContactUs from "@/components/ContactUs";
import IndustrySection from "@/components/IndustrySection";
import OurDevSection from "@/components/OurDevSection";
import TechSection from "@/components/TechSection";
import TestimonialSection from "@/components/TestimonialSection";
import WhyChooseUs from "@/components/WhyChooseUs";


const cardsData = [
  {
    title: "Web Development",
    logo: "/assets/images/icons/web.png",
    description: "End-to-end web, app, and enterprise technology solutions tailored to your business needs.",
    link: "/frontend"
  },
  {
    title: "Backend Development",
    logo: "/assets/images/icons/app.png",
    description: "Scalable and secure server-side APIs, databases, and core logic to power your applications.",
    link: "/backend"
  },
  {
    title: "DevOps & Cloud",
    logo: "/assets/images/icons/ai.png",
    description: "Automated CI/CD pipelines, cloud infrastructure, and scalability solutions for modern systems.",
    link: "/devops"
  },
  {
    title: "UI/UX Design",
    logo: "/assets/images/icons/saas.png",
    description: "Intuitive and engaging user interfaces with user-centered experience design strategies.",
    link: "/design"
  },
  {
    title: "Mobile App Development",
    logo: "/assets/images/icons/ui.png",
    description: "Native and cross-platform mobile applications for iOS and Android with seamless UX.",
    link: "/mobile"
  },
  {
    title: "AI & Machine Learning",
    logo: "/assets/images/icons/ui.png",
    description: "Intelligent solutions using machine learning, NLP, and data-driven automation.",
    link: "/ai"
  },
];


export default function Home() {
  return (
    <div>
      <HeroSection />
      <OurDevSection
        sectionTitle="Our Core Development &Technology Services"
        sectionDescription="We offer a wide range of services to boost your online presence and business growth. "
        cardsData={cardsData}
      />
      <ProjectsCards />
      <TechSection />
      <WhyChooseUs />
      <ContactUs />
      <IndustrySection />
      <TestimonialSection />
    </div>
  );
}
