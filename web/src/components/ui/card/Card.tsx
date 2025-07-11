import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({ className = "", ...props }) => (
  <div
    className={
      [
        "bg-white rounded-xl shadow border border-gray-200",
        className
      ].join(" ")
    }
    {...props}
  />
);

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent: React.FC<CardContentProps> = ({ className = "", ...props }) => (
  <div className={["p-4", className].join(" ")} {...props} />
);
