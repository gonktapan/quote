import React from "react";
import { useTabsContext } from "./Tabs";

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const TabsContent: React.FC<TabsContentProps> = ({ value, className = "", children, ...props }) => {
  const { value: activeValue } = useTabsContext();
  if (activeValue !== value) return null;
  return (
    <div className={["p-4", className].join(" ")} {...props}>
      {children}
    </div>
  );
};
