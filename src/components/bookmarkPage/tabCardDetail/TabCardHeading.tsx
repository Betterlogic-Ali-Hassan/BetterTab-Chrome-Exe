interface Props {
  path?: string;
  title?: string;
}
const TabCardHeading = ({ path, title }: Props) => {
  return (
    <>
      <h2 className='text-2xl font-semibold flex items-center gap-3 text-text pr-7'>
        <img
          aria-label='Favicon'
          className='w-[32px] h-[32px] flex-none rounded overflow-hidden mr-2'
          src={`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${path}/&size=32`}
        />
        <span className='max-w-[186px] truncate'>{title}</span>
      </h2>
    </>
  );
};

export default TabCardHeading;
