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
      className={`absolute top-16 right-0 ${
        width <= 10 ? 'w-[10rem]' : 'w-[20rem]'
      } bg-white shadow-xl shadow-gray-200 rounded-md p-3 h-auto flex flex-col space-y-3`}
    >
      {children}
    </ul>
  )
}
