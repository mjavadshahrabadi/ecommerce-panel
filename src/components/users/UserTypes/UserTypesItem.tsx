import React, { FC, ReactElement } from 'react'

interface UserTypesItemProp {
  title: string
  subtitle: string
  amount: string
  percentage: { value: string; type: 'up' | 'down' }
  children: React.ReactNode
}

export const UserTypesItem: FC<UserTypesItemProp> = ({
  amount,
  children,
  percentage,
  title,
  subtitle,
}): ReactElement => {
  return (
    <li
      className="p-5 bg-white shadow-md shadow-gray-200 rounded-md flex items-start justify-between"
      dir="rtl"
    >
      <div className="flex flex-col items-start space-y-1">
        <span className="text-[15px] text-gray-600">{title}</span>
        <div className="flex items-center">
          <span
            className={`ml-2 text-[14px] font-semibold ${
              percentage.type === 'up' ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {percentage.value}%{percentage.type === 'up' ? '+' : '-'}
          </span>
          <span className="text-gray-600 text-[17px] font-semibold" dir="rtl">
            {amount} هزار
          </span>
        </div>
        <span className="text-gray-600 text-[14px]">{subtitle}</span>
      </div>
      <div>{children}</div>
    </li>
  )
}
