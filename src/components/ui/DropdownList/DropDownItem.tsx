import React, { FC, ReactElement } from 'react'

interface DropDownItem {
  children: React.ReactNode
}
export const DropDownItem: FC<DropDownItem> = ({ children }): ReactElement => {
  return (
    <div className="hover:bg-gray-100 p-2 rounded-md cursor-pointer duration-300 ease-out">
      {children}
    </div>
  )
}
