"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SidebarItem from "../../homeSidebar/SidebarItem";
import FilterIcon from "../../svgs/FilterIcon";
import HomeIcon from "../../svgs/HomeIcon";
import LocationIcon from "../../svgs/LocationIcon";
import Calendar from "../../svgs/Calendar";
import { FilterInput } from "./FilterInput";
import { CustomLocationDropdown } from "../CustomDropdown";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export function Filtering() {
  const [createdDateRange, setCreatedDateRange] = useState<
    DateRange | undefined
  >();
  const [updatedDateRange, setUpdatedDateRange] = useState<
    DateRange | undefined
  >();

  return (
    <Popover>
      <PopoverTrigger>
        <SidebarItem
          icon={<FilterIcon />}
          tooltip='Add filters'
          className='text-text opacity-60 hover:opacity-100 !p-0 rounded h-6 w-6'
          side='top'
          tooltipClassName='text-xs py-[3px] px-1.5 font-medium'
        />
      </PopoverTrigger>
      <PopoverContent className='w-[438px] bg-card p-2 pb-6'>
        <div className='flex items-center justify-between w-full py-4 px-5'>
          <h4 className='text-lg font-semibold text-text'>Add Filter</h4>
          <button className='text-sm opacity-60 hover:opacity-100 hover:text-brand'>
            Clear All
          </button>
        </div>
        <div>
          <FilterInput
            text='Tags'
            icon={<HomeIcon />}
            options={["Daily", "Weekly", "Monthly", "Yearly"]}
            type='checkbox'
          />
          <CustomLocationDropdown
            text='Located in'
            icon={<LocationIcon />}
            options={[
              "New York",
              "London",
              "Tokyo",
              "Paris",
              "Berlin",
              "Sydney",
              "Toronto",
              "Singapore",
              "Dubai",
              "Mumbai",
            ]}
          />
          <FilterInput
            text='Created'
            icon={<Calendar />}
            calendar
            dateRange={createdDateRange}
            onDateRangeChange={setCreatedDateRange}
          />
          <FilterInput
            text='Updated'
            icon={<Calendar />}
            calendar
            dateRange={updatedDateRange}
            onDateRangeChange={setUpdatedDateRange}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
