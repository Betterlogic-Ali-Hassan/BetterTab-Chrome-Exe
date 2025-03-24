import AlertDialogBox from "../../modals/AlertDialogBox";
import ActionBtn from "./ActionBtn";

const HourlyLog = () => {
  return (
    <div className='flex items-center justify-between pb-[13px] pt-2 max-lg:px-2'>
      <h4 className='text-xs font-bold'>01:00 AM</h4>
      <AlertDialogBox
        trigger={<ActionBtn text='Delete' />}
        className='p-0  text-delete-text'
      />
    </div>
  );
};

export default HourlyLog;
