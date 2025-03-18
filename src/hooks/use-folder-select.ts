"use client"

import { SelectFolderData } from "@/constant/selectFoloderData"
import type React from "react"

import { useState } from "react"


export function useFolderSelect() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selected, setSelected] = useState<string>("Bookmark bar")
  const [openPopover, setOpenPopover] = useState(false)

  const filteredFolders = SelectFolderData.filter((folder) => folder.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleSelect = (folder: string) => {
    setSelected(folder)
    setOpenPopover(false)
  }

  return {
    searchTerm,
    selected,
    openPopover,
    filteredFolders,
    handleSearch,
    handleSelect,
    setOpenPopover,
  }
}

