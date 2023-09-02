import React, { FC, ReactElement } from 'react'
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/outline'

interface PercentageStatusProp {
  type: 'up' | 'down'
  value: string
}

export const PercentageStatus: FC<PercentageStatusProp> = ({
  value,
  type,
}): ReactElement => {
  return (
    <div className="flex items-center" dir="rtl">
      <span
        className={`text-[14px] ${
          type === 'up' ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {value}
      </span>
      {type === 'up' ? (
        <ArrowUpIcon className="text-green-500 w-3 h-3" />
      ) : (
        <ArrowDownIcon className="text-red-500 w-3 h-3" />
      )}
    </div>
  )
}
