import Card from "./Card";
import ShortcutBox from "./ShortcutBox";

const Recent = () => {
  return (
    <Card>
      <div className='flex items-center justify-between'>
        <h2 className='text-base text-text font-medium'>Recent Docs</h2>
        <button className='text-sm opacity-80 text-text hover:opacity-100 font-medium'>
          New doc
        </button>
      </div>
      <div className='mt-2 flex items-center gap-3'>
        <ShortcutBox text='Untitled' />
      </div>
    </Card>
  );
};

export default Recent;
