import React, { FC, ReactElement } from 'react'
import { Status } from '@/components/users/enum/Status'

interface StatusColProps {
  status: Status
}

export const StatusCol: FC<StatusColProps> = ({ status }): ReactElement => {
  switch (status) {
    case 'Active':
      return (
        <td className="p-1">
          <div className="flex items-center justify-center">
            <span className="text-center bg-green-100 text-green-500 text-[13px] py-1 px-4 rounded-md">
              ACTIVE
            </span>
          </div>
        </td>
      )
    case 'Pending':
      return (
        <td className="p-1">
          <div className="flex items-center justify-center">
            <span className="text-center bg-amber-100 text-amber-500 text-[13px] py-1 px-4 rounded-md">
              PENDING
            </span>
          </div>
        </td>
      )
    case 'InActive':
      return (
        <td className="p-1">
          <div className="flex items-center justify-center">
            <span className="text-center bg-gray-100 text-gray-500 text-[13px] py-1 px-4 rounded-md">
              INACTIVE
            </span>
          </div>
        </td>
      )
    default:
      return <td className="text-center text-[14px] text-gray-700">unknown</td>
  }
}
