'use client'
import React, { FC, ReactElement } from 'react'
import { AvatarGroup } from '@/components/ui/AvatarGroup'
import { avatarsData } from '@/constants/roles/avatar'
import { shuffle } from '@/helper/shuffle'
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline'
import { digitsEnToFa } from '@persian-tools/persian-tools'

interface RolesTypeItemProps {
  totalNumber: number
  role: 'مدیر' | 'سرپرست' | 'کاربران' | 'پشتیبانی' | 'کاربر محدود'
}
export const RolesTypeItem: FC<RolesTypeItemProps> = ({
  role = 'کاربران',
  totalNumber = 0,
}): ReactElement => {
  const avatars = shuffle(avatarsData)
  return (
    <li className="bg-white p-4 rounded-md shadow-lg shadow-gray-200 flex flex-row-reverse items-center justify-between">
      <div className="flex flex-col space-y-8" dir="rtl">
        <span className="text-gray-600 text-[14px]">
          مجموعا {digitsEnToFa(totalNumber)} کاربر
        </span>
        <div className="flex flex-col items-start space-y-1">
          <span className="text-gray-700 text-md font-semibold">{role}</span>
          <span className="text-[13px] text-indigo-500 cursor-pointer">
            ویرایش نقش
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between space-y-8">
        <AvatarGroup avatars={avatars} />
        <DocumentDuplicateIcon className="w-5 h-5 text-gray-600 cursor-pointer" />
      </div>
    </li>
  )
}
