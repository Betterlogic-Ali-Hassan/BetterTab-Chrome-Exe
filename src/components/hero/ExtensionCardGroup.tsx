"use client";

import type React from "react";

import { useState } from "react";
import type { Card } from "@/types/TabCardType";
import CardRenderer from "./CardRenderer";
import InfiniteScrollSentinel from "./InfiniteScrollSentinel";
import { usePageContext } from "@/context/PageContext";

interface ExtensionCardsGroupProps {
  cards: Card[];
  isListView: boolean;
  setActiveTab: (tab: number) => void;
  favoriteExe: Card[];
  setFavoriteExe: React.Dispatch<React.SetStateAction<Card[]>>;
}

const CARDS_PER_LOAD = 20;

export default function ExtensionCardsGroup({
  cards,
  isListView,

  favoriteExe,
  setFavoriteExe,
}: ExtensionCardsGroupProps) {
  const [visibleCardsCount, setVisibleCardsCount] = useState(CARDS_PER_LOAD);
  const { page } = usePageContext();
  const loadMoreCards = () => {
    setVisibleCardsCount((prevCount) =>
      Math.min(prevCount + CARDS_PER_LOAD, cards.length)
    );
  };

  const visibleCards = cards.slice(0, visibleCardsCount);
  const hasMoreCards = visibleCardsCount < cards.length;
  const isDownloadPage = page === "downloads";
  return (
    <>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-4`}
      >
        {visibleCards.map((card) => (
          <CardRenderer
            isDownloadPage={isDownloadPage}
            key={card.id}
            data={card}
            isListView={isListView}
            isExtensionsPage={true}
            favoriteExe={favoriteExe}
            setFavoriteExe={setFavoriteExe}
          />
        ))}
      </div>
      <InfiniteScrollSentinel
        onLoadMore={loadMoreCards}
        hasMore={hasMoreCards}
      />
    </>
  );
}
