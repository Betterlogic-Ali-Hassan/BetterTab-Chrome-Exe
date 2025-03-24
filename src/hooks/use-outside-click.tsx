"use client";

import { RefObject, useEffect, useRef } from "react";

export function useOutsideClick<T extends HTMLElement = HTMLElement>(
  callback: () => void,
  exceptionRef?: RefObject<HTMLButtonElement | null>
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        (!exceptionRef || !exceptionRef.current?.contains(event.target as Node)) // 👈 Check for exception
      ) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback, exceptionRef]);

  return ref;
}
