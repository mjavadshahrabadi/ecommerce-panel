import { Header } from '@/components/ui/Header'
import { UserTypes } from '@/components/users/UserTypes'

export default function UsersPage() {
  return (
    <section className="w-full mx-10 col-span-11 p-3">
      <Header />
      <UserTypes />
    </section>
  )
}
