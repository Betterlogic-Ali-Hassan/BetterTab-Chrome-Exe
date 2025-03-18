import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SidebarItem from "../homeSidebar/SidebarItem";
import ViewIcon from "../svgs/ViewIcon";
import { GalleryThumbnails, List } from "lucide-react";

export function View() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <SidebarItem
          icon={<ViewIcon />}
          tooltip='View options'
          className='text-text opacity-60 hover:opacity-100 !p-0 rounded h-6 w-6'
          side='top'
          tooltipClassName='text-xs py-[3px] px-1.5 font-medium '
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-[183px] p-2 '>
        <DropdownMenuLabel className='text-[10px]'>
          NOTE LIST VIEW
        </DropdownMenuLabel>

        <DropdownMenuGroup>
          <DropdownMenuItem className='flex items-center gap-3 w-full text-base'>
            <GalleryThumbnails size={22} />
            Cards
          </DropdownMenuItem>
          <DropdownMenuItem className='flex items-center gap-3 w-full text-base'>
            <List size={22} />
            Snippets
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
