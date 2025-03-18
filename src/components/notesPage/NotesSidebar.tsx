import NotesSidebarHeader from "./NotesSidebarHeader";
import NotesSidebarItem from "./NotesSidebarItem";

const NotesSidebar = () => {
  return (
    <div className='w-[358px] min-w-[280px] max-w-[358px]  h-screen bg-transparent ml-[64px] border-r border-border'>
      <NotesSidebarHeader />
      <div className='flex flex-col  py-1 px-4 gap-2'>
        <NotesSidebarItem selected />
        <NotesSidebarItem />
        <NotesSidebarItem />
      </div>
    </div>
  );
};

export default NotesSidebar;
