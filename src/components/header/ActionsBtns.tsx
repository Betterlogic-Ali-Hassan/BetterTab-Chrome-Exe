"use client";
import { usePageContext } from "@/context/PageContext";
import { btns } from "@/constant/headerActionBtns";

import SettingIcon from "../svgs/SettingIcon";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../theme-provider";

const ActionButtons = () => {
  const { setPage } = usePageContext();

  const navigateTo = (page: string) => {
    return () => setPage(page);
  };
  const { theme, setTheme } = useTheme();
  const handleThemeChange = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <nav
      className='hidden lg:flex items-center justify-end gap-4 pr-4'
      aria-label='Action navigation'
    >
      <button
        className='text-sm text-foreground hover:text-text transition-colors'
        onClick={handleThemeChange}
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      <button className='text-sm text-foreground hover:text-text transition-colors'>
        <SettingIcon />
      </button>
      {btns.map((button, index) => (
        <button
          key={index}
          className='text-sm text-foreground hover:text-text transition-colors'
          onClick={navigateTo(button.action)}
          aria-label={button.label}
        >
          {button.icon}
        </button>
      ))}
    </nav>
  );
};

export default ActionButtons;
