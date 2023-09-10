import { Header } from '@/components/ui/Header'
import { RolesHeader } from '@/components/roles/RolesHeader'
import { RolesTypeList } from '@/components/roles/RolesTypeList'
import { DataTable } from '@/components/users/UsersTable/DataTable'
import { TableHeaderFilter } from '@/components/users/UsersTable/TableHeaderFilter'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'نقش ها',
  description: 'Designed By Javad Shahrabadi :)',
}

export default function RolesPage() {
  return (
    <section className="w-full mx-10 col-span-11 p-3">
      <Header />
      <RolesHeader />
      <RolesTypeList />
      <div className="bg-white p-5 mt-8 rounded-md shadow-lg shadow-gray-200">
        <TableHeaderFilter />
        <DataTable />
      </div>
    </section>
  )
}
