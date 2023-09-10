import React, { FC, ReactElement } from 'react'
import { UserDetail } from '@/components/profile/ProfileContainer/UserDetail'

export const ProfileContainer: FC = (): ReactElement => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-8 flex flex-col space-y-4 bg-white p-5"></div>
      <div className="col-span-4">
        <UserDetail />
      </div>
    </div>
  )
}
