
import React from "react";

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const CardTitle: React.FC<CardTitleProps> = ({ className = "", ...props }) => (
  <h3 className={["text-lg font-bold text-gray-900", className].join(" ")} {...props} />
);
