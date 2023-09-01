import React, { FC, ReactElement } from 'react'

interface SideItem {
  isHovered: boolean
  children: React.ReactNode
  title: string
  id: number
  activeId: number
  activeNavItemHandler: (id: number) => void
}

export const SideItem: FC<SideItem> = ({
  isHovered,
  children,
  title,
  id,
  activeId,
  activeNavItemHandler,
}): ReactElement => {
  return (
    <li
      className={`flex ${
        isHovered
          ? `items-center justify-end ${
              activeId === id ? 'bg-indigo-50' : 'hover:bg-gray-100'
            }`
          : 'items-center justify-center'
      }  cursor-pointer  rounded-md w-full duration-300 ease-out`}
      onClick={() => activeNavItemHandler(id)}
    >
      {isHovered && (
        <div>
          <h2
            className={`${
              activeId === id ? 'text-indigo-500' : 'text-gray-600'
            } text-[14px]`}
          >
            {title}
          </h2>
        </div>
      )}
      <div
        className={`p-2 ${
          activeId === id
            ? 'rounded-md bg-indigo-50 text-indigo-500'
            : ' text-gray-500'
        }`}
      >
        {children}
      </div>
    </li>
  )
}
