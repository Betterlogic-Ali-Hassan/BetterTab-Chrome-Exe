import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { TfiDownload } from "react-icons/tfi";
import DocumentationIcon from "@/components/svgs/DocumentationIcon";
import ExistIcon from "@/components/svgs/ExistIcon";
import { BsBookmarks } from "react-icons/bs";
import { GoHistory } from "react-icons/go";
import { CgNotes } from "react-icons/cg";

export const sidebarData = [
  {
    icon: <BsBookmarks size={24} />,
    tooltip: "Bookmarks",
    link: "home",
  },
  {
    icon: <GoHistory size={24} />,
    tooltip: "History",
    link: "history",
  },
  {
    icon: <IoExtensionPuzzleOutline size={24} />,
    tooltip: "Extensions",
    link: "extensions",
  },
  {
    icon: <TfiDownload size={24} />,
    tooltip: "Downloads",
    link: "downloads",
  },
  {
    icon: <CgNotes size={24} />,
    tooltip: "Notes",
    link: "notes",
  },
];
export const sidebarDataBottom = [
  {
    icon: <DocumentationIcon />,
    tooltip: "Documentation",
    link: "documentation",
  },
  {
    icon: <ExistIcon />,
    tooltip: "Logout",
    link: "logout",
  },
];
