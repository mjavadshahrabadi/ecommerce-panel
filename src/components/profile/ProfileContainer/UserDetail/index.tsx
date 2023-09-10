import React, { FC, ReactElement } from 'react'
import { About } from '@/components/profile/ProfileContainer/UserDetail/About'
import { Contact } from '@/components/profile/ProfileContainer/UserDetail/Contact'
import { Overview } from '@/components/profile/ProfileContainer/UserDetail/Overview'

export const UserDetail: FC = (): ReactElement => {
  return (
    <div className="flex flex-col space-y-5">
      <div className="bg-white p-5 shadow-lg shadow-gray-200 rounded-md flex flex-col space-y-8">
        <About
          country="ایران"
          fullName="جواد شهرآبادی"
          language="فارسی"
          role="توسعه دهنده"
          status="فعال"
        />
        <Contact
          phoneNumber="09039768104"
          skypeId="javad.shahrabadi"
          email="m.javadhshahrabadi@gmail.com"
        />
      </div>
      <div className="bg-white p-5 shadow-lg shadow-gray-200 rounded-md">
        <Overview taskCompiled={123} projectCompiled={12} connection={467} />
      </div>
    </div>
  )
}
