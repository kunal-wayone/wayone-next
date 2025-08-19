import HeroSection from "@/components/common/HeroSection";
import ProjectsGridSection from "@/components/common/ProjectGridSection";
import ContactUs from "@/components/ContactUs";
import IndustrySection from "@/components/IndustrySection";
import OurDevSection from "@/components/OurDevSection";
import TechSection from "@/components/TechSection";
import TestimonialSection from "@/components/TestimonialSection";
import WhyChooseUs from "@/components/WhyChooseUs";


const cardsData = [
  {
    title: "Web Development",
    logo: "/assets/images/icons/webd.png",
    description: "End-to-end web, app, and enterprise technology solutions tailored to your business needs.",
    link: "/frontend"
  },
  {
    title: "App Development",
    logo: "/assets/images/icons/appd.png",
    description: "Scalable and secure server-side APIs, databases, and core logic to power your applications.",
    link: "/backend"
  },
  {
    title: "AI Development",
    logo: "/assets/images/icons/aid.png",
    description: "Automated CI/CD pipelines, cloud infrastructure, and scalability solutions for modern systems.",
    link: "/devops"
  },
  {
    title: "Saas Development",
    logo: "/assets/images/icons/saasd.png",
    description: "Intuitive and engaging user interfaces with user-centered experience design strategies.",
    link: "/design"
  },
  {
    title: "UI/UX Development",
    logo: "/assets/images/icons/uxd.png",
    description: "Native and cross-platform mobile applications for iOS and Android with seamless UX.",
    link: "/mobile"
  },
  {
    title: "UI/UX Development",
    logo: "/assets/images/icons/uxd.png",
    description: "Intelligent solutions using machine learning, NLP, and data-driven automation.",
    link: "/ai"
  },
];


export default function Home() {
  return (
    <div>
      <HeroSection
        title1="Advanced Web & App Development"
        title2="Solutions for Your Business"
        description="We provide innovative and scalable web and mobile application solutions, developed with latest technologies and framework to improve performance, guarantee system reliability, and business efficiency across various digital platforms"
        primaryLink="/contact-us"
        secondaryLink="/about-us"
      />
      <OurDevSection
        sectionTitle="Our Core Development &Technology Services"
        sectionDescription="We offer a wide range of services to boost your online presence and business growth. "
        cardsData={cardsData}
      />
      {/* <ProjectSection /> */}
      {/* <ProjectsCards /> */}
      <ProjectsGridSection />
      <TechSection />
      <WhyChooseUs />
      <ContactUs />
      <IndustrySection />
      <TestimonialSection />
    </div>
  );
}
