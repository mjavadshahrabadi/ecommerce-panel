import React, { FC, ReactElement } from 'react'
import { UserColumn } from '@/components/users/UsersTable/DataTable/UserCol'
import { RoleCol } from '@/components/users/UsersTable/DataTable/RoleCol'
import { PlanCol } from '@/components/users/UsersTable/DataTable/PlanCol'
import { Role } from '@/components/users/enum/Role'
import { Plan } from '@/components/users/enum/Plan'
import { BillingCol } from '@/components/users/UsersTable/DataTable/BillingCol'
import { Billing } from '@/components/users/UsersTable/DataTable/enum/Billing'
import { StatusCol } from '@/components/users/UsersTable/DataTable/StatusCol'
import { Status } from '@/components/users/enum/Status'
import { ActionsCol } from '@/components/users/UsersTable/DataTable/ActionsCol'
import { TableBody } from '@/components/users/UsersTable/DataTable/TableBody'
import { Pagination } from '@/components/ui/Pagination'

export const DataTable: FC = (): ReactElement => {
  return (
    <>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-4">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
          <tr>
            <th scope="col" className="px-6 py-3">
              USER
            </th>
            <th scope="col" className="px-6 py-3">
              ROLE
            </th>
            <th scope="col" className="px-6 py-3">
              PLAN
            </th>
            <th scope="col" className="px-6 py-3">
              BILLING
            </th>
            <th scope="col" className="px-6 py-3">
              STATUS
            </th>
            <th scope="col" className="px-6 py-3">
              ACTIONS
            </th>
          </tr>
        </thead>
        <tbody>
          <TableBody />
        </tbody>
      </table>
      <Pagination pages={5} />
    </>
  )
}
