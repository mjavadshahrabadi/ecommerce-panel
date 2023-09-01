import React, { FC, ReactElement } from 'react'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface SearchBoxProps {
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>
  isFocused: boolean
}
export const SearchBox: FC<SearchBoxProps> = ({
  setIsFocused,
  isFocused,
}): ReactElement => {
  return (
    <div
      className={`transition-all duration-300 ease-out ${
        isFocused ? 'relative top-0 z-40 w-full mx-auto' : 'relative w-1/3'
      }`}
    >
      <input
        type="text"
        id="searchbox"
        name="searchbox"
        className={`p-2 bg-gray-100 text-[14px] rounded-md text-gray-600 focus:outline-0 text-right w-full ${
          isFocused && 'px-10'
        }`}
        placeholder="جستجو کنید"
        onClick={() => setIsFocused(true)}
      />
      <MagnifyingGlassIcon
        className="w-5 h-5 text-gray-500 absolute top-2.5 left-2 z-50 cursor-pointer hover:text-gray-800"
        onClick={() => setIsFocused(false)}
      />
      {isFocused && (
        <XMarkIcon
          className="w-6 h-6 text-gray-500 absolute top-[7px] right-2 cursor-pointer z-50"
          onClick={() => setIsFocused(false)}
        />
      )}
    </div>
  )
}
