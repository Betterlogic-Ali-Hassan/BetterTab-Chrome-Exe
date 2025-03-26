import { Sun } from "lucide-react";
import ThemeCard from "./themeCard";
import { useState } from "react";
import CrossIcon from "../svgs/CrossIcon";
import { MdOutlineWbSunny } from "react-icons/md";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark" | "sunrise" | "sunset" | "system" | "forest";

const ThemeCards = () => {
  const themes: Theme[] = [
    "dark",
    "light",
    "system",
    "sunrise",
    "sunset",
    "forest",
  ];

  const [openDropDown, setOpenDropDown] = useState(false);
  const handleOpenDropDown = () => {
    setOpenDropDown(!openDropDown);
  };
  const handleCloseDropDown = () => setOpenDropDown(false);

  return (
    <>
      <button onClick={handleOpenDropDown}>
        <Sun size={22} />
      </button>

      <div
        className={cn(
          "flex flex-col gap-4 p-6 bg-card border border-border rounded-[12px] fixed w-full max-w-[300px] items-center z-[1500] top-28 right-6 pt-10 translate-x-[100%] opacity-0 transition duration-300",
          openDropDown && "translate-x-0 opacity-100"
        )}
      >
        {themes.map((theme) => (
          <ThemeCard
            key={theme}
            theme={theme}
            icon={<MdOutlineWbSunny size={17} />}
          />
        ))}

        <span
          className='absolute top-2 right-2 cursor-pointer opacity-80 hover:opacity-100'
          onClick={handleCloseDropDown}
        >
          <CrossIcon />
        </span>
      </div>
    </>
  );
};

export default ThemeCards;
