import React, { FC, ReactElement } from 'react'

interface TabMenuItemProp {
  id: number
  title: string
  active: boolean
  handleSelectedTab: (id: number) => void
}

export const TabMenuItem: FC<TabMenuItemProp> = ({
  active,
  id,
  title,
  handleSelectedTab,
}): ReactElement => {
  return (
    <li
      onClick={() => handleSelectedTab(id)}
      className={`text-[14px] p-2 rounded-md cursor-pointer active:scale-95 ${
        active ? 'bg-indigo-500 text-white' : 'bg-white text-gray-700'
      }`}
    >
      {title}
    </li>
  )
}
