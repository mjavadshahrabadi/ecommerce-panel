import React, { FC, ReactElement } from 'react'
import { UserDetail } from '@/components/profile/ProfileContainer/UserDetail'
import { ActivityTimeline } from '@/components/profile/ActivityTimeline'
import { Connections } from '@/components/profile/Connections'
import { Teams } from '@/components/profile/Teams'

export const ProfileContainer: FC = (): ReactElement => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-8">
        <ActivityTimeline />
        <div className="grid grid-cols-2 gap-5 mt-5">
          <Connections />
          <Teams />
        </div>
      </div>
      <div className="col-span-4">
        <UserDetail />
      </div>
    </div>
  )
}
