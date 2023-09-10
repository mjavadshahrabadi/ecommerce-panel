import React, { FC, ReactElement } from 'react'
import { RolesTypeItem } from '@/components/roles/RolesTypeList/RolesTypeItem'
import { AddNewRole } from '@/components/roles/AddNewRole'

export const RolesTypeList: FC = (): ReactElement => {
  return (
    <ul className="grid grid-cols-3 gap-5">
      <RolesTypeItem role="سرپرست" totalNumber={4} />
      <RolesTypeItem role="مدیر" totalNumber={7} />
      <RolesTypeItem role="پشتیبانی" totalNumber={10} />
      <RolesTypeItem role="کاربران" totalNumber={25} />
      <RolesTypeItem role="کاربر محدود" totalNumber={2} />
      <AddNewRole />
    </ul>
  )
}
