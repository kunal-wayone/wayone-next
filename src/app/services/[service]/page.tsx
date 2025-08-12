import HeroServiceSection from "@/components/common/HeroServiceSection";
import ProjectsCards from "@/components/common/ProjectsCards";
import ContactUs from "@/components/ContactUs";
import IndustrySection from "@/components/IndustrySection";
import KeyChallenges from "@/components/KeyChallenges";
import TechSection from "@/components/TechSection";
import TestimonialSection from "@/components/TestimonialSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import WorkFlowSection from "@/components/WorkFlowSection";


// const cardsData = [
//   {
//     title: "Web Development",
//     logo: "/assets/images/icons/web.png",
//     description: "End-to-end web, app, and enterprise technology solutions tailored to your business needs.",
//     link: "/frontend"
//   },
//   {
//     title: "Backend Development",
//     logo: "/assets/images/icons/app.png",
//     description: "Scalable and secure server-side APIs, databases, and core logic to power your applications.",
//     link: "/backend"
//   },
//   {
//     title: "DevOps & Cloud",
//     logo: "/assets/images/icons/ai.png",
//     description: "Automated CI/CD pipelines, cloud infrastructure, and scalability solutions for modern systems.",
//     link: "/devops"
//   },
//   {
//     title: "UI/UX Design",
//     logo: "/assets/images/icons/saas.png",
//     description: "Intuitive and engaging user interfaces with user-centered experience design strategies.",
//     link: "/design"
//   },
//   {
//     title: "Mobile App Development",
//     logo: "/assets/images/icons/ui.png",
//     description: "Native and cross-platform mobile applications for iOS and Android with seamless UX.",
//     link: "/mobile"
//   },
//   {
//     title: "AI & Machine Learning",
//     logo: "/assets/images/icons/ui.png",
//     description: "Intelligent solutions using machine learning, NLP, and data-driven automation.",
//     link: "/ai"
//   },
// ];



const key = [
  {
    id: 0,
    name: "Mobile Health",
    industry: "Health",
    image: "/assets/images/key1.png",
    description: "Unifi Cars specializes in the buying and selling of used cars. With a wide selection of quality pre-owned vehicles, they ensure a smooth and transparent process for both sellers and buyers."
  },
  {
    id: 1,
    name: "Mobile Health",
    industry: "Health",
    image: "/assets/images/key1.png",
    description: "Unifi Cars specializes in the buying and selling of used cars. With a wide selection of quality pre-owned vehicles, they ensure a smooth and transparent process for both sellers and buyers."
  },
  {
    id: 2,
    name: "Mobile Health",
    industry: "Health",
    image: "/assets/images/key1.png",
    description: "Unifi Cars specializes in the buying and selling of used cars. With a wide selection of quality pre-owned vehicles, they ensure a smooth and transparent process for both sellers and buyers."
  },
  {
    id: 3,
    name: "Mobile Health",
    industry: "Health",
    image: "/assets/images/key1.png",
    description: "Unifi Cars specializes in the buying and selling of used cars. With a wide selection of quality pre-owned vehicles, they ensure a smooth and transparent process for both sellers and buyers."
  },
  {
    id: 4,
    name: "Mobile Health",
    industry: "Health",
    image: "/assets/images/key1.png",
    description: "Unifi Cars specializes in the buying and selling of used cars. With a wide selection of quality pre-owned vehicles, they ensure a smooth and transparent process for both sellers and buyers."
  },
  {
    id: 5,
    name: 'Mobile Health',
    industry: 'Health',
    image: '/assets/images/key2.png',
    description: "Unifi Cars specializes in the buying and selling of used cars. With a wide selection of quality pre-owned vehicles, they ensure a smooth and transparent process for both sellers and buyers."
  },
  {
    id: 6,
    name: 'Data Security & Privacy',
    industry: 'IT',
    image: '/assets/images/key3.png',
    description: "Unifi Cars specializes in the buying and selling of used cars. With a wide selection of quality pre-owned vehicles, they ensure a smooth and transparent process for both sellers and buyers."
  },

];


export default function Home() {
  return (
    <div>
      <HeroServiceSection />
      <KeyChallenges
        subtitle="Meet the Team"
        title="Our Amazing"
        colorTitle="Crew"
        description="We are passionate professionals."
        team={key}
        rtl={true}
      />
      <WorkFlowSection />
      <ProjectsCards />
      <TechSection />
      <WhyChooseUs />
      <ContactUs />
      <IndustrySection />
      <TestimonialSection />
    </div>
  );
}
