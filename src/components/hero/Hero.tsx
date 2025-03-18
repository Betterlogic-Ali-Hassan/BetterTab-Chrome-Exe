import { Card } from "@/types/TabCardType";
import Categories from "./Categories";
import TabsArea from "./TabsArea";

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
const Hero = ({
  setShowSelectionCard,
  showSelectionCard,
  cards,
  selectedCards,
  clearSelection,
  toggleCard,
  setShowCardDetail,
  showCardDetail,
}: Props) => {
  return (
    <>
      <Categories />
      <TabsArea
        toggleCard={toggleCard}
        clearSelection={clearSelection}
        selectedCards={selectedCards}
        cards={cards}
        showSelectionCard={showSelectionCard}
        setShowSelectionCard={setShowSelectionCard}
        showCardDetail={showCardDetail}
        setShowCardDetail={setShowCardDetail}
      />
    </>
  );
};

export default Hero;
