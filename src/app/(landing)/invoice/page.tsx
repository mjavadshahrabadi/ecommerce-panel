import { Header } from '@/components/ui/Header'
import { InvoiceList } from '@/components/invoice/InvoiceList'
import { InvoiceTable } from '@/components/invoice/InvoiceTable'
import { DataTable } from '@/components/users/UsersTable/DataTable'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'صورتحساب ها',
  description: 'Designed By Javad Shahrabadi :)',
}
export default function InvoicePage() {
  return (
    <section className="xl:mx-10 w-full col-span-12 xl:col-span-11 p-5 overflow-hidden">
      <Header />
      <InvoiceList />
      <InvoiceTable />
    </section>
  )
}
