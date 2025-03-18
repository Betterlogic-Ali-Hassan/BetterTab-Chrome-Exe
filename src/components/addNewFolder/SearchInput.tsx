"use client";

import type React from "react";

import { Search } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export function SearchInput({
  value,
  onChange,
  placeholder = "Search folders...",
}: SearchInputProps) {
  return (
    <div className='p-2 py-0 border-b'>
      <div className='relative'>
        <Search className='absolute left-1 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground' />
        <input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className='pl-[28px] border-0 shadow-none w-full outline-none text-sm h-9 bg-transparent'
        />
      </div>
    </div>
  );
}
