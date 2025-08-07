"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { IoCall } from "react-icons/io5";

const services = [
  {
    name: "Web Development",
    image: "/assets/images/webdev.png",
    path: "/services/web-development",
    id: "web-development", // Unique ID for submenu
  },
  {
    name: "App Development",
    image: "/assets/images/appdev.png",
    path: "/services/app-development",
    id: "app-development", // Unique ID for submenu
  },
  {
    name: "Artificial Intelligence",
    image: "/assets/images/ai.png",
    path: "/services/artificial-intelligence",
    id: "ai", // Unique ID for submenu
  },
  {
    name: "Saas Development",
    image: "/assets/images/saas.png",
    path: "/services/saas-development",
    id: "saas", // Unique ID for submenu
  },
  {
    name: "CRM Development",
    image: "/assets/images/crm.png",
    path: "/services/crm-development",
    id: "crm", // Unique ID for submenu
  },
  {
    name: "UX/UI Designing",
    image: "/assets/images/ux.png",
    path: "/services/ux-ui-designing",
    id: "ux-ui", // Unique ID for submenu
  },
  {
    name: "Digital Marketing",
    image: "/assets/images/webdev.png",
    path: "/services/digital-marketing",
    id: "digital-marketing", // Unique ID for submenu
  },
  {
    name: "API Development",
    image: "/assets/images/api.png",
    path: "/services/api-development",
    id: "api", // Unique ID for submenu
  },
];

const industries = [
  {
    id: "health-care", // Added id
    name: "Health Care",
    image: "/assets/images/serve1.png",
    path: "/industries/health-care",
  },
  {
    id: "retails-e-commerce", // Added id
    name: "Retails & E-Commerce",
    image: "/assets/images/serve3.png",
    path: "/industries/retails-e-commerce",
  },
  {
    id: "real-estate-construction", // Added id
    name: "Real Estate & Construction",
    image: "/assets/images/serve4.png",
    path: "/industries/real-estate-construction",
  },
  {
    id: "finance-banking", // Added id
    name: "Finance & Banking",
    image: "/assets/images/serve5.png",
    path: "/industries/finance-banking",
  },
  {
    id: "education-service", // Added id
    name: "Education Service",
    image: "/assets/images/serve7.png",
    path: "/industries/education-service",
  },
  {
    id: "logistic-transportation", // Added id
    name: "Logistic & Transportation",
    image: "/assets/images/serve8.png",
    path: "/industries/logistic-transportation",
  },
  {
    id: "hospitality-tourism", // Added id
    name: "Hospitality & Tourism",
    image: "/assets/images/serve9.png",
    path: "/industries/hospitality-tourism",
  },
  {
    id: "manufacturing", // Added id
    name: "Manufacturig Industries",
    image: "/assets/images/serve10.png",
    path: "/industries/manufacturig-industries",
  },
  {
    id: "technology", // Added id
    name: "Technology & Innovation",
    image: "/assets/images/serve10.png",
    path: "/industries/technology-innovation",
  },
];

const Navbar = () => {
  const pathname = usePathname(); // Get current route
  const [activeSubmenuId, setActiveSubmenuId] = useState<string | null>(null); // Track active submenu by ID
  const [, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change 50 to whatever offset you prefer
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleMouseEnter = (submenuId: string) => {
    setActiveSubmenuId(submenuId); // Set the submenu as active on hover
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setActiveSubmenuId(null); // Reset the active submenu when mouse leaves
    }, 500);
  };

  const handleClick = (submenuId: string) => {
    // Toggle submenu visibility on click (open if closed, close if already open)
    setActiveSubmenuId((prev) => (prev === submenuId ? null : submenuId));
  };

  // Define menuItems with submenus for "Services" and "Industries"
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    {
      name: "Services",
      path: "/services",
      submenu: services,
    },
    { name: "Our Work", path: "/our-work" },
    {
      name: "Industries",
      path: "/industries",
      submenu: industries,
    },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const handleLinkClick = () => setActiveSubmenuId(null);

  // const hideNav = () => {
  //   if (pathname.includes("/home/")) {
  //     return true;
  //   }
  //   return false;
  // };
  console.log(pathname);
  return (
    <nav
      // ${hideNav() ? "hidden" : ""} ${!scrolled ? "bg-transparent" : "bg-white shadow"}
      className={`absolute flex justify-center p-4 lg:p-0 lg:justify-evenly items-center lg:h-24  top-0 z-[100] w-full `}
    >
      <div>
        <Link href={"/"}>
          <Image
            src={"/assets/images/logo.svg"}
            width={150}
            height={70}
            unoptimized
            priority
            alt="Wayone"
            className="h-16 lg:h-auto"
          />
        </Link>
      </div>

      <ul
        className="hidden max-w-6xl w-3/5 lg:flex justify-between items-center relative rounded-full py-3 px-10 text-white  bg-[#215cdb8a] 
  border border-[#ffffff80] shadow-[inset_4px_4px_8px_#ffffff20,inset_-4px_-4px_8px_#ffffff10]"
      >
        {/* Inset gradient overlay */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />


        {menuItems.map((item) => (
          <div
            key={item.name}
            className="relative group"
            onMouseEnter={() => handleMouseEnter(item.name)} // Hover behavior
          >
            <Link
              href={item.path}
              className="border-none outline-none text-center hover:text-white"
            >
              <li
                className={`text-sm  text-center hover:scale-105 ${pathname.split("/")[1] === item.path.split("/")[1]
                  ? "border-b-4 border-color-primary  font-medium"
                  : "text-white  transition-all duration-300"
                  } `}
                onClick={(e) => {
                  item.submenu && e.preventDefault(); // Prevent link navigation to enable click behavior
                  handleClick(item.name); // Toggle submenu on click
                }}
              >
                {item.name}
              </li>
            </Link>

            {/* Submenu */}
            {item.submenu && (
              <div
                className={`absolute top-16 left-[-20rem] w-[60vw] mt-2 z-[10000] rounded-2xl bg-gray-100 text-gray-800 shadow ${activeSubmenuId === item.name ? "block" : "hidden"
                  }`}
                onMouseLeave={handleMouseLeave} // Reset on mouse leave
              >
                <ul className="space-y-2 p-2 grid grid-cols-1 lg:grid-cols-3">
                  {item.submenu.map((subItem: any) => (
                    <li key={subItem.id}>
                      <Link
                        href={subItem.path}
                        onClick={handleLinkClick}
                        className={`px-4 py-2 text-base text-gray-700 rounded-xl hover:bg-gray-200 hover:text-gray-700 flex justify-start items-center gap-4 ${pathname === subItem?.path + "/" &&
                          "text-white bg-blue-900"
                          }  `}
                      >
                        <span className="text-3xl rounded-full p-3 bg-white">
                          <Image
                            src={subItem?.image}
                            width={200}
                            height={200}
                            alt="Icon"
                            className="w-7 h-7 object-contain filter invert"
                          />
                        </span>
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </ul>

      <div>
        <MobileMenu />
        <Link
          href={"tel:+91 98899 88909"}
          className="border hidden lg:flex justify-center items-center  gap-1  text-xs bg-primary text-white rounded-full "
        >
          <span className="h-full border-r-1 border-dotted pl-3 pr-2 py-3">
            <IoCall size={18} />
          </span>
          <span className="pr-3 py-">
            +91 9889 9889 09
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
