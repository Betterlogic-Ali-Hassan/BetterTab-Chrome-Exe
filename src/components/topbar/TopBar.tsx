import DropDown from "./DropDown";
import TopNav from "./TopNav";
interface Props {
  setShowSelectionCard: (show: boolean) => void;
  showSelectionCard: boolean;
  selectAll: () => void;
  setShowCardDetail: (show: boolean) => void;
  clearSelection: () => void;
}
const TopBar = ({
  setShowSelectionCard,
  showSelectionCard,
  selectAll,
  setShowCardDetail,
  clearSelection,
}: Props) => {
  return (
    <>
      <div className='hidden lg:block'></div>
      <TopNav />
      <DropDown
        setShowCardDetail={setShowCardDetail}
        selectAll={selectAll}
        setShowSelectionCard={setShowSelectionCard}
        showSelectionCard={showSelectionCard}
        clearSelection={clearSelection}
      />
    </>
  );
};

export default TopBar;
