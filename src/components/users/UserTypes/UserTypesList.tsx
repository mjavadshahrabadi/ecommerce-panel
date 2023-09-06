import React, { FC, ReactElement } from 'react'
import { UserTypesItem } from '@/components/users/UserTypes/UserTypesItem'
import {
  UserGroupIcon,
  UsersIcon,
  UserPlusIcon,
  UserMinusIcon,
} from '@heroicons/react/24/outline'

export const UserTypesList: FC = (): ReactElement => {
  return (
    <ul className="grid grid-cols-4 gap-5">
      <UserTypesItem
        title="نشست"
        subtitle="مجموع کاربران"
        amount="۴,۵۴۳"
        percentage={{ type: 'up', value: '۱۸' }}
      >
        <div className="p-2 rounded-md bg-indigo-100">
          <UserGroupIcon className="w-5 h-5 text-indigo-500 " />
        </div>
      </UserTypesItem>
      <UserTypesItem
        title="کاربران پولی"
        subtitle="تجزیه و تحلیل هفته گذشته"
        amount="۳,۱۷۴"
        percentage={{ type: 'up', value: '۲۳' }}
      >
        <div className="p-2 rounded-md bg-red-100">
          <UsersIcon className="w-5 h-5 text-red-500 " />
        </div>
      </UserTypesItem>
      <UserTypesItem
        title="کاربران فعال"
        subtitle="تجزیه و تحلیل هفته گذشته"
        amount="۱,۱۳۲"
        percentage={{ type: 'down', value: '۱۱' }}
      >
        <div className="p-2 rounded-md bg-green-100">
          <UserPlusIcon className="w-5 h-5 text-green-500 " />
        </div>
      </UserTypesItem>
      <UserTypesItem
        title="کاربران معلق"
        subtitle="تجزیه و تحلیل هفته گذشته"
        amount="۱,۷۱۲"
        percentage={{ type: 'up', value: '۵۶' }}
      >
        <div className="p-2 rounded-md bg-orange-100">
          <UserMinusIcon className="w-5 h-5 text-orange-500 " />
        </div>
      </UserTypesItem>
    </ul>
  )
}
