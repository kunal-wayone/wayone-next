import HeroSection from "@/components/common/HeroSection";
import ProjectsCards from "@/components/common/ProjectsCards";
import ContactUs from "@/components/ContactUs";
import IndustrySection from "@/components/IndustrySection";
import KeyChallenges from "@/components/KeyChallenges";
import OurTeamSection from "@/components/OurTeamSection";
import TechSection from "@/components/TechSection";
import TestimonialSection from "@/components/TestimonialSection";
import VisionSection from "@/components/VisionSection";
import WhoWeAre from "@/components/WhoWeAre";
import WhyChooseUs from "@/components/WhyChooseUs";


const team = [
  {
    id: 0,
    name: "Amit Gupta",
    role: "CEO",
    image: "/assets/images/sekh1.png",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, quae molestiae? Aspernatur, iure ea sunt fugiat quas magnam alias ipsa tenetur est culpa sit quisquam, incidunt impedit repellendus necessitatibus laudantium."
  },
  {
    id: 1,
    name: 'Alice Smith',
    role: 'UI/UX Designer',
    image: '/assets/images/sekh1.png',
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, quae molestiae? Aspernatur, iure ea sunt fugiat quas magnam alias ipsa tenetur est culpa sit quisquam, incidunt impedit repellendus necessitatibus laudantium."
  },
  {
    id: 2,
    name: 'Bob Johnson',
    role: 'Frontend Developer',
    image: '/assets/images/sekh1.png',
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, quae molestiae? Aspernatur, iure ea sunt fugiat quas magnam alias ipsa tenetur est culpa sit quisquam, incidunt impedit repellendus necessitatibus laudantium."
  },
  {
    id: 3,
    name: 'Carol Williams',
    role: 'Project Manager',
    image: '/assets/images/sekh1.png',
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, quae molestiae? Aspernatur, iure ea sunt fugiat quas magnam alias ipsa tenetur est culpa sit quisquam, incidunt impedit repellendus necessitatibus laudantium."
  }
];


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
    <div className="">
      <HeroSection
        title1="Discover Who We Are – Your Dedicated Partner"
        title2="in Technological Innovation and Excellence"
        description="We utilize Advanced technologies to build scalable, high-performance solutions that facilitate business revolution. Our professional team provides precision-engineered products, ensuring that integration and optimization across all digital platforms are smooth for sustainable growth"
        primaryLink="/contact-us"
        secondaryLink="/our-work"
        secondaryLinkTitle="Explore Works"
      />
      <WhoWeAre
        title="Innovators in"
        colorTitle=" Web & App Development"
        subtitle="Who We Are"
        description="As web and app development innovators, we are experts at designing bespoke digital solutions that deliver business success. Our team combines creativity with the latest technology to develop scalable, user-friendly websites and mobile apps, providing smooth functionality and improved user experiences that enable businesses to remain competitive in the digital world."
        buttonText="Learn More"
        onButtonClick={'/'}
        imageSrc="/assets/images/about.png"
        reverse={false}
        containerClass="bg-white p-6 lg:p-16"
        textClass="text-gray-800"
        imageClass="rounded-xl shadow-lg"
      />
      <VisionSection />
      <OurTeamSection
        subtitle="Meet Our Team"
        title="The Minds "
        colorTitle="Behind Innovation"
        description="Our team is a dynamic mix of thinkers, creators, and problem-solvers. Each member brings a unique set of skills and expertise to the table, contributing to our ability to push boundaries and deliver exceptional solutions. We’re passionate about technology and are dedicated to helping businesses succeed. With years of experience in IT and development, our team is committed to creating the future, one project at a time."
        team={team}
      />

      <KeyChallenges
        subtitle="Meet the Team"
        title="Our Amazing"
        colorTitle="Crew"
        description="We are passionate professionals."
        team={key}
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
