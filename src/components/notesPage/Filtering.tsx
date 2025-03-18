// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import SidebarItem from "../homeSidebar/SidebarItem";
// import FilterIcon from "../svgs/FilterIcon";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// export function Filtering() {
//   return (
//     <Popover>
//       <PopoverTrigger>
//         <SidebarItem
//           icon={<FilterIcon />}
//           tooltip='Add filters'
//           className='text-text opacity-60 hover:opacity-100 !p-0 rounded  h-6 w-6'
//           side='top'
//           tooltipClassName='text-xs py-[3px] px-1.5 font-medium '
//         />
//       </PopoverTrigger>
//       <PopoverContent className='w-[438px] bg-card p-2'>
//         <div>
//           <FilterInput />
//         </div>
//       </PopoverContent>
//     </Popover>
//   );
// }

// const FilterInput = ({
//   icon,
//   text,
// }: {
//   icon?: React.ReactNode;
//   text?: string;
// }) => {
//   return (
//     <>
//       <div className='py-1 pr-6 pl-5 flex gap-2 items-center'>
//         <div className='flex items-center'>
//           <div className='mr-0.5'>
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               width='24'
//               height='24'
//               fill='none'
//             >
//               <path
//                 fill='currentColor'
//                 fillRule='evenodd'
//                 d='M12.8 5.704a1.04 1.04 0 0 0-1.6 0L7.396 10.27a1.04 1.04 0 0 0-.242.667v6.274c0 .575.467 1.042 1.042 1.042h7.608c.575 0 1.042-.467 1.042-1.042v-6.274c0-.244-.086-.48-.242-.667zm-2.56-.8a2.292 2.292 0 0 1 3.521 0l3.804 4.566c.343.412.53.93.53 1.467v6.274a2.29 2.29 0 0 1-2.291 2.292H8.196a2.29 2.29 0 0 1-2.292-2.292v-6.274c0-.536.188-1.055.531-1.467l3.805-4.567z'
//                 clipRule='evenodd'
//               ></path>
//               <path
//                 fill='currentColor'
//                 d='M13.667 10.338a1.667 1.667 0 1 1-3.334 0 1.667 1.667 0 0 1 3.334 0'
//               ></path>
//             </svg>
//           </div>
//           <span className='block text-text text-sm'>Tags</span>
//         </div>
//         <div>
//           <Select>
//             <SelectTrigger className='w-[220px] h-[42]'>
//               <SelectValue placeholder='Select' />
//             </SelectTrigger>
//             <SelectContent className='py-2 pr-2 pl-3'>
//               <SelectItem value='Daily'>
//                 <input type='checkbox' />
//                 Daily
//               </SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </div>
//     </>
//   );
// };
