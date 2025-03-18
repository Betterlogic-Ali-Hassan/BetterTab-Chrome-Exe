const Badge = ({ text }: { text: string }) => {
  return (
    <button className='inline-block px-2 py-1 text-xs font-semibold bg-neutral-700 rounded-full hover:text-white '>
      {text}
    </button>
  );
};

export default Badge;
