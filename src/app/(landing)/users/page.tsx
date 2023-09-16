import { Header } from '@/components/ui/Header'
import { UserTypes } from '@/components/users/UserTypes'
import { SearchFilter } from '@/components/users/SearchFilter'
import { UsersTable } from '@/components/users/UsersTable'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'کاربران',
  description: 'Designed By Javad Shahrabadi :)',
}
export default function UsersPage() {
  return (
    <section className="xl:mx-10 w-full col-span-12 xl:col-span-11 p-5 overflow-hidden">
      <Header />
      <UserTypes />
      <SearchFilter />
      <UsersTable />
    </section>
  )
}
