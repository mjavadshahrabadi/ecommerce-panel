import React, { FC, ReactElement } from 'react'
import { TableHeaderFilter } from '@/components/users/UsersTable/TableHeaderFilter'
import { DataTable } from '@/components/users/UsersTable/DataTable'

export const UsersTable: FC = (): ReactElement => {
  return (
    <div className="px-5 pb-5 bg-white shadow-md shadow-gray-200 rounded-br-md rounded-bl-md">
      <TableHeaderFilter />
      <DataTable />
    </div>
  )
}
