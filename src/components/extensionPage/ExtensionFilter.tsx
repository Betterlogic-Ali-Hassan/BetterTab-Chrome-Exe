import { exeFilter } from "@/constant/ExeFilter";
import Badge from "../ui/Badge";

const ExtensionFilter = () => {
  return (
    <div className='flex items-center gap-3'>
      {exeFilter.map((item, i) => (
        <Badge key={i} text={item} />
      ))}
    </div>
  );
};

export default ExtensionFilter;
