"use client";

import { type RefObject, useEffect, useRef, useState } from "react";

export function useOutsideClick<T extends HTMLElement = HTMLElement>(
  callback: () => void,
  exceptionRef?: RefObject<HTMLButtonElement | null>
) {
  const ref = useRef<T>(null);
  const [exceptionRefs, setExceptionRefs] = useState<RefObject<HTMLElement>[]>(
    []
  );

  // Function to add additional exception refs
  const addExceptionRef = (newRef: RefObject<HTMLElement>) => {
    setExceptionRefs((prev) => [...prev, newRef]);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is inside the main ref
      if (ref.current && ref.current.contains(event.target as Node)) {
        return;
      }

      // Check if the click is inside the button exception ref
      if (
        exceptionRef &&
        exceptionRef.current &&
        exceptionRef.current.contains(event.target as Node)
      ) {
        return;
      }

      // Check if the click is inside any of the additional exception refs
      for (const exceptRef of exceptionRefs) {
        if (
          exceptRef.current &&
          exceptRef.current.contains(event.target as Node)
        ) {
          return;
        }
      }

      // If we get here, the click is outside all refs, so call the callback
      callback();
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback, exceptionRef, exceptionRefs]);

  return { ref, addExceptionRef };
}
