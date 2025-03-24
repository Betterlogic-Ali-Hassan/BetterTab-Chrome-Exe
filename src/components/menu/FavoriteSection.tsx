import Card from "./Card";
import ShortcutBox from "./ShortcutBox";

type Props = {
  setDropDownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  values: { url: string; caption: string }[];
};
const FavoriteSection = ({ setDropDownOpen, values }: Props) => {
  const handleDropDown = () => {
    setDropDownOpen(true);
  };
  return (
    <Card>
      <div className='flex items-center justify-between'>
        <h2 className='text-base text-text font-medium'>Favorites</h2>
        <button
          className='text-[14px] opacity-80 text-text hover:opacity-100 font-medium'
          onClick={handleDropDown}
        >
          Add
        </button>
      </div>
      <p className='text-sm text-foreground mt-1'>
        Add websites to access them in on click
      </p>
      <div className='grid grid-cols-5 gap-3  mt-2'>
        {values.map((value, index) => (
          <ShortcutBox text={value.caption} key={index} />
        ))}
      </div>
    </Card>
  );
};

export default FavoriteSection;
