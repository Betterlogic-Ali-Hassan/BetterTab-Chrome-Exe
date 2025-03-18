import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { usePageContext } from "@/context/PageContext";
import { useState } from "react";

interface Props {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}
const DialogBox = ({ trigger, children, className }: Props) => {
  const [open, setOpen] = useState(false);
  const { setDialogOpen } = usePageContext();

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    setDialogOpen(isOpen);
  };
  return (
    <>
      <Dialog open={open} onOpenChange={handleOpenChange} modal={false}>
        <DialogTrigger className='text-sm text-foreground hover:text-text transition-colors max-lg:self-baseline'>
          {trigger}
        </DialogTrigger>
        <DialogContent className={className}>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            {children}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogBox;
