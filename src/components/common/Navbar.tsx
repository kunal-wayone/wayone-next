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
    image: "/assets/images/navbar/webdev.png",
    path: "/services/web-development",
    id: "web-development", // Unique ID for submenu
  },
  {
    name: "App Development",
    image: "/assets/images/navbar/appdev.png",
    path: "/services/app-development",
    id: "app-development", // Unique ID for submenu
  },
  {
    name: "Artificial Intelligence",
    image: "/assets/images/navbar/ai.png",
    path: "/services/artificial-intelligence",
    id: "ai", // Unique ID for submenu
  },
  {
    name: "Saas Development",
    image: "/assets/images/navbar/saas.png",
    path: "/services/saas-development",
    id: "saas", // Unique ID for submenu
  },
  {
    name: "CRM Development",
    image: "/assets/images/navbar/crm.png",
    path: "/services/crm-development",
    id: "crm", // Unique ID for submenu
  },
  {
    name: "UX/UI Designing",
    image: "/assets/images/navbar/ux.png",
    path: "/services/ux-ui-designing",
    id: "ux-ui", // Unique ID for submenu
  },
  {
    name: "Digital Marketing",
    image: "/assets/images/navbar/webdev.png",
    path: "/services/digital-marketing",
    id: "digital-marketing", // Unique ID for submenu
  },
  {
    name: "API Development",
    image: "/assets/images/navbar/api.png",
    path: "/services/api-development",
    id: "api", // Unique ID for submenu
  },
];

const industries = [
  {
    id: "health-care", // Added id
    name: "Health Care",
    image: "/assets/images/navbar/serve1.png",
    path: "/industries/health-care",
  },
  {
    id: "retails-e-commerce", // Added id
    name: "Retails & E-Commerce",
    image: "/assets/images/navbar/serve3.png",
    path: "/industries/retails-e-commerce",
  },
  {
    id: "real-estate-construction", // Added id
    name: "Real Estate & Construction",
    image: "/assets/images/navbar/serve4.png",
    path: "/industries/real-estate-construction",
  },
  {
    id: "finance-banking", // Added id
    name: "Finance & Banking",
    image: "/assets/images/navbar/serve5.png",
    path: "/industries/finance-banking",
  },
  {
    id: "education-service", // Added id
    name: "Education Service",
    image: "/assets/images/navbar/serve7.png",
    path: "/industries/education-service",
  },
  {
    id: "logistic-transportation", // Added id
    name: "Logistic & Transportation",
    image: "/assets/images/navbar/serve8.png",
    path: "/industries/logistic-transportation",
  },
  {
    id: "hospitality-tourism", // Added id
    name: "Hospitality & Tourism",
    image: "/assets/images/navbar/serve9.png",
    path: "/industries/hospitality-tourism",
  },
  {
    id: "manufacturing", // Added id
    name: "Manufacturig Industries",
    image: "/assets/images/navbar/serve10.png",
    path: "/industries/manufacturig-industries",
  },
  {
    id: "technology", // Added id
    name: "Technology & Innovation",
    image: "/assets/images/navbar/serve10.png",
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
      className={`absolute flex justify-between p-2 lg:p-0 lg:justify-evenly items-center lg:h-24  top-0 z-[100] w-full `}
    >
      <div>
        <Link href={"/"}>
          <Image
            src={"/assets/images/logo.png"}
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
        className="hidden max-w-6xl w-3/5 lg:flex justify-between items-center relative rounded-full py-3 px-10 text-white  bg-[#215cdb8a] border border-[#ffffff80] shadow-[inset_4px_4px_8px_#ffffff20,inset_-4px_-4px_8px_#ffffff10]"
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
                className={`
                absolute top-16 left-[-20rem] w-[60vw] mt-2 z-[10000]
                rounded-2xl bg-blue-600/60 backdrop-blur-lg
                border border-white/20 shadow-2xl
                transition-all duration-300 ease-in-out
                ring-1 ring-white/10
                ${activeSubmenuId === item.name ? "block" : "hidden"}
              `}
                onMouseLeave={handleMouseLeave}
              >
                <ul className="space-y-2 p-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {item.submenu.map((subItem: any) => (
                    <li key={subItem.id}>
                      <Link
                        href={subItem.path}
                        onClick={handleLinkClick}
                        className={`
                          px-4 py-3 text-base rounded-2xl
                          flex justify-start items-center gap-4
                          transition-all duration-300 ease-in-out
                          bg-white/0 backdrop-blur-
                          text-white hover:text-white
                          hover:bg-white/20 hover:shadow-lg
                          hover:ring-1 hover:ring-white/30
                          hover:brightness-125
                          ${pathname === subItem?.path + "/" ? "bg-blue-800/80 shadow-inner" : ""}
                        `}
                      >
                        <span className="
                                w-14 h-14 flex items-center justify-center
                                rounded-xl bg-white/10 backdrop-blur-xl
                                shadow-md shadow-blue-300 ring-1 ring-white/20
                                hover:ring-2 hover:ring-blue-200
                                transition-all duration-300 ease-in-out
                              ">
                          <Image
                            src={subItem?.image}
                            width={200}
                            height={200}
                            alt="Icon"
                            className="w-7 h-7 object-contain   drop-shadow"
                          />
                        </span>
                        <span className="w-2/3">
                          {subItem.name}
                        </span>
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
