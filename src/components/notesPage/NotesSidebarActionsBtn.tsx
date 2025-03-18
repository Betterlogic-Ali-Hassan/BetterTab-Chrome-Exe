import SidebarItem from "../homeSidebar/SidebarItem";
import FilterIcon from "../svgs/FilterIcon";

import { Sorting } from "./Sorting";
import { View } from "./View";

const NotesSidebarActionsBtn = () => {
  return (
    <div className='flex gap-1 items-center'>
      <Sorting />

      <SidebarItem
        icon={<FilterIcon />}
        tooltip='Add filters'
        className='text-text opacity-60 hover:opacity-100 !p-0 rounded  h-6 w-6'
        side='top'
        tooltipClassName='text-xs py-[3px] px-1.5 font-medium '
      />
      <View />
    </div>
  );
};

export default NotesSidebarActionsBtn;
