import { Header } from '@/components/ui/Header'
import { InvoiceList } from '@/components/invoice/InvoiceList'
import { InvoiceTable } from '@/components/invoice/InvoiceTable'
import { DataTable } from '@/components/users/UsersTable/DataTable'

export default function InvoicePage() {
  return (
    <section className="w-full mx-10 col-span-11 p-3">
      <Header />
      <InvoiceList />
      <InvoiceTable />
      <div className="bg-white p-4 rounded-md shadow-lg shadow-gray-200">
        <DataTable />
      </div>
    </section>
  )
}
