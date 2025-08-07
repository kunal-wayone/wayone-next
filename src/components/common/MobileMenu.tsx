"use client";

import Link from "next/link";
import Accordion from "./FooterAccordion";
import { IoIosMenu } from "react-icons/io";
import { useEffect, useState } from "react";
import SocialMediaLinks from "./SocialMediaLinks";
import Image from "next/image";

export const footerTabs = [
  { id: 1, label: "Privacy Policy", path: "/privacy-policy" },
  {
    id: 2,
    label: "Terms And Conditions",
    path: "/terms-and-conditions",
  },
];

export const services = [
  {
    title: "IT Services",
    links: [
      {
        label: "Web Development",
        image: "/assets/webdev.png",
        href: "/services/web-development",
        id: "web-development", // Unique ID for submenu
      },
      {
        label: "App Development",
        image: "/assets/appdev.png",
        href: "/services/app-development",
        id: "app-development", // Unique ID for submenu
      },
      {
        label: "Artificial Intelligence",
        image: "/assets/ai.png",
        href: "/services/artificial-intelligence",
        id: "ai", // Unique ID for submenu
      },
      {
        label: "Saas Development",
        image: "/assets/saas.png",
        href: "/services/saas-development",
        id: "saas", // Unique ID for submenu
      },
      {
        label: "CRM Development",
        image: "/assets/crm.png",
        href: "/services/crm-development",
        id: "crm", // Unique ID for submenu
      },
      {
        label: "UX/UI Designing",
        image: "/assets/ux.png",
        href: "/services/ux-ui-designing",
        id: "ux-ui", // Unique ID for submenu
      },
      {
        label: "Digital Marketing",
        image: "/assets/webdev.png",
        href: "/services/digital-marketing",
        id: "digital-marketing", // Unique ID for submenu
      },
      {
        label: "API Development",
        image: "/assets/api.png",
        href: "/services/api-development",
        id: "api", // Unique ID for submenu
      },
    ],
  },
  {
    title: "Industries",
    links: [
      {
        id: "health-care",
        label: "Health Care",
        image: "/assets/images/serve1.png",
        href: "/industries/health-care",
      },
      {
        id: "retails-e-commerce",
        label: "Retails & E-Commerce",
        image: "/assets/images/serve3.png",
        href: "/industries/retails-e-commerce",
      },
      {
        id: "real-estate-construction",
        label: "Real Estate & Construction",
        image: "/assets/images/serve4.png",
        href: "/industries/real-estate-construction",
      },
      {
        id: "finance-banking",
        label: "Finance & Banking",
        image: "/assets/images/serve5.png",
        href: "/industries/finance-banking",
      },
      {
        id: "education-service",
        label: "Education Service",
        image: "/assets/images/serve7.png",
        href: "/industries/education-service",
      },
      {
        id: "logistic-transportation",
        label: "Logistic & Transportation",
        image: "/assets/images/serve8.png",
        href: "/industries/logistic-transportation",
      },
      {
        id: "hospitality-tourism",
        label: "Hospitality & Tourism",
        image: "/assets/images/serve9.png",
        href: "/industries/hospitality-tourism",
      },
 
      {
        id: "manufacturing",
        label: "Manufacturig Industries",
        image: "/assets/images/serve10.png",
        href: "/industries/manufacturig-industries",
      },
      {
        id: "technology",
        label: "Technology & Innovation",
        image: "/assets/images/serve10.png",
        href: "/industries/technology-innovation",
      },
    ]
  },
];

export const SidebarTabs = [
  { id: 1, label: "About Us", path: "/about-us" },
  { id: 5, label: "Our Work", path: "/our-work" },
  { id: 2, label: "Contact Us", path: "/contact-us" },
  { id: 3, label: "Privacy Policy", path: "/privacy-policy" },
  {
    id: 4,
    label: "Terms And Conditions",
    path: "/terms-and-conditions",
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // prevent overflow
    } else document.body.style.overflow = "scroll";
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative font-[poppins]">
      <div
        className={`fixed top-0 right-0 h-full bg-gray-50 text-primary z-50 transform ${isOpen ? "w-[85%] md:w-3/4" : "w-0"
          } transition-all duration-500 ease-in-out`}
      >
        <div className="bg-gray-50 text-gray-50">
          <div className="flex p-3 shadow-md z-50 justify-between items-center">
            <Link href={"/"}>
              <Image
                src={"/assets/images/logo.png"}
                width={150}
                height={70}
                unoptimized
                priority
                alt="Wayone"
                className="w-3/4"
              />
            </Link>
            <p className="font-extrabold text-2xl" onClick={toggleSidebar}>
              x
            </p>
          </div>
          <div className="p-4 pb-40 bg-gray-50 text-gray-900 overflow-auto h-screen">
            <Link
              href={"/"}
              aria-label={"Home"}
              onClick={handleLinkClick}
              className="relative text-lg font-medium inline-block py-3 border-b w-full border-white/20 cursor-pointer"
            >
              Home
            </Link>
            <Accordion
              sidebar={true}
              services={services}
              handleLinkClick={handleLinkClick}
            />
            {SidebarTabs.map((item) => (
              <div key={item.id} className="relative group">
                <Link
                  href={item.path}
                  aria-label={item.label}
                  onClick={handleLinkClick}
                  className="relative text-lg font-medium inline-block py-3 border-b w-full border-white/20 cursor-pointer"
                >
                  {item.label}
                </Link>
              </div>
            ))}
            <div className="py-4">
              <p className="pb-2">Follow us at:</p>
              <SocialMediaLinks size={30} />
            </div>
          </div>
        </div>
      </div>
      <IoIosMenu
        size={30}
        onClick={toggleSidebar}
        className="lg:hidden text-primary"
      />
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
