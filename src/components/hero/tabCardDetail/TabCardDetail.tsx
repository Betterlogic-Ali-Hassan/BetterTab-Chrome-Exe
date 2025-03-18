import Badge from "@/components/ui/Badge";
import ActionsBtns from "./ActionsBtns";
import CloseBtn from "./CloseBtn";
import TabCardHeading from "./TabCardHeading";
import { cn } from "@/lib/utils";
import SelectionCard from "../selectionCard/SelectionCard";
import { Card } from "@/types/TabCardType";

interface Props {
  showCardDetail: boolean;
  setShowCardDetail: (show: boolean) => void;
  setShowSelectionCard: (show: boolean) => void;
  showSelectionCard: boolean;
  selectedCards: number[];
  clearSelection: () => void;
  cards: Card[];
  activeTab: number;
}
const TabCardDetail = ({
  showCardDetail,
  setShowCardDetail,
  setShowSelectionCard,
  showSelectionCard,
  selectedCards,
  clearSelection,
  cards,
  activeTab,
}: Props) => {
  const activeTabData = cards.find((tab) => tab.id === activeTab);
  return (
    <>
      <div
        className={cn(
          "hidden  relative  opacity-0 translate-x-[50%] transition-all duration-300",
          showCardDetail && "opacity-100 lg:block translate-x-0"
        )}
      >
        <div className='sticky top-0 left-0 w-full max-w-md min-w-72 text-white ml-2'>
          <div>
            <div className='py-5 p-6 bg-neutral-900 rounded-md'>
              <div className='relative flex flex-col gap-5'>
                <TabCardHeading
                  title={activeTabData?.title}
                  icon={activeTabData?.icon}
                />
                <div className='text-sm overflow-hidden truncate'>
                  <a
                    target='_blank'
                    rel='noopener'
                    title='Open'
                    className='text-blue-400 hover:text-blue-300'
                    href={activeTabData?.path}
                  >
                    {activeTabData?.path}
                  </a>
                </div>
                <div className='text-sm text-neutral-300'>
                  {activeTabData?.des}
                </div>
                <div className='flex flex-wrap gap-1.5 text-neutral-300'>
                  {activeTabData?.tags.map((tag, id) => (
                    <Badge text={tag} key={id} />
                  ))}
                </div>
                <div className='flex items-center gap-5'>
                  <div className='text-xs text-neutral-400'>
                    Updated on 11/20/2024
                  </div>
                  <div className='text-xs text-neutral-400'>
                    Added on 11/5/2024
                  </div>
                </div>
                <hr className='border-neutral-700' />
                <ActionsBtns />
                <CloseBtn setShowCardDetail={setShowCardDetail} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SelectionCard
        clearSelection={clearSelection}
        selectedCards={selectedCards}
        showSelectionCard={showSelectionCard}
        setShowSelectionCard={setShowSelectionCard}
      />
    </>
  );
};

export default TabCardDetail;
