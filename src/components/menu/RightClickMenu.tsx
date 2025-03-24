"use client";

import type React from "react";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { RefObject, useRef } from "react";
interface RightClickMenuProps {
  addExceptionRef?: (ref: RefObject<HTMLDivElement | null>) => void;
  children: React.ReactNode;
}
const RightClickMenu = ({ children, addExceptionRef }: RightClickMenuProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  if (addExceptionRef && dropdownRef) {
    addExceptionRef(dropdownRef);
  }
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className='bg-white w-[200px]'>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Billing</ContextMenuItem>
        <ContextMenuItem>Team</ContextMenuItem>
        <ContextMenuItem>Subscription</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default RightClickMenu;
