import React, { FC, ReactElement } from 'react'

interface DropdownListProps {
  children: React.ReactNode
  width: number
}
export const DropdownList: FC<DropdownListProps> = ({
  children,
  width = 10,
}): ReactElement => {
  return (
    <ul
      className={`absolute right-0 border z-50 border-gray-100 ${
        width <= 10 ? 'w-[10rem]' : 'w-[20rem]'
      } bg-white shadow-2xl shadow-gray-200 rounded-md p-3 h-auto flex flex-col space-y-3`}
    >
      {children}
    </ul>
  )
}
