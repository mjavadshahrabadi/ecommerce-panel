import React, { FC, ReactElement } from 'react'
import Image from 'next/image'

interface TransactionItemProp {
  title: string
  subtitle: string
  iconSrc: string
  amount: string
}

export const TransactionItem: FC<TransactionItemProp> = ({
  amount,
  iconSrc,
  subtitle,
  title,
}): ReactElement => {
  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="ml-2">
          <Image
            src={iconSrc}
            alt={title}
            width={33}
            height={33}
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col space-y-1 text-sm">
          <span className="text-gray-700 font-semibold">{title}</span>
          <span className="text-gray-500">{subtitle}</span>
        </div>
      </div>

      <div>
        <span className="text-sm text-gray-600">{amount} میلیون تومان</span>
      </div>
    </li>
  )
}
