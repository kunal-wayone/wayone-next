import React from "react";
import Link from "next/link";
import { BiRightArrow } from "react-icons/bi";

interface AnimatedButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  label,
  href,
  onClick,
  className = "",
}) => {
  const ButtonContent = () => (
    <div className="relative group overflow-hidden inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-md bg-gradient-to-r from-blue-900 to-blue-900 hover:from-blue-800 hover:to-blue-800 transition-all duration-300 ease-out shadow shadow-gray-400">
      <span className="relative z-10 flex items-center gap-2">
        {label}
        <BiRightArrow size={18} />
      </span>
      <span className="absolute inset-0 bg-blue-900 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out z-0" />
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        <ButtonContent />
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      <ButtonContent />
    </button>
  );
};

export default AnimatedButton;
