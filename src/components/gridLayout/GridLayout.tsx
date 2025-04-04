"use client";

import { useEffect, useRef } from "react";
import { GridStack } from "gridstack";
import "gridstack/dist/gridstack.min.css";
import { Hand } from "lucide-react";

export default function GridLayout() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Import GridStack dynamically to avoid SSR issues
    if (!gridRef.current) return;

    // Initialize GridStack with exact column width to match image
    const gridInstance = GridStack.init(
      {
        column: 12,
        cellHeight: 180,
        margin: 10,
        resizable: {
          handles: "se",
        },
        float: true,
        alwaysShowResizeHandle: true,
      },
      gridRef.current
    );

    // Clean up on unmount
    return () => {
      gridInstance.destroy(false);
    };
  }, []);

  return (
    <div className='flex flex-col gap-4 ml-[65px] w-full'>
      <div className='grid-stack overflow-auto max-h-[80vh]' ref={gridRef}>
        {/* Item 1 - Large center item */}
        <div className='grid-stack-item' gs-x='0' gs-y='2' gs-w='8' gs-h='4'>
          <div className='grid-stack-item-content flex items-center justify-center bg-card rounded-md shadow-sm border border-border'>
            <span className='text-3xl font-semibold'>1</span>
          </div>
        </div>

        {/* Item 2 - Top left */}
        <div className='grid-stack-item' gs-x='0' gs-y='0' gs-w='4' gs-h='2'>
          <div className='grid-stack-item-content flex items-center justify-center bg-card rounded-md shadow-sm border border-border'>
            <span className='text-3xl font-semibold'>2</span>
          </div>
        </div>

        {/* Item 7 - Bottom large item */}
        <div className='grid-stack-item' gs-x='0' gs-y='6' gs-w='8' gs-h='5'>
          <div className='grid-stack-item-content flex items-center justify-center bg-card rounded-md shadow-sm border border-border'>
            <span className='text-3xl font-semibold'>7</span>
          </div>
        </div>

        {/* Item 9 - Top right small */}
        <div className='grid-stack-item' gs-x='4' gs-y='0' gs-w='4' gs-h='1'>
          <div className='grid-stack-item-content flex items-center justify-center bg-card rounded-md shadow-sm border border-border'>
            <span className='text-3xl font-semibold'>9</span>
          </div>
        </div>

        {/* Item 10 - Middle right small */}
        <div className='grid-stack-item' gs-x='4' gs-y='1' gs-w='4' gs-h='1'>
          <div className='grid-stack-item-content flex items-center justify-center bg-card rounded-md shadow-sm border border-border'>
            <span className='text-3xl font-semibold'>10</span>
          </div>
        </div>

        {/* Drag me item */}
        <div className='grid-stack-item' gs-x='8' gs-y='0' gs-w='4' gs-h='2'>
          <div className='grid-stack-item-content flex flex-col items-center justify-center bg-card rounded-md shadow-sm border border-border'>
            <Hand className='h-10 w-10 text-indigo-600 mb-2' />
            <span className='text-xl font-medium text-indigo-600'>
              Drag me!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
