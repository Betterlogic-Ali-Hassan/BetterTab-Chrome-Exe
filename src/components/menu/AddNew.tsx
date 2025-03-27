"use client";

import type React from "react";

import { Globe } from "lucide-react";
import CrossIcon from "../svgs/CrossIcon";
import { Button } from "@/components/ui/button";
import { useMenu } from "@/context/MenuContext";
const AddNew = () => {
  const {
    formValues,
    handleFormSubmit,
    handleFormChange,
    addFavorite,
    handleCloseDropdown,
  } = useMenu();
  return (
    <>
      <div className='absolute top-0 left-0 h-full w-full bg-black/15'></div>
      <form
        onSubmit={handleFormSubmit}
        className='flex p-5 py-6 shadow-sm border border-border rounded-md flex-col gap-4 bg-text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px]'
      >
        <div className='flex flex-col gap-2'>
          <label htmlFor='url' className='text-sm font-medium'>
            URL
          </label>
          <div className='input flex items-center gap-2 rounded-sm'>
            <Globe />
            <input
              type='text'
              name='url'
              id='url'
              value={formValues.url}
              onChange={handleFormChange}
              placeholder='www...'
              className='bg-transparent w-full outline-none ml-2'
            />
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='caption' className='text-sm font-medium'>
            Caption
          </label>
          <input
            type='text'
            name='caption'
            id='caption'
            value={formValues.caption}
            onChange={handleFormChange}
            placeholder='Site...'
            className='w-full outline-none input focus:ring-1 focus:ring-border'
          />
        </div>

        <Button
          className='mt-1 btn bg-text text-card hover:!bg-text hover:opacity-90 '
          type='submit'
          onClick={addFavorite}
        >
          Add
        </Button>

        <span
          className='absolute top-2 right-2 opacity-80 hover:opacity-100 cursor-pointer'
          onClick={handleCloseDropdown}
        >
          <CrossIcon />
        </span>
      </form>
    </>
  );
};

export default AddNew;
