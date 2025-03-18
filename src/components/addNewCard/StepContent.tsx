import { useFormContext } from "@/context/from-Context";
import PasteLinkInput from "./PasteLinkInput";
import TextBoxInputs from "./TextBoxInputs";
import TagBoxContent from "./TagBoxContent";

const StepContent = () => {
  const { currentStep } = useFormContext();

  const stepComponents = [
    <PasteLinkInput key={0} />,
    <TextBoxInputs key={1} />,
    <TagBoxContent key={2} />,
  ];

  return (
    <div className='bg-card shadow-sm dark:bg-shadow-none ring-1 ring-neutral-900/5 dark:ring-0 sm:rounded-lg border border-border'>
      {stepComponents[currentStep]}
    </div>
  );
};

export default StepContent;
