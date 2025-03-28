"use client";

import { useEffect, useRef } from "react";
import type React from "react";

import { cn } from "@/lib/utils";
import type { Card } from "@/types/TabCardType";
import { useHeaderContext } from "@/context/HeaderContext";

import CardRenderer from "./CardRenderer";
import HourlyLog from "@/components/historyPage/HourlyLog";

interface CardGroupProps {
  cards: Card[];
  isListView: boolean;
  isExtensionsPage: boolean;
  isDownloadPage: boolean;
  isShowHourlyLog: boolean;
  showHourlyLogAfter: boolean;
  favoriteExe: Card[];
  setFavoriteExe: React.Dispatch<React.SetStateAction<Card[]>>;
  favorite?: boolean;
}

export default function CardGroup({
  cards,
  isListView,
  isExtensionsPage,
  isShowHourlyLog,
  showHourlyLogAfter,
  favoriteExe,
  setFavoriteExe,
  isDownloadPage,
  favorite,
}: CardGroupProps) {
  const containerClasses = cn(
    "flex flex-col gap-2 px-1.5 lg:px-0 mt-2 lg:mt-0 ",
    isListView && "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-4"
  );

  const groupRef = useRef<HTMLDivElement>(null);
  const { setCurrentHeader } = useHeaderContext();

  // Get time and date from the first card in the group
  const time = cards[0]?.time || "";
  const date = cards[0]?.date || "";

  // Set up intersection observer to update header when this group is visible
  useEffect(() => {
    if (!isShowHourlyLog || !time || !date) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCurrentHeader({ date, time });
        }
      },
      { threshold: 0.2 }
    );

    if (groupRef.current) {
      observer.observe(groupRef.current);
    }

    return () => {
      if (groupRef.current) {
        observer.unobserve(groupRef.current);
      }
    };
  }, [date, time, isShowHourlyLog, setCurrentHeader]);

  return (
    <div ref={groupRef}>
      <div className={containerClasses}>
        {cards.map((card) => (
          <CardRenderer
            favorite={favorite}
            key={card.id}
            isDownloadPage={isDownloadPage}
            data={card}
            isListView={isListView}
            isExtensionsPage={isExtensionsPage}
            favoriteExe={favoriteExe}
            setFavoriteExe={setFavoriteExe}
          />
        ))}
      </div>
      {isShowHourlyLog && showHourlyLogAfter && <HourlyLog />}
    </div>
  );
}
