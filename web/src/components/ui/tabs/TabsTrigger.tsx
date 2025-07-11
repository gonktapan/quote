import React from "react";
import { useTabsContext } from "./Tabs";

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export const TabsTrigger: React.FC<TabsTriggerProps> = ({ value, className = "", children, ...props }) => {
  const { value: activeValue, setValue } = useTabsContext();
  const isActive = activeValue === value;
  return (
    <button
      type="button"
      className={[
        "px-4 py-2 text-sm font-medium border-b-2 transition-colors",
        isActive ? "border-blue-600 text-blue-600" : "border-transparent text-gray-600 hover:text-blue-600 hover:border-blue-300",
        className,
      ].join(" ")}
      aria-selected={isActive}
      onClick={() => setValue(value)}
      {...props}
    >
      {children}
    </button>
  );
};
