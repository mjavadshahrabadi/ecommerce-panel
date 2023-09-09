import React, { FC, ReactElement } from 'react'
import Image from 'next/image'

interface UserColumnProp {
  name: string
  uid: string
  avatarSrc: string
  email: string
}

export const UserColumn: FC<UserColumnProp> = ({
  avatarSrc,
  name,
  email,
}): ReactElement => {
  return (
    <td className="p-1.5">
      <div className="flex items-center space-x-4 justify-center w-full">
        <Image
          src={avatarSrc}
          alt={name}
          width={50}
          height={50}
          className="w-[35px] h-[35px] rounded-full overflow-hidden"
        />
        <div className="flex flex-col space-y-1">
          <span className="text-gray-700 text-[14px]">{name}</span>
          <span className="text-gray-600 text-[14px]">{email}</span>
        </div>
      </div>
    </td>
  )
}
