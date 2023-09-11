import React, { FC, ReactElement } from 'react'
import { ConnectionUser } from '@/components/profile/Connections/interface/connectionUser'
import { digitsEnToFa } from '@persian-tools/persian-tools'
import Image from 'next/image'

interface ConnectionItem {
  connection: ConnectionUser
}

export const ConnectionsItem: FC<ConnectionItem> = ({
  connection,
}): ReactElement => {
  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <Image
          src={connection.avatarSrc}
          alt={connection.name}
          width={0}
          height={0}
          sizes="100vw"
          className="w-10 h-10 rounded-full object-cover"
        />

        <div className="flex flex-col space-y-1">
          <span className="text-sm text-gray-700">{connection.name}</span>
          <span className="text-sm text-gray-500">
            {digitsEnToFa(connection.numberOfConnection)} ارتباط
          </span>
        </div>
      </div>
      <span className="text-sm text-gray-700">{connection.skill}</span>
    </li>
  )
}
