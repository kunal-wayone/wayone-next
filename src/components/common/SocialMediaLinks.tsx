import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const SocialMediaLinks = ({ size }: { size?: number }) => {
  const socialLinks = [
    {
      href: "https://www.instagram.com/wayone.india/",
      icon: (
        <FaInstagram
          size={size ?? 20}
          className="text-primary hover:text-primary"
        />
      ),
      label: "Instagram",
    },
    {
      href: "https://www.facebook.com/wayone.india",
      icon: (
        <FaFacebook
          size={size ?? 20}
          className="text-primary hover:text-primary"
        />
      ),
      label: "Facebook",
    },
    // {
    //   href: "https://twitter.com",
    //   icon: (
    //     <FaTwitter
    //       size={size ?? 20}
    //       className="text-white hover:text-primary"
    //     />
    //   ),
    //   label: "Twitter",
    // },
    // {
    //   href: "https://www.linkedin.com/company/aboveallagency/?viewAsMember=true",
    //   icon: (
    //     <FaLinkedinIn
    //       size={size ?? 20}
    //       className="text-white hover:text-primary"
    //     />
    //   ),
    //   label: "LinkedIn",
    // },
    // {
    //   href: "https://in.pinterest.com/aboveallagency/",
    //   icon: (
    //     <FaPinterest
    //       size={size ?? 20}
    //       className="text-white hover:text-primary"
    //     />
    //   ),
    //   label: "Pinterest",
    // },
  ];

  return (
    <div className="flex justify-start space-x-6 mt-2 text-xl">
      {socialLinks.map((social) => (
        <Link
          aria-label={social.label}
          target="_blank"
          rel="noopener noreferrer"
          key={social.label}
          href={social.href}
          passHref
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
