import AddNewCardBtn from "./AddNewCardBtn";

import { usePageContext } from "@/context/PageContext";
import SearchIcon from "../svgs/SearchIcon";
import { useBookmarks } from "@/context/BookmarkContext";
import { useCallback, useEffect, useRef } from "react";

const Searchbar = () => {
  const { page } = usePageContext();
  const { searchTerm, setSearchTerm } = useBookmarks();
  const inputRef = useRef<HTMLInputElement>(null);

  // Memoized event handler
  const handleShortcut = useCallback((event: KeyboardEvent) => {
    if (event.ctrlKey && event.key.toLowerCase() === "k") {
      event.preventDefault();
      inputRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleShortcut);
    return () => document.removeEventListener("keydown", handleShortcut);
  }, [handleShortcut]);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='hidden lg:flex gap-4 justify-between items-center py-2  '>
      <div className='flex gap-2 grow'>
        <div className='grow flex items-center gap-2  w-full rounded border-0 bg-card  py-1.5 px-4 ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset  text-sm leading-6 whitespace-nowrap text-foreground min-h-[40px]'>
          <SearchIcon />
          <input
            type='text'
            ref={inputRef}
            name='search'
            id='search'
            placeholder='Search'
            autoFocus
            value={searchTerm}
            onChange={handleSearch}
            className='bg-transparent border-none outline-none pl-2 w-full h-full text-foreground '
          />
          <span className='ml-auto inline-block'>Ctrl + K</span>
        </div>
        {page === "home" ? <AddNewCardBtn /> : null}
      </div>
    </div>
  );
};

export default Searchbar;
