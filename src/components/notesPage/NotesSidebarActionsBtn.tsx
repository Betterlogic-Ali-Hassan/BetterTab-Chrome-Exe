import SidebarItem from "../homeSidebar/SidebarItem";
import SortIcon from "../svgs/SortIcon";
import FilterIcon from "../svgs/FilterIcon";
import ViewIcon from "../svgs/ViewIcon";

const NotesSidebarActionsBtn = () => {
  return (
    <div className='flex gap-1 items-center'>
      <SidebarItem
        icon={<SortIcon />}
        tooltip='Sort options'
        className='text-text opacity-60 hover:opacity-100 !p-0 rounded h-6 w-6 '
        side='top'
        tooltipClassName='text-xs py-[3px] px-1.5 font-medium '
      />
      <SidebarItem
        icon={<FilterIcon />}
        tooltip='Add filters'
        className='text-text opacity-60 hover:opacity-100 !p-0 rounded  h-6 w-6'
        side='top'
        tooltipClassName='text-xs py-[3px] px-1.5 font-medium '
      />
      <SidebarItem
        icon={<ViewIcon />}
        tooltip='View options'
        className='text-text opacity-60 hover:opacity-100 !p-0 rounded h-6 w-6'
        side='top'
        tooltipClassName='text-xs py-[3px] px-1.5 font-medium '
      />
    </div>
  );
};

export default NotesSidebarActionsBtn;
