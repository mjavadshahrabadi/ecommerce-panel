import React, { FC, ReactElement } from 'react'
import { NumberFilter } from '@/components/users/UsersTable/NumberFilter'
import { Export } from '@/components/users/UsersTable/Export'

export const TableHeaderFilter: FC = (): ReactElement => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <NumberFilter options={[10, 25, 50, 100]} />
      </div>
      <div className="flex items-center space-x-4">
        <div>
          <input
            type="text"
            id="table-search"
            name="table-search"
            className="p-2 rounded-md focus:outline-0 bg-gray-100 text-[14px] text-gray-600"
            placeholder="Serach..."
          />
        </div>
        <div>
          <Export />
        </div>
        <div>
          <button
            type="button"
            className="bg-indigo-500 text-white py-2 px-5 text-[14px] rounded-md hover:shadow-md duration-300 ease-out active:scale-90 transition-all"
          >
            + افزودن کاربر
          </button>
        </div>
      </div>
    </div>
  )
}
