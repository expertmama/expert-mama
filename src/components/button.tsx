import React from "react";

type ButtonVariant = "blue" | "orange" | "glass";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  blue: `
    bg-gradient-to-r from-blue-800 via-blue-900 to-blue-950
    hover:bg-gradient-to-br
    text-white
  `,
  orange: `
    bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700
    hover:bg-gradient-to-br
    text-white
  `,
  glass: `
    glass
    text-gray-700
    hover:scale-105
  `,
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "blue",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        font-medium rounded-xl
        text-sm px-6 py-3
        leading-5 text-center
        transition-all duration-300
        hover:-translate-y-1
        cursor-pointer
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
