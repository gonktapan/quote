import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary";
}

const variantStyles: Record<string, string> = {
  default: "bg-blue-100 text-blue-800",
  secondary: "bg-gray-100 text-gray-800 border border-gray-300",
};

export const Badge: React.FC<BadgeProps> = ({
  className = "",
  variant = "default",
  ...props
}) => (
  <span
    className={[
      "inline-block px-3 py-1 rounded-full text-xs font-semibold",
      variantStyles[variant],
      className,
    ].join(" ")}
    {...props}
  />
);
