import React, { useState, createContext, useContext, ReactNode } from "react";

interface TabsContextProps {
  value: string;
  setValue: (value: string) => void;
}

const TabsContext = createContext<TabsContextProps | undefined>(undefined);

export interface TabsProps {
  defaultValue: string;
  children: ReactNode;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ defaultValue, children, className = "" }) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={["w-full", className].join(" ")}>{children}</div>
    </TabsContext.Provider>
  );
};

export const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within <Tabs>");
  }
  return context;
};
