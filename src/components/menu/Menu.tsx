"use client";

import type React from "react";

import { useRef, useState } from "react";
import { SearchInput } from "../addNewFolder/SearchInput";
import FavoriteSection from "./FavoriteSection";
import MostVisited from "./MostVisited";
import Recent from "./Recent";
import Workspace from "./Workspace";
import Tools from "./Tools";
import SidebarItem from "../homeSidebar/SidebarItem";

import { useOutsideClick } from "@/hooks/use-outside-click";
import { cn } from "@/lib/utils";
import CrossIcon from "../svgs/CrossIcon";
import AddNew from "./AddNew";
import RightClickMenu from "./RightClickMenu";
import Bolt from "../svgs/Bolt";

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [formValues, setFormValues] = useState({
    url: "",
    caption: "",
  });
  const { url, caption } = formValues;
  const [values, setValues] = useState<{ url: string; caption: string }[]>([]);

  const addFavorite = () => {
    if (!url.trim() || !caption.trim()) return;
    setValues((prev) => [...prev, { url, caption }]);
  };

  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formValues);

    setFormValues({ url: "", caption: "" });
    setShowDropdown(false);
  };

  const handleCloseDropdown = () => {
    setFormValues({ url: "", caption: "" });
    setShowDropdown(false);
  };

  const { ref } = useOutsideClick<HTMLDivElement>(() => {
    if (open) {
      setOpen(false);
    }
  }, buttonRef);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <RightClickMenu>
      <div
        className={cn(
          "fixed top-0 left-0 w-screen h-screen bg-black/20 hidden",
          open && "block"
        )}
      ></div>
      <button ref={buttonRef} onClick={handleOpen}>
        <SidebarItem
          icon={<Bolt />}
          tooltip='Menu'
          className='flex mt-2'
          linkSelected={open}
        />
      </button>

      <div className='relative'>
        <div
          ref={ref}
          className={cn(
            "bg-card border border-border shadow-sm p-4 ml-[75px] py-8 max-w-[415px] max-h-[850px] w-full h-full overflow-y-auto no-scrollbar fixed top-2 rounded-md opacity-0 -translate-x-[120%] transition duration-300 ease-in-out",
            open && "opacity-100 translate-x-[0]"
          )}
          style={{ zIndex: 1200 }}
        >
          <SearchInput
            className='border bg-input rounded-md h-[40px] flex items-center text-text'
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder='Search the web'
          />
          <FavoriteSection setDropDownOpen={setShowDropdown} values={values} />
          <MostVisited />
          <Recent />
          <Workspace />
          <Tools />
          <span
            className='absolute top-1 right-2 opacity-80 hover:opacity-100 cursor-pointer'
            onClick={() => setOpen(false)}
          >
            <CrossIcon />
          </span>
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
      </div>
    </RightClickMenu>
  );
};

export default Menu;
