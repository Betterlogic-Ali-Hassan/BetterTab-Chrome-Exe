import Alert from "@/components/settingPage/Alert";

const ImportSetting = () => {
  return (
    <div className='px-4 py-6 sm:p-8'>
      <h2 className='text-xl font-semibold mb-6'>Import Bookmarks</h2>
      <p className='mb-6 text-text'>
        Import bookmarks from an HTML file exported from another app or browser.
      </p>
      <Alert title='This feature is only available with a paid subscription.' />
    </div>
  );
};

export default ImportSetting;
