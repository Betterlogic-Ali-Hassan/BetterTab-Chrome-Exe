import Card from "./Card";

const FavoriteSection = () => {
  return (
    <Card>
      <div className='flex items-center justify-between'>
        <h2 className='text-base text-text font-medium'>Favorites</h2>
        <button className='text-[14px] opacity-80 text-text hover:opacity-100 font-medium'>
          Add
        </button>
      </div>
      <p className='text-sm text-foreground mt-1'>
        Add websites to access them in on click
      </p>
    </Card>
  );
};

export default FavoriteSection;
