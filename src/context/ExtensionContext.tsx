"use client";

import type { Card } from "@/types/TabCardType";
import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useEffect,
} from "react";

import { extensions } from "@/constant/extensionData";

export type FilterType = "all" | "enabled" | "disabled" | "pinned" | string;
type ExtensionContextType = {
  activeFilter: FilterType;
  filteredExtensions: Card[];
  setActiveFilter: (filter: FilterType) => void;
  toggleEnabled: (id: number) => void;
  enabledExtensions: Set<number>;
  pinnedExtensions: Set<number>;
  togglePinned: (id: number) => void;
};

// Create the context
const ExtensionContext = createContext<ExtensionContextType | undefined>(
  undefined
);

// Create a provider component
export function ExtensionProvider({ children }: { children: ReactNode }) {
  const [extensionsData] = useState<Card[]>(extensions);

  const [enabledExtensions, setEnabledExtensions] = useState<Set<number>>(
    new Set()
  );

  const [pinnedExtensions, setPinnedExtensions] = useState<Set<number>>(
    new Set()
  );

  // Filter state
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [filteredExtensions, setFilteredExtensions] =
    useState<Card[]>(extensionsData);

  // Toggle extension enabled state
  const toggleEnabled = (id: number) => {
    const newEnabledExtensions = new Set(enabledExtensions);
    if (newEnabledExtensions.has(id)) {
      newEnabledExtensions.delete(id);
    } else {
      newEnabledExtensions.add(id);
    }
    setEnabledExtensions(newEnabledExtensions);
  };

  // Toggle extension pinned state
  const togglePinned = (id: number) => {
    const newPinnedExtensions = new Set(pinnedExtensions);
    if (newPinnedExtensions.has(id)) {
      newPinnedExtensions.delete(id);
    } else {
      newPinnedExtensions.add(id);
    }
    setPinnedExtensions(newPinnedExtensions);
  };

  // Update filtered extensions whenever the filter or extension states change
  useEffect(() => {
    let filtered = [...extensionsData]; // Create a copy to avoid mutation issues

    if (activeFilter === "enabled") {
      filtered = extensionsData.filter((ext) => enabledExtensions.has(ext.id));
    } else if (activeFilter === "disabled") {
      filtered = extensionsData.filter((ext) => !enabledExtensions.has(ext.id));
    } else if (activeFilter === "pinned") {
      filtered = extensionsData.filter((ext) => pinnedExtensions.has(ext.id));
    } else if (activeFilter !== "all") {
      filtered = extensionsData.filter((ext) =>
        ext.tags?.some?.((tag) => tag.id === activeFilter)
      );
    }

    setFilteredExtensions(filtered);
  }, [activeFilter, enabledExtensions, pinnedExtensions, extensionsData]);

  // Context value
  const value: ExtensionContextType = {
    activeFilter,
    filteredExtensions,
    setActiveFilter,
    toggleEnabled,
    enabledExtensions,
    pinnedExtensions,
    togglePinned,
  };

  return (
    <ExtensionContext.Provider value={value}>
      {children}
    </ExtensionContext.Provider>
  );
}

export function useExtensionContext() {
  const context = useContext(ExtensionContext);
  if (context === undefined) {
    throw new Error(
      "useExtensionContext must be used within a ExtensionProvider"
    );
  }
  return context;
}
