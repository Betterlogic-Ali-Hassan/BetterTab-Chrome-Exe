import { notes } from "@/constant/Notes";
import NotesSidebarActionsBtn from "./NotesSidebarActionsBtn";

interface Props {
  setCardView: React.Dispatch<React.SetStateAction<boolean>>;
}
const NotesSidebarHeader = ({ setCardView }: Props) => {
  const notesLength = notes.length;
  return (
    <div className='pt-8 pl-4 pb-2 pr-3'>
      <h1 className='text-2xl font-semibold text-text'>Notes</h1>
      <div className='flex justify-between items-center py-0.5 mt-1'>
        <div className='text-sm text-text opacity-50'>{notesLength} notes</div>
        <NotesSidebarActionsBtn setCardView={setCardView} />
      </div>
    </div>
  );
};

export default NotesSidebarHeader;
