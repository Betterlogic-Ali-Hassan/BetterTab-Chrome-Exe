"use client";

import type React from "react";
import type { Card } from "@/types/TabCardType";
import TabCard from "../TabCard";
import ThumbnailCard from "./thumbnailView/ThumbnailCard";
import ExtensionCard from "../../extensionPage/ExtensionCard";
import ExtensionListViewCard from "../../extensionPage/ExtensionListViewCard";
import DownloadCard from "../../downloadPage/DownloadCard";

interface CardRendererProps {
  data: Card;
  isListView: boolean;
  isExtensionsPage: boolean;
  isDownloadPage: boolean;
  favoriteExe: Card[];
  setFavoriteExe: React.Dispatch<React.SetStateAction<Card[]>>;
  favorite?: boolean;
}

export default function CardRenderer({
  data,
  isListView,
  isExtensionsPage,
  favoriteExe,
  setFavoriteExe,
  isDownloadPage,
  favorite,
}: CardRendererProps) {
  if (isExtensionsPage) {
    return isListView ? (
      <ExtensionCard
        setFavoriteExe={setFavoriteExe}
        favoriteExe={favoriteExe}
        data={data}
        favorite={favorite}
      />
    ) : (
      <ExtensionListViewCard
        setFavoriteExe={setFavoriteExe}
        favoriteExe={favoriteExe}
        data={data}
        favorite={favorite}
      />
    );
  }
  if (isDownloadPage) {
    return <DownloadCard data={data} />;
  }

  return isListView ? <ThumbnailCard data={data} /> : <TabCard data={data} />;
}
