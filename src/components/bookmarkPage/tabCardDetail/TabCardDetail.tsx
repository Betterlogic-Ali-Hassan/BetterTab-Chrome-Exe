import Badge from "@/components/ui/Badge";
import ActionsBtns from "./ActionsBtns";
import CloseBtn from "./CloseBtn";
import TabCardHeading from "./TabCardHeading";
import { cn } from "@/lib/utils";
import SelectionCard from "../selectionCard/SelectionCard";
import { useBookmarks } from "@/context/BookmarkContext";
import { Card } from "@/types/TabCardType";

interface Props {
  cards: Card[];
}
const TabCardDetail = ({ cards }: Props) => {
  const { showCardDetail, activeTab } = useBookmarks();
  const activeTabData = cards.find((tab) => tab.id === activeTab);
  return (
    <>
      <div
        className={cn(
          "hidden  relative   opacity-0 translate-x-[50%] transition-all duration-300 ",
          showCardDetail && "opacity-100 lg:block translate-x-0"
        )}
      >
        <div className='sticky top-0 left-0 w-full  lg:max-w-md min-w-72 max-h-[328px] min-h-[328px] text-white ml-2'>
          <div>
            <div className='py-5 p-6 bg-card  rounded-[16px] max-h-[328px] min-h-[328px]'>
              <div className='relative flex flex-col gap-[18px]'>
                <TabCardHeading
                  title={activeTabData?.title}
                  path={activeTabData?.path}
                />
                <div className='text-sm overflow-hidden truncate'>
                  <a
                    target='_blank'
                    rel='noopener'
                    title='Open'
                    className='text-brand hover:text-brand-hover '
                    href={activeTabData?.path}
                  >
                    {activeTabData?.path}
                  </a>
                </div>
                <div className='text-sm text-text '>{activeTabData?.des}</div>
                <div className='flex flex-wrap gap-1.5 text-text '>
                  {activeTabData?.tags.map((tag, id) => (
                    <Badge text={tag.name} key={id} />
                  ))}
                </div>
                <div className='flex items-center gap-5'>
                  <div className='text-xs text-text '>
                    Updated on 11/20/2024
                  </div>
                  <div className='text-xs text-text '>Added on 11/5/2024</div>
                </div>
                <hr className='border-neutral-200 dark:border-neutral-700' />
                <ActionsBtns activeTabData={activeTabData} />
                <CloseBtn />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SelectionCard />
    </>
  );
};

export default TabCardDetail;
