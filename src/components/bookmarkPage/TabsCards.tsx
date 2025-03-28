"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import type { Card } from "@/types/TabCardType";
import { cn } from "@/lib/utils";
import { useThumbnailToggler } from "@/context/ThumbnailTogglerContext";
import { usePageContext } from "@/context/PageContext";

import HourlyLog from "../historyPage/HourlyLog";
import CardGroup from "./thumbnails/CardGroup";
import InfiniteScrollSentinel from "../InfiniteScrollSentinel";
import { useHeaderContext } from "@/context/HeaderContext";

interface TabsCardsProps {
  cards: Card[];
}

const TabsCards = ({ cards }: TabsCardsProps) => {
  const { isListView } = useThumbnailToggler();
  const [favoriteExe, setFavoriteExe] = useState<Card[]>([]);
  const { page } = usePageContext();
  const { setCurrentHeader } = useHeaderContext();
  const isShowHourlyLog = page === "history";
  const isExtensionsPage = page === "extensions";
  const isDownloadPage = page === "downloads";
  const INITIAL_CARDS_COUNT = isExtensionsPage ? 20 : 100;
  const CARDS_PER_LOAD = isExtensionsPage ? 20 : 40;
  const [visibleCardsCount, setVisibleCardsCount] =
    useState(INITIAL_CARDS_COUNT);

  const loadMoreCards = useCallback(() => {
    setVisibleCardsCount((prevCount) =>
      Math.min(prevCount + CARDS_PER_LOAD, cards.length)
    );
  }, [cards.length]);

  // Filter out cards that are in favorites from the normal list
  const filteredCards = useMemo(() => {
    if (isExtensionsPage) {
      const favoriteIds = new Set(favoriteExe.map((card) => card.id));
      return cards.filter((card) => !favoriteIds.has(card.id));
    }
    return cards;
  }, [cards, favoriteExe, isExtensionsPage]);

  const visibleCards = useMemo(() => {
    return filteredCards.slice(0, visibleCardsCount);
  }, [filteredCards, visibleCardsCount]);

  // Group cards by time and date
  const cardGroups = useMemo(() => {
    if (!isShowHourlyLog) {
      return [visibleCards];
    }

    // Group cards by time and date
    const groups: Record<string, Card[]> = {};

    visibleCards.forEach((card) => {
      if (card.time && card.date) {
        const key = `${card.date}-${card.time}`;
        if (!groups[key]) {
          groups[key] = [];
        }
        groups[key].push(card);
      } else {
        // For cards without time/date, use a default group
        const key = "default";
        if (!groups[key]) {
          groups[key] = [];
        }
        groups[key].push(card);
      }
    });

    // Convert to array and sort by date and time (newest first)
    return Object.values(groups).sort((a, b) => {
      if (!a[0].date || !a[0].time) return 1;
      if (!b[0].date || !b[0].time) return -1;

      const dateA = new Date(`${a[0].date} ${a[0].time}`).getTime();
      const dateB = new Date(`${b[0].date} ${b[0].time}`).getTime();
      return dateB - dateA;
    });
  }, [visibleCards, isShowHourlyLog]);

  // Initialize header with the first card's date and time
  useEffect(() => {
    if (cards.length > 0 && cards[0].date && cards[0].time) {
      setCurrentHeader({
        date: cards[0].date,
        time: cards[0].time,
      });
    }
  }, [cards, setCurrentHeader]);

  const hasMoreCards = visibleCardsCount < filteredCards.length;

  return (
    <div className={cn(isListView && "max-w-[970px]")}>
      {isShowHourlyLog && <HourlyLog />}

      {isExtensionsPage && favoriteExe.length > 0 && (
        <div className='mb-12'>
          <CardGroup
            favorite
            cards={favoriteExe}
            isListView={isListView}
            isExtensionsPage={isExtensionsPage}
            isShowHourlyLog={false}
            showHourlyLogAfter={false}
            favoriteExe={favoriteExe}
            setFavoriteExe={setFavoriteExe}
            isDownloadPage={isDownloadPage}
          />
        </div>
      )}

      {cardGroups.map((group, index) => (
        <CardGroup
          key={`group-${index}`}
          cards={group}
          isListView={isListView}
          isExtensionsPage={isExtensionsPage}
          isDownloadPage={isDownloadPage}
          isShowHourlyLog={isShowHourlyLog}
          showHourlyLogAfter={index < cardGroups.length - 1}
          favoriteExe={favoriteExe}
          setFavoriteExe={setFavoriteExe}
        />
      ))}

      <InfiniteScrollSentinel
        onLoadMore={loadMoreCards}
        hasMore={hasMoreCards}
      />
    </div>
  );
};

export default TabsCards;
