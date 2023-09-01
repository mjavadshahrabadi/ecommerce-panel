import React, { FC, ReactElement } from 'react'

interface BadgeBtnProp {
  badgeCount: number
  children: React.ReactNode
  DropDownListHandler?: React.Dispatch<React.SetStateAction<boolean>>
}

export const BadgeBtn: FC<BadgeBtnProp> = ({
  badgeCount,
  children,
  DropDownListHandler,
}): ReactElement => {
  return (
    <div
      className="relative cursor-pointer"
      onClick={() => DropDownListHandler?.((prev) => !prev)}
    >
      {children}
      <span className="absolute -top-2 -right-1 text-white bg-red-500 w-5 h-5 flex items-center justify-center rounded-full text-xs">
        {badgeCount}
      </span>
    </div>
  )
}
