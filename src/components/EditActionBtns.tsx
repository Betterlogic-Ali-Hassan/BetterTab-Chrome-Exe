import { usePageContext } from "@/context/PageContext";
import AlertDialogBox from "../modals/AlertDialogBox";
import { useBookmarks } from "@/context/BookmarkContext";
import { DialogClose } from "./ui/dialog";
import Bin from "./svgs/Bin";
interface Props {
  savBtnAction?: () => void;
}
const EditActionBtns = ({ savBtnAction }: Props) => {
  const { setDialogOpen } = usePageContext();
  const { setShowCardDetail } = useBookmarks();

  const handleBack = () => {
    setShowCardDetail(false);
    setDialogOpen(false);
  };
  return (
    <div className='flex items-center justify-end gap-x-3 border-t border-border  px-4 py-4 sm:px-8'>
      <AlertDialogBox
        onClick={handleBack}
        className='btn secondary flex items-center gap-x-1.5 rounded'
        trigger={
          <>
            <Bin />
            Delete
          </>
        }
      />
      <DialogClose
        className='btn  inline-flex rounded done-btn'
        onClick={savBtnAction}
      >
        Save
      </DialogClose>
    </div>
  );
};

export default EditActionBtns;
