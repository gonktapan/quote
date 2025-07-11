import React from "react";
import { useTabsContext } from "./Tabs";

export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TabsList: React.FC<TabsListProps> = ({ className = "", ...props }) => (
  <div className={["flex border-b border-gray-200", className].join(" ")} {...props} />
);
