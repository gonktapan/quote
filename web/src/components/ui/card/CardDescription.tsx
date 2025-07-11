
import React from "react";

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const CardDescription: React.FC<CardDescriptionProps> = ({ className = "", ...props }) => (
  <p className={["text-gray-500 text-sm", className].join(" ")} {...props} />
);
