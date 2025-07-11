
import React from "react";

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent: React.FC<CardContentProps> = ({ className = "", ...props }) => (
  <div className={["p-6", className].join(" ")} {...props} />
);
