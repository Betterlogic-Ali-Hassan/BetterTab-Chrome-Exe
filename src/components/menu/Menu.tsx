import { useRef, useState } from "react";
import { SearchInput } from "../addNewFolder/SearchInput";
import FavoriteSection from "./FavoriteSection";
import MostVisited from "./MostVisited";
import Recent from "./Recent";
import Workspace from "./Workspace";
import Tools from "./Tools";
import SidebarItem from "../homeSidebar/SidebarItem";
import { MenuIcon } from "lucide-react";
import { useOutsideClick } from "@/hooks/use-outside-click";

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const ref = useOutsideClick<HTMLDivElement>(() => {
    if (open) {
      setOpen(false);
    }
  }, buttonRef);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <button ref={buttonRef} onClick={handleOpen}>
        <SidebarItem
          icon={<MenuIcon />}
          tooltip='Menu'
          className='flex mt-2'
          linkSelected={open}
        />
      </button>
      {open && (
        <div
          ref={ref}
          className='bg-card  p-4 ml-[65px]  max-w-[415px] max-h-[820px] w-full h-full overflow-y-auto no-scrollbar fixed top-2 rounded-md '
        >
          <SearchInput
            className='border bg-input rounded-md h-[40px] flex items-center text-text'
            value={searchTerm}
            onChange={handleChange}
            placeholder='Search the web'
          />
          <FavoriteSection />
          <MostVisited />
          <Recent />
          <Workspace />
          <Tools />
        </div>
      )}
    </>
  );
};

export default Menu;
