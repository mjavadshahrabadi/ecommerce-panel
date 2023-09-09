'use client'
import React, { FC, ReactElement, useState } from 'react'

interface PaginationProps {
  pages: number
}
export const Pagination: FC<PaginationProps> = ({
  pages = 5,
}): ReactElement => {
  const [selectedPage, setSelectedPage] = useState(1)

  return (
    <ul className="flex items-center justify-start space-x-1 mt-7">
      <li className="bg-gray-100 text-gray-700 py-1 px-5 text-[14px] rounded-md hover:bg-gray-200 cursor-pointer">
        Prev
      </li>
      {Array.from(Array(pages), (e, i) => (
        <li
          key={i}
          onClick={() => setSelectedPage(i + 1)}
          className={`${
            selectedPage === i + 1
              ? 'text-white bg-indigo-500'
              : 'text-gray-700 hover:bg-gray-200'
          }  text-[14px] py-1 px-2 rounded-md cursor-pointer`}
        >
          {i + 1}
        </li>
      ))}
      <li className="bg-gray-100 text-gray-700 py-1 px-5 text-[14px] rounded-md hover:bg-gray-200 cursor-pointer">
        Next
      </li>
    </ul>
  )
}
