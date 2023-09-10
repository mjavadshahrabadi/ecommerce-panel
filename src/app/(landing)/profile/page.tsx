import { Header } from '@/components/ui/Header'
import { InvoiceList } from '@/components/invoice/InvoiceList'
import { InvoiceTable } from '@/components/invoice/InvoiceTable'
import { DataTable } from '@/components/users/UsersTable/DataTable'
import { Metadata } from 'next'
import { ProfileBanner } from '@/components/profile/ProfileBanner'
import { ProfileContainer } from '@/components/profile/ProfileContainer'

export const metadata: Metadata = {
  title: 'پروفایل - جواد شهرآبادی',
  description: 'Designed By Javad Shahrabadi :)',
}
export default function InvoicePage() {
  return (
    <section className="w-full mx-10 col-span-11 p-3">
      <Header />
      <ProfileBanner
        userAvatarSrc="/avatar/avatar-1.png"
        name="جواد شهرآبادی"
        skill="توسعه دهنده وب"
        location="قزوین"
        joinedDate="۳۱ شهریور ۱۴۰۲"
      />
      <ProfileContainer />
    </section>
  )
}
