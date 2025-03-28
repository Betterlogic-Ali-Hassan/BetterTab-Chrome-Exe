"use client";
import { useHeaderContext } from "@/context/HeaderContext";

import ActionBtn from "./ActionBtn";
import AlertDialogBox from "@/modals/AlertDialogBox";

const HourlyLog = () => {
  const { currentHeader } = useHeaderContext();

  return (
    <div className='flex items-center justify-between pb-[13px] pt-2 max-lg:px-2'>
      <h4 className='text-xs font-bold'>{currentHeader.time || "01:00 AM"}</h4>
      <AlertDialogBox
        trigger={<ActionBtn text='Delete' />}
        className='p-0 text-delete-text'
      />
    </div>
  );
};

export default HourlyLog;
