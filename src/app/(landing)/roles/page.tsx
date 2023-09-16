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
    <section className="xl:mx-10 w-full col-span-12 xl:col-span-11 p-5 overflow-hidden">
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
