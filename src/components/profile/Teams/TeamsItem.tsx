import React, { FC, ReactElement } from 'react'
import { Teams } from '@/components/profile/Teams/interface/teams'
import { digitsEnToFa } from '@persian-tools/persian-tools'
import Image from 'next/image'

interface TeamsItem {
  team: Teams
}

export const TeamsItem: FC<TeamsItem> = ({ team }): ReactElement => {
  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <Image
          src={team.avatarSrc}
          alt={team.teamName}
          width={0}
          height={0}
          sizes="100vw"
          className="w-10 h-10 rounded-full object-cover"
        />

        <div className="flex flex-col space-y-1">
          <span className="text-sm text-gray-700">{team.teamName}</span>
          <span className="text-sm text-gray-500">
            {digitsEnToFa(team.numberOfConnection)} ارتباط
          </span>
        </div>
      </div>
      <span className="text-sm text-gray-700">{team.tag}</span>
    </li>
  )
}
