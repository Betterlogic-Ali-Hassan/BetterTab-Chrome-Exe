import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Plus, Maximize } from "lucide-react";
import { GridStack } from "gridstack";
interface Props {
  grid: GridStack | null;
}
const GridStackBtns = ({ grid }: Props) => {
  const [itemCount, setItemCount] = useState(0);
  // Grid size options
  const sizeOptions = [
    { width: 2, height: 2, label: "2x2" },
    { width: 2, height: 4, label: "2x4" },
    { width: 4, height: 4, label: "4x4" },
    { width: 4, height: 2, label: "4x2" },
  ];
  const addNewItem = (width: number, height: number) => {
    if (!grid) return;

    const newCount = itemCount + 1;

    grid.addWidget({
      w: width,
      h: height,
      content: `Widget ${newCount}`,
    });

    setItemCount(newCount);
  };
  const autoAdjustGrid = () => {
    if (!grid) return;
    grid.compact();
  };
  return (
    <div className='flex gap-2 mb-4 p-4 border-b border-border'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' className='hover:bg-hover'>
            <Plus className='mr-2 h-4 w-4' />
            Add New
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='bg-card'>
          {sizeOptions.map((option) => (
            <DropdownMenuItem
              key={option.label}
              onClick={() => addNewItem(option.width, option.height)}
              className='focus:bg-background'
            >
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Button
        variant='outline'
        className='hover:bg-hover'
        onClick={autoAdjustGrid}
      >
        <Maximize className='mr-2 h-4 w-4' />
        Auto Adjust
      </Button>
    </div>
  );
};

export default GridStackBtns;
