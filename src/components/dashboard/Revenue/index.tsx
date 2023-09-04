import React, { FC, ReactElement } from 'react'
import { WeekChart } from '@/components/dashboard/Revenue/WeekChart'

export const Revenue: FC = (): ReactElement => {
  return (
    <div className="flex flex-col space-y-5 bg-white px-5 py-3 rounded-md shadow-lg shadow-gray-200">
      <div className="flex flex-col items-end space-y-2">
        <h4 className="text-gray-500 text-[15px] text-right">درآمد</h4>
        <p className="font-semibold text-gray-600 text-right">۵۳ میلیون</p>
      </div>
      <div className="w-full h-full">
        <WeekChart />
      </div>
    </div>
  )
}
