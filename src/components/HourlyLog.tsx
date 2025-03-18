import AlertDialogBox from "../modals/AlertDialogBox";
import ActionBtn from "./historyPage/ActionBtn";

const HourlyLog = () => {
  return (
    <div className='flex items-center justify-between pb-[13px] pt-2 max-lg:px-2'>
      <h4 className='text-xs'>
        <strong>01:00 AM</strong>
      </h4>
      <AlertDialogBox
        trigger={<ActionBtn text='Delete' />}
        className='p-0 text-text'
      />
    </div>
  );
};

export default HourlyLog;
