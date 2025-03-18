import AccountDeleteAlert from "@/modals/AccountDeleteAlert";
import Alert from "@/components/settingPage/Alert";

const Account = () => {
  return (
    <div className='px-4 py-6 sm:p-8'>
      <div className='mb-6'>
        <h2 className='text-xl font-semibold mb-6'>Account</h2>
        <table className='table-auto mb-6'>
          <tbody>
            <tr>
              <td className='pr-4 py-1'>Email:</td>
              <td>JonDoe@gmail.com</td>
            </tr>
            <tr>
              <td className='pr-4 py-1'>Plan:</td>
              <td>Free</td>
            </tr>
            <tr>
              <td className='pr-4 py-1'>Bookmarks:</td>
              <td>0</td>
            </tr>
            <tr>
              <td className='pr-4 py-1'>Tags:</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
        <Alert title='Upgrade your account to an annual subscription to use all features and get unlimited bookmarks.' />

        <AccountDeleteAlert />
      </div>
    </div>
  );
};

export default Account;
