import { useState } from "react";
import { SearchInput } from "../addNewFolder/SearchInput";
import FavoriteSection from "./FavoriteSection";
import MostVisited from "./MostVisited";
import Recent from "./Recent";
import Workspace from "./Workspace";
import Tools from "./Tools";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SidebarItem from "../homeSidebar/SidebarItem";
import { MenuIcon } from "lucide-react";

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <SidebarItem
            icon={<MenuIcon />}
            tooltip='Menu'
            className='flex mt-2'
          />
        </PopoverTrigger>
        <PopoverContent className='bg-card p-4 ml-[100px] mb-[100px] max-w-[415px] w-full -mt-[345px]'>
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
        </PopoverContent>
      </Popover>
    </>
  );
};

export default Menu;
