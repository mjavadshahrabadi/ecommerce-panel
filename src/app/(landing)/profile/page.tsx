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
    <section className="xl:mx-10 w-full col-span-12 xl:col-span-11 p-5 overflow-hidden">
      <Header />
      <ProfileBanner
        userAvatarSrc="/avatar/avatar-1.png"
        name="جواد شهرآبادی"
        skill="توسعه دهنده وب"
        location="قزوین"
        joinedDate="شهریور ۱۴۰۲
         "
      />
      <ProfileContainer />
    </section>
  )
}
