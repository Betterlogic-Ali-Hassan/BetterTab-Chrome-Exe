import { useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import TopBar from "./components/topbar/TopBar";
import { tabsData } from "./constant/tabsData";
import { Card } from "./types/TabCardType";

const App = () => {
  const cards: Card[] = tabsData;
  const [showSelectionCard, setShowSelectionCard] = useState(false);
  const [showCardDetail, setShowCardDetail] = useState(false);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const toggleCard = (id: number) => {
    setSelectedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };
  const selectAll = () => {
    setSelectedCards(cards.map((_, card) => card));
  };
  const clearSelection = () => {
    setSelectedCards([]);
  };

  return (
    <div className='flex flex-col lg:grid lg:grid-cols-[1fr_minmax(20rem,48rem)_minmax(20rem,1fr)] lg:grid-rows-[auto_auto_1fr] relative h-screen w-screen  bg-black text-white '>
      <Header />
      <TopBar
        selectAll={selectAll}
        setShowSelectionCard={setShowSelectionCard}
        showSelectionCard={showSelectionCard}
        setShowCardDetail={setShowCardDetail}
        clearSelection={clearSelection}
      />
      <Hero
        toggleCard={toggleCard}
        clearSelection={clearSelection}
        selectedCards={selectedCards}
        cards={cards}
        showSelectionCard={showSelectionCard}
        setShowSelectionCard={setShowSelectionCard}
        showCardDetail={showCardDetail}
        setShowCardDetail={setShowCardDetail}
      />
    </div>
  );
};

export default App;
