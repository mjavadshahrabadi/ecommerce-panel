import React, { FC, ReactElement } from 'react'
import {
  CheckIcon,
  SquaresPlusIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import { digitsEnToFa } from '@persian-tools/persian-tools'

interface OverviewProps {
  taskCompiled: number
  projectCompiled: number
  connection: number
}

export const Overview: FC<OverviewProps> = ({
  connection,
  projectCompiled,
  taskCompiled,
}): ReactElement => {
  return (
    <div className="flex flex-col items-end space-y-3">
      <span className="text-gray-700 text-[15px] font-semibold">
        بررسی اجمالی
      </span>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-700">
          {' '}
          تسک های پایان یافته: {digitsEnToFa(taskCompiled)}
        </span>
        <CheckIcon className="text-gray-600 w-5 h-5" />
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-700">
          {' '}
          {digitsEnToFa(projectCompiled)} :پروژه های پایان یافته
        </span>
        <SquaresPlusIcon className="text-gray-600 w-5 h-5" />
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-700">
          {digitsEnToFa(connection)} :ارتباطات
        </span>
        <UsersIcon className="text-gray-600 w-5 h-5" />
      </div>
    </div>
  )
}
