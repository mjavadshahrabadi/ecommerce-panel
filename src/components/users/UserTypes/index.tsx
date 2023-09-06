import React, { FC, ReactElement } from 'react'
import { UserTypesList } from '@/components/users/UserTypes/UserTypesList'

export const UserTypes: FC = (): ReactElement => {
  return (
    <div className="my-6">
      <UserTypesList />
    </div>
  )
}
