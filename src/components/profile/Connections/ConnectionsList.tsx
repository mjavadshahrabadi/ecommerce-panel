import React, { FC, ReactElement } from 'react'
import { ConnectionUser } from '@/components/profile/Connections/interface/connectionUser'
import { ConnectionsItem } from '@/components/profile/Connections/ConnectionsItem'

interface ConnectionsList {
  connections: ConnectionUser[]
}

export const ConnectionsList: FC<ConnectionsList> = ({
  connections,
}): ReactElement => {
  return (
    <ul className="flex flex-col space-y-3 mt-5">
      {connections &&
        connections.map((connection) => (
          <ConnectionsItem connection={connection} key={connection.id} />
        ))}
    </ul>
  )
}
