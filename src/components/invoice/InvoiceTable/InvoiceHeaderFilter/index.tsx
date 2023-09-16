'use client'
import React, { FC, ReactElement, useState } from 'react'
import { NumberFilter } from '@/components/users/UsersTable/NumberFilter'
import { SelectorList } from '@/components/ui/SelectorList'
import { Status } from '@/components/invoice/InvoiceTable/enum/status'

export const InvoiceHeaderFilter: FC = (): ReactElement => {
  const [selectedStatus, setSelectedStatus] = useState('Draft')
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2 lg:space-x-4">
        <NumberFilter options={[10, 25, 50, 100]} />
        <button
          type="button"
          className="hidden lg:block bg-indigo-500 py-1.5 px-4 rounded-md active:scale-95 text-white text-[14px]"
        >
          + افزودن صورتحساب
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <div>
          <input
            type="text"
            id="table-search"
            name="table-search"
            className="hidden lg:block p-2 rounded-md focus:outline-0 bg-gray-100 text-[14px] text-gray-600"
            placeholder="Serach Invoice..."
          />
        </div>
        <SelectorList
          selectorDefaultValue={selectedStatus}
          onSelectHandler={setSelectedStatus}
          options={Object.values(Status)}
        />
      </div>
    </div>
  )
}
