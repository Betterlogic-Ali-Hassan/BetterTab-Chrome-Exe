import { Card } from "@/types/TabCardType";
import TabCard from "./TabCard";

interface Props {
  setShowCardDetail: (show: boolean) => void;
  cards: Card[];
  toggleCard: (cardId: number) => void;
  selectedCards: number[];
  showSelectionCard: boolean;
  setActiveTab: (tab: number) => void;
}
const TabsCards = ({
  setShowCardDetail,
  cards,
  toggleCard,
  selectedCards,
  showSelectionCard,
  setActiveTab,
}: Props) => {
  return (
    <div>
      <div className='flex flex-col gap-2 px-1.5 lg:px-0 mt-2 lg:mt-0'>
        {cards.map((data, index) => (
          <TabCard
            key={index}
            data={data}
            setShowCardDetail={setShowCardDetail}
            id={data.id}
            toggleCard={toggleCard}
            selected={selectedCards.includes(data.id)}
            showSelectionCard={showSelectionCard}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>
    </div>
  );
};

export default TabsCards;
