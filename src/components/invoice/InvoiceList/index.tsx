import React, { FC, ReactElement } from 'react'
import { digitsEnToFa } from '@persian-tools/persian-tools'
import {
  UserIcon,
  DocumentTextIcon,
  CheckBadgeIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline'

export const InvoiceList: FC = (): ReactElement => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white lg:divide-x p-5 shadow-lg shadow-gray-200 mt-5 rounded-md gap-y-4 lg:gap-y-0">
      <div className="md:pr-8 flex items-start justify-between">
        <div className="flex flex-col space-y-2">
          <span className="text-gray-600 text-[15px] font-semibold">
            {digitsEnToFa(12)}
          </span>
          <span className="text-gray-600 text-sm">مشتریان</span>
        </div>
        <i className="p-1 rounded-md bg-green-100">
          <UserIcon className="w-6 h-6 text-green-500" />
        </i>
      </div>
      <div className="md:pl-8 lg:px-8 flex items-start justify-between">
        <div className="flex flex-col space-y-2">
          <span className="text-gray-600 text-[15px] font-semibold">
            {digitsEnToFa(165)}
          </span>
          <span className="text-gray-600 text-sm">صورتحساب</span>
        </div>
        <i className="p-1 rounded-md bg-amber-100">
          <DocumentTextIcon className="w-6 h-6 text-amber-500" />
        </i>
      </div>
      <div className="md:pr-8 flex items-start justify-between">
        <div className="flex flex-col space-y-2">
          <span className="text-gray-600 text-[15px] font-semibold">
            {digitsEnToFa(24)} میلیون
          </span>
          <span className="text-gray-600 text-sm">پرداخت شده</span>
        </div>
        <i className="p-1 rounded-md bg-indigo-100">
          <CheckBadgeIcon className="w-6 h-6 text-indigo-500" />
        </i>
      </div>
      <div className="md:pl-8 flex items-start justify-between">
        <div className="flex flex-col space-y-2">
          <span className="text-gray-600 text-[15px] font-semibold">
            {digitsEnToFa(17)} میلیون
          </span>
          <span className="text-gray-600 text-sm">پرداخت نشده</span>
        </div>
        <i className="p-1 rounded-md bg-red-100">
          <ExclamationTriangleIcon className="w-6 h-6 text-red-500" />
        </i>
      </div>
    </ul>
  )
}
