
import React from "react";

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader: React.FC<CardHeaderProps> = ({ className = "", ...props }) => (
  <div className={["px-6 pt-6 pb-2 border-b border-gray-200", className].join(" ")} {...props} />
);
