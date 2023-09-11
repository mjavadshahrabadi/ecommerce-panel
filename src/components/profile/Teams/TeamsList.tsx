import React, { FC, ReactElement } from 'react'
import { Teams } from '@/components/profile/Teams/interface/teams'
import { TeamsItem } from '@/components/profile/Teams/TeamsItem'

interface TeamsList {
  teams: Teams[]
}

export const TeamsList: FC<TeamsList> = ({ teams }): ReactElement => {
  return (
    <ul className="flex flex-col space-y-3 mt-5">
      {teams && teams.map((team) => <TeamsItem team={team} key={team.id} />)}
    </ul>
  )
}
