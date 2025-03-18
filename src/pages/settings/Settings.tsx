import SettingPageFooter from "@/components/settingPage/SettingPageFooter";
import Sidebar from "@/components/settingPage/Sidebar";

import Tips from "./Tips";
import Account from "./Account";
import TagSetting from "./TagSetting";
import ThemeSetting from "./ThemeSetting";
import ImportSetting from "./ImportSetting";
import ExportSettings from "./ExportSettings";
import Integration from "./Integration";
import { useState } from "react";
import CrossIcon from "@/components/svgs/CrossIcon";
import { DialogClose } from "@/components/ui/dialog";

const Settings = () => {
  const [currentPage, setCurrentPage] = useState("tag");

  return (
    <div className=' flex flex-col items-center text-sm'>
      <div className='w-full max-w-4xl bg-card  md:bg-transparent md:dark:bg-transparent'>
        <div className='flex items-center justify-between'>
          <button className='px-4 py-6 md:p-8 text-text flex items-center gap-3'>
            <span className='text-2xl leading-1 font-semibold text-white'>
              Settings
            </span>
          </button>
          <DialogClose className='bg-card p-3 rounded-full text-text opacity-80 hover:opacity-100'>
            <CrossIcon />
          </DialogClose>
        </div>
        <div className='bg-card  text-text shadow-sm dark:bg-shadow-none ring-1 ring-border  md:rounded-lg dark:border-y dark:md:border border-border   md:flex'>
          <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <main className='md:grow flex flex-col'>
            {currentPage === "tips" && <Tips />}
            {currentPage === "tag" && <TagSetting />}
            {currentPage === "theme" && <ThemeSetting />}
            {currentPage === "import" && <ImportSetting />}
            {currentPage === "export" && <ExportSettings />}
            {currentPage === "integration" && <Integration />}
            {currentPage === "account" && <Account />}
            <SettingPageFooter />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Settings;
