"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

interface AccordionItemProps {
  content: [];
  title: string;
  diffColor?: boolean;
  handleLinkClick?: any;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  diffColor,
  handleLinkClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-3 lg:py-0 border-b border-white/20 lg:border-none"
      >
        <div className="flex justify-between items-center lg:text-gray-800/70 hover:text-gray-500">
          <h2 className="text-lg lg:text-sm font-medium lg:font-none">{title}</h2>
          <p className="text-lg font-medium">
            {isOpen ? (
              <RiArrowDropUpLine size={35} />
            ) : (
              <RiArrowDropDownLine size={35} />
            )}
          </p>
        </div>
      </button>
      <div
        className={`duration-200 ease-linear ${!isOpen ? "max-h-0 overflow-y-hidden" : "max-h-auto"
          }`}
      >
        <div className={`py-2 ${diffColor ? "" : "bg-gray-50"} space-y-3 mt-2`}>
          {content.map((link: any) => (
            <li key={link.href} className="text-[15px] lg:text-xs pl-4 lg:pl-2 list-disc">
              <Link
                aria-label={link.label}
                className="hover:underline"
                href={link.href}
                onClick={handleLinkClick && handleLinkClick}
                passHref
              >
                {link.label}
              </Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({
  sidebar,
  services,
  diffColor,
  handleLinkClick,
}: {
  services: any;
  sidebar?: boolean;
  diffColor?: boolean;
  handleLinkClick?: any;
}) => {
  return (
    <div className={`w-full mx-auto ${!sidebar && "pb-4 md:hidden"}`}>
      {services.map((service: any) => (
        <React.Fragment key={service.title}>
          <AccordionItem
            title={service.title}
            diffColor={diffColor}
            content={service.links}
            handleLinkClick={handleLinkClick}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Accordion;
