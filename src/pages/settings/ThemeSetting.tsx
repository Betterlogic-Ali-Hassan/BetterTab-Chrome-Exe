import ThemeSelector from "@/components/settingPage/ThemeSelector";

const ThemeSetting = () => {
  return (
    <div className='px-4 py-6 sm:p-8'>
      <div className='mb-6'>
        <h2 className='text-xl font-semibold mb-6'>Appearance</h2>
        <label
          htmlFor='color-theme-select'
          className='control-label mb-2 block'
        >
          Color Theme
        </label>
        <fieldset>
          <legend className='sr-only'>Color Theme</legend>
          <div className='space-y-2'>
            <ThemeSelector
              label='System default'
              des='The default color theme of your browser or operating system'
              value='system'
            />
            <ThemeSelector value='dark' label='Dark' des='A dark color theme' />
            <ThemeSelector
              value='light'
              label='Light'
              des='A light color theme'
            />
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default ThemeSetting;
