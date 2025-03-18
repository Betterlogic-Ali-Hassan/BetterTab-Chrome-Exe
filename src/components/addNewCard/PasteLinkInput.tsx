import { Loader2 } from "lucide-react";
import { useState } from "react";
import ActionBtns from "./ActionBtns";
import { cn } from "@/lib/utils";
import { useFormContext } from "@/context/from-Context";
import ErrorIcon from "../svgs/ErrorIcon";
import ClipBoardIcon from "../svgs/ClipBoardIcon";
interface Props {
  actionBtns?: boolean;
  className?: string;
  notAllowTitle?: boolean;
}

const PasteLinkInput = ({ actionBtns, className, notAllowTitle }: Props) => {
  const { formData, updateFormData, nextStep, errors, resetForm } =
    useFormContext();
  const [loading, setLoading] = useState(false);
  const handleNextBtn = () => {
    nextStep();
  };

  const handleCancel = () => {
    resetForm();
  };
  const handlePasteUrl = async () => {
    setLoading(true);
    try {
      const pastedText = await navigator.clipboard.readText();
      updateFormData("url", pastedText);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleUrlInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData("url", e.target.value);
  };
  return (
    <>
      <div className={cn("px-4 py-6 sm:p-8", className)}>
        <div className={cn("h-24", notAllowTitle && "h-[50px]")}>
          {!notAllowTitle && (
            <label htmlFor='url' className='text-sm font-semibold'>
              URL
            </label>
          )}

          <div className='flex relative rounded mt-2'>
            <input
              type='url'
              name='url'
              value={formData.url}
              onChange={handleUrlInputValue}
              id='url'
              placeholder='https://example.com'
              className='input'
            />
            {errors.url && (
              <>
                <div className='flex pointer-events-none absolute inset-y-0 right-[84px] items-center pr-3'>
                  <ErrorIcon />
                </div>
              </>
            )}
            <button type='button' className='btn' onClick={handlePasteUrl}>
              {!loading ? (
                <>
                  <ClipBoardIcon />
                  Paste
                </>
              ) : (
                <Loader2 size={20} className='animate-spin' />
              )}
            </button>
          </div>

          {errors.url && (
            <p className='mt-2 text-sm  text-error'>{errors.url}</p>
          )}
        </div>
      </div>
      {!actionBtns && (
        <ActionBtns
          noprevbtn
          nextBtnClick={handleNextBtn}
          handleCancel={handleCancel}
        />
      )}
    </>
  );
};

export default PasteLinkInput;
