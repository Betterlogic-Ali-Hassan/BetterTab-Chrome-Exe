import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SidebarItem from "../../homeSidebar/SidebarItem";
import SortIcon from "../../svgs/SortIcon";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";

export function Sorting() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <SidebarItem
          icon={<SortIcon />}
          tooltip='Sort options'
          className='text-text opacity-60 hover:opacity-100 !p-0 rounded h-6 w-6 '
          side='top'
          tooltipClassName='text-xs py-[3px] px-1.5 font-medium '
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-[183px] p-2 '>
        <DropdownMenuLabel className='text-[10px] uppercase text-text'>
          Sort by
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem className='flex items-center justify-between w-full text-sm'>
            <span className='text-sm text-text'>Title</span>
            <div className='flex'>
              <IoIosArrowRoundUp size={16} className='-mr-2' />
              <IoIosArrowRoundDown size={16} />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className='text-text'>
            Date Updated
          </DropdownMenuItem>
          <DropdownMenuItem className='text-text'>
            Date Created
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className='bg-home-sidebar-hover mt-2' />
        <DropdownMenuGroup>
          <DropdownMenuItem className='text-brand'>
            Show notes in groups
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
