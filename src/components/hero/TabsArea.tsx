import { useState } from "react";
import TabCardDetail from "./tabCardDetail/TabCardDetail";
import TabsCards from "./TabsCards";
import { Card } from "@/types/TabCardType";

interface Props {
  setShowSelectionCard: (show: boolean) => void;
  showSelectionCard: boolean;
  cards: Card[];
  selectedCards: number[];
  clearSelection: () => void;
  toggleCard: (cardId: number) => void;
  setShowCardDetail: (show: boolean) => void;
  showCardDetail: boolean;
}

const TabsArea = ({
  setShowSelectionCard,
  showSelectionCard,
  cards,
  selectedCards,
  clearSelection,
  toggleCard,
  setShowCardDetail,
  showCardDetail,
}: Props) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className='block lg:grid lg:col-span-2 lg:grid-cols-subgrid overflow-y-auto no-scrollbar lg:overflow-y-scroll overflow-x-hidden grow pb-4 lg:pb-6'>
      <TabsCards
        setShowCardDetail={setShowCardDetail}
        cards={cards}
        toggleCard={toggleCard}
        selectedCards={selectedCards}
        showSelectionCard={showSelectionCard}
        setActiveTab={setActiveTab}
      />
      <TabCardDetail
        cards={cards}
        activeTab={activeTab}
        clearSelection={clearSelection}
        selectedCards={selectedCards}
        showSelectionCard={showSelectionCard}
        setShowSelectionCard={setShowSelectionCard}
        showCardDetail={showCardDetail}
        setShowCardDetail={setShowCardDetail}
      />
    </div>
  );
};

export default TabsArea;
