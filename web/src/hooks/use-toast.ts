import { useCallback } from "react";

export interface ToastOptions {
  title: string;
  description?: string;
  variant?: "default" | "destructive";
}

export function useToast() {
  // This is a placeholder. Replace with your toast logic or connect to a UI library.
  const toast = useCallback((options: ToastOptions) => {
    if (typeof window !== "undefined") {
      window.alert(`${options.title}\n${options.description || ""}`);
    }
  }, []);

  return { toast };
}
