"use client";

import type React from "react";

import { useState } from "react";

import { cn } from "@/lib/utils";

import SidebarItem from "../homeSidebar/SidebarItem";
import FavoriteSection from "./FavoriteSection";
import MostVisited from "./MostVisited";
import Recent from "./Recent";
import Workspace from "./Workspace";
import Tools from "./Tools";
import AddNew from "./AddNew";
import RightClickMenu from "./RightClickMenu";

// Icons
import Bolt from "../svgs/Bolt";
import CrossIcon from "../svgs/CrossIcon";
import VoiceSearch from "./voiceSearch/VoiceSearch";

const Menu = () => {
  // State management
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [formValues, setFormValues] = useState({ url: "", caption: "" });
  const [favorites, setFavorites] = useState<
    { url: string; caption: string }[]
  >([]);

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

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={cn(
          "fixed top-0 left-0 ml-[64px] w-screen h-screen bg-black/20 hidden",
          open && "block"
        )}
      />

      <RightClickMenu>
        {/* Menu trigger button */}
        <button onClick={() => setOpen(!open)}>
          <SidebarItem
            icon={<Bolt />}
            tooltip='Menu'
            className='flex '
            linkSelected={open}
          />
        </button>

        <div className=' ml-[52px]  flex '>
          <div
            className={cn(
              "bg-card border border-border shadow-sm p-4 py-8 max-w-[415px] max-h-[850px]",
              "w-full h-full overflow-y-auto no-scrollbar fixed top-0 rounded-r-md",
              "opacity-0 -translate-x-[120%] transition duration-300 ease-in-out z-[1200]",
              open && "opacity-100 translate-x-[0]"
            )}
          >
            {/* Search input */}
            <VoiceSearch />

            {/* Menu sections */}
            <FavoriteSection
              setDropDownOpen={setShowDropdown}
              values={favorites}
            />
            <MostVisited />
            <Recent />
            <Workspace />
            <Tools />

            {/* Add new favorite dropdown */}
            {showDropdown && (
              <AddNew
                setShowDropdown={handleCloseDropdown}
                formValues={formValues}
                onChange={handleFormChange}
                onSubmit={handleFormSubmit}
                addFavorite={addFavorite}
              />
            )}
          </div>
          <span
            className={cn(
              "fixed top-1 z-[1600] ml-[435px] bg-input  items-center justify-center rounded-full h-[40px] w-[40px] opacity-80 hidden hover:opacity-100 cursor-pointer",
              open && "flex"
            )}
            onClick={() => setOpen(false)}
          >
            <CrossIcon />
          </span>
        </div>
      </RightClickMenu>
    </>
  );
};

export default Menu;
