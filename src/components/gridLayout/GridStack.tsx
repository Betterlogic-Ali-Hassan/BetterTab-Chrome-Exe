"use client";

import "gridstack/dist/gridstack.min.css";
import { useEffect, useRef, useState } from "react";
import { GridStack } from "gridstack";
import GridStackBtns from "./GridStackBtns";

const GridStackComponent = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [grid, setGrid] = useState<GridStack | null>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const gridInstance = GridStack.init(
      {
        float: true,
        column: 12,
        marginLeft: 10,
        cellHeight: "auto",
        animate: true,
      },
      gridRef.current
    );
    setGrid(gridInstance);

    return () => {
      gridInstance.destroy(false);
    };
  }, []);

  return (
    <div className='ml-[65px] w-full h-screen overflow-y-auto mb-6'>
      <GridStackBtns grid={grid} />
      <div className='grid-stack gap-2' ref={gridRef}></div>
    </div>
  );
};

export default GridStackComponent;
