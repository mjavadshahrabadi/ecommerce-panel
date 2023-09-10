import React, { FC, ReactElement } from 'react'
import { InvoiceHeaderFilter } from '@/components/invoice/InvoiceTable/InvoiceHeaderFilter'

export const InvoiceTable: FC = (): ReactElement => {
  return (
    <div className="mt-5 p-5 pb-0 shadow-lg shadow-gray-200 rounded-md bg-white">
      <InvoiceHeaderFilter />
    </div>
  )
}
