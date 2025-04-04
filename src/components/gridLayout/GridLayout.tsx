"use client";

import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';
import { useEffect, useRef, useState } from 'react';
import Widget from './Widget';
import Button from '../ui/my-button';

export default function GridLayout() {
  let grid = GridStack.init();
  const [items, setItems] = useState<{ id: number; w: number; h: number }[]>([
    { id: 0, w: 10, h: 2 },
    { id: 1, w: 2, h: 2 },
    { id: 2, w: 10, h: 4 },
    { id: 3, w: 2, h: 4 },
  ]);
  const itemsRef = useRef(new Map());
  const getMap = () => itemsRef.current;
  const [count, setCount] = useState(4);

  const addCustomWidget = (w: number, h: number) => {
    setItems((prev) => [...prev, { id: count, w, h }]);
    setCount((prev) => prev + 1);

    setTimeout(() => {
      grid.makeWidget(getMap().get(count));
    }, 5);
  };

  useEffect(() => {
    grid = GridStack.init({ float: true });
  }, []);

  const autoAdjustGrid = () => {
    grid.compact();
  };

  return (
    <div className='mt-4 ml-[65px] w-full'>
      <div className='flex items-center gap-2 ml-4 mt-4'>
        <Button className='px-6' onClick={() => addCustomWidget(2, 2)}>2x2</Button>
        <Button className='px-6' onClick={() => addCustomWidget(10, 2)}>2x10</Button>
        <Button className='px-6' onClick={() => addCustomWidget(10, 4)}>4x10</Button>
        <Button className='px-6' onClick={() => addCustomWidget(2, 4)}>2x4</Button>
        <Button className='px-6' onClick={autoAdjustGrid}>Auto</Button>
      </div>
      <div className='grid-stack' style={{ width: '100%', maxHeight: '90vh', overflow: 'auto' }}>
        {items.map((cat) => (
          <div
            key={cat.id}
            className='grid-stack-item'
            gs-w={cat.w.toString()}
            gs-h={cat.h.toString()}
            ref={(node) => {
              const map = getMap();
              if (node) {
                map.set(cat.id, node);
              } else {
                map.delete(cat.id);
              }
            }}
          >
            <div className='grid-stack-item-content'>
              <Widget />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
