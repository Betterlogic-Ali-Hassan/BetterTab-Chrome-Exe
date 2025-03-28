import SidebarItem from "@/components/homeSidebar/SidebarItem";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { colors } from "@/constant/CardColor";
import { Check } from "lucide-react";
import { IoColorPaletteSharp } from "react-icons/io5";
interface Props {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}
const CardColorSelection = ({ selectedColor, setSelectedColor }: Props) => {
  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };
  return (
    <Popover>
      <PopoverTrigger>
        <SidebarItem
          icon={
            <span className='opacity-0 group-hover:opacity-100 transition duration-200 flex rounded-[10px] items-center gap-2 bg-badge text-sm  justify-center   h-[36px] w-[36px]    hover:opacity-80 mt-1'>
              <IoColorPaletteSharp size={20} />
            </span>
          }
          tooltip='Background'
          className='h-[36px] w-[36px]'
          side='top'
        />
      </PopoverTrigger>
      <PopoverContent className=' shadow-md bg-background max-w-[155px] p-3'>
        <div className='flex flex-wrap justify-center gap-4  rounded-md'>
          {colors.map((color) => (
            <button
              key={color.value}
              className='relative w-8 h-8 rounded-full border-2 border-border flex items-center justify-center focus:outline-none '
              style={{ backgroundColor: color.value }}
              onClick={() => handleColorChange(color.value)}
              aria-label={`Select ${color.label} color`}
            >
              {selectedColor === color.value && (
                <Check
                  className={`h-4 w-4 ${
                    color.value === "#ffffff" ? "text-black" : "text-black"
                  }`}
                />
              )}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CardColorSelection;
