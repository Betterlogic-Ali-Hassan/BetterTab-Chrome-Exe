import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

interface Props {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}
const DialogBox = ({ trigger, children, className }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <div className='fixed inset-0 bg-black/50 z-40'></div>}
      <Dialog open={open} onOpenChange={setOpen} modal={false}>
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
