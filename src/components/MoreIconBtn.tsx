import { useBookmarks } from "@/context/BookmarkContext";
import { cn } from "@/lib/utils";
import MoreIcon from "./svgs/MoreIcon";
interface Props {
  className?: string;
}
const MoreIconBtn = ({ className }: Props) => {
  const { showSelectionCard, setShowCardDetail } = useBookmarks();
  const handleCardDetail = () => {
    setShowCardDetail(true);
  };
  return (
    <>
      {!showSelectionCard && (
        <button
          className={cn(
            " focus:outline-none focus-visible:ring-1 ring-inset ring-border rounded-r px-4 lg:px-3 h-14 lg:h-12 text-foreground hover:text-text",
            className
          )}
          onClick={handleCardDetail}
        >
          <MoreIcon />
        </button>
      )}
    </>
  );
};

export default MoreIconBtn;
