interface Props {
  text: string;
  onClick?: () => void;
}
const Badge = ({ text, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className='inline-block px-3 py-1.5 text-xs font-semibold bg-badge rounded-full text-text opacity-80 hover:opacity-100'
    >
      {text}
    </button>
  );
};

export default Badge;
