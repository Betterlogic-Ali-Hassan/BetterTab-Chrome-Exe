"use client";

import type React from "react";
import { createContext, useContext, useState } from "react";

type Favorite = {
  url: string;
  caption: string;
};

type FormValues = {
  url: string;
  caption: string;
};

type MenuContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
  showDropdown: boolean;
  setShowDropdown: (show: boolean) => void;
  formValues: FormValues;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
  favorites: Favorite[];
  setFavorites: React.Dispatch<React.SetStateAction<Favorite[]>>;
  addFavorite: () => void;
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: (e: React.FormEvent) => void;
  handleCloseDropdown: () => void;
  toggleMenu: () => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>({
    url: "",
    caption: "",
  });
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  const addFavorite = () => {
    const { url, caption } = formValues;
    if (!url.trim() || !caption.trim()) return;

    setFavorites((prev) => [...prev, { url, caption }]);
    handleCloseDropdown();
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addFavorite();
  };

  const handleCloseDropdown = () => {
    setFormValues({ url: "", caption: "" });
    setShowDropdown(false);
  };

  const toggleMenu = () => setOpen(!open);

  const value = {
    open,
    setOpen,
    showDropdown,
    setShowDropdown,
    formValues,
    setFormValues,
    favorites,
    setFavorites,
    addFavorite,
    handleFormChange,
    handleFormSubmit,
    handleCloseDropdown,
    toggleMenu,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
}
