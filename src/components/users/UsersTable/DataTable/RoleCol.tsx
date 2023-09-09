import React, { FC, ReactElement } from 'react'
import { Role } from '@/components/users/enum/Role'
import {
  DevicePhoneMobileIcon,
  Cog6ToothIcon,
  PencilSquareIcon,
  UserIcon,
  ChartPieIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'

interface RoleColProp {
  role: Role
}
export const RoleCol: FC<RoleColProp> = ({ role }): ReactElement => {
  switch (role) {
    case 'Admin':
      return (
        <td className="p-1">
          <div className="flex items-center justify-center space-x-2">
            <DevicePhoneMobileIcon className="w-7 h-7 text-gray-700 bg-gray-100 p-1 rounded-md" />
            <span>Active</span>
          </div>
        </td>
      )

    case 'Editor':
      return (
        <td className="p-1">
          <div className="flex items-center justify-center space-x-2">
            <PencilSquareIcon className="w-7 h-7 text-indigo-500 bg-indigo-100 p-1 rounded-md" />
            <span>Editor</span>
          </div>
        </td>
      )

    case 'Author':
      return (
        <td className="p-1">
          <div className="flex items-center justify-center space-x-2">
            <Cog6ToothIcon className="w-7 h-7 text-green-500 bg-green-100 p-1 rounded-md" />
            <span>Author</span>
          </div>
        </td>
      )

    case 'Maintainer':
      return (
        <td className="p-1">
          <div className="flex items-center justify-center space-x-2">
            <ChartPieIcon className="w-7 h-7 text-violet-500 bg-violet-100 p-1 rounded-md" />
            <span>Maintainer</span>
          </div>
        </td>
      )

    case 'Subscriber':
      return (
        <td className="p-1">
          <div className="flex items-center justify-center space-x-2">
            <UserIcon className="w-7 h-7 text-amber-500 bg-amber-100 p-1 rounded-md" />
            <span>Subscriber</span>
          </div>
        </td>
      )

    default:
      return <td className="p-1">Unknown</td>
  }
}
