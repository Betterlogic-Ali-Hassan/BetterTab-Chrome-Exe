import { useEditorContext } from "@/context/EditorContext";

import { Sorting } from "./Sorting";
import { View } from "./View";
import { PlusCircleIcon } from "lucide-react";
import SidebarItem from "@/components/homeSidebar/SidebarItem";

interface Props {
  setCardView: React.Dispatch<React.SetStateAction<boolean>>;
}
const NotesSidebarActionsBtn = ({ setCardView }: Props) => {
  const { addNewNote } = useEditorContext();
  return (
    <div className='flex gap-1 items-center'>
      <SidebarItem
        icon={
          <span onClick={addNewNote} className='cursor-pointer'>
            <PlusCircleIcon size={20} />
          </span>
        }
        tooltip='Add new'
        className='text-text opacity-60 hover:opacity-100 !p-0 rounded h-6 w-6 '
        side='top'
        tooltipClassName='text-xs py-[3px] px-1.5 font-medium '
      />

      <Sorting />
      <View setCardView={setCardView} />
    </div>
  );
};

export default NotesSidebarActionsBtn;
