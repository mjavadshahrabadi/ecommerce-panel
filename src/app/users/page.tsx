import { Header } from '@/components/ui/Header'
import { UserTypes } from '@/components/users/UserTypes'
import { SearchFilter } from '@/components/users/SearchFilter'
import { UsersTable } from '@/components/users/UsersTable'

export default function UsersPage() {
  return (
    <section className="w-full mx-10 col-span-11 p-3">
      <Header />
      <UserTypes />
      <SearchFilter />
      <UsersTable />
    </section>
  )
}
