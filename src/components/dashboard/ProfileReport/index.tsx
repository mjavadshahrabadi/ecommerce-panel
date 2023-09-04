'use client'
import React, { FC, ReactElement } from 'react'
import { PercentageStatus } from '@/components/ui/PercentageStatus'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'
import { data } from '@/constants/dashboard/orderCharts'

export const ProfileReport: FC = (): ReactElement => {
  return (
    <div className="bg-white p-5 rounded-md shadow-lg shadow-gray-200 col-span-2 grid grid-cols-12">
      <div className="col-span-8">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={300} height={100} data={data}>
            <Line
              type="monotone"
              dataKey="pv"
              strokeWidth={2}
              stroke="#f97316"
            />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="col-span-4 flex flex-col space-y-2" dir="rtl">
        <span className="text-gray-600 font-semibold text-[15px]">
          گزارش نمایه
        </span>
        <span className="p-1.5 bg-amber-100 text-amber-500 text-sm w-fit rounded-xl">
          سال ۱۴۰۲
        </span>
        <PercentageStatus type="up" value="۶۸.۲%" />
        <span className="text-gray-600 font-semibold">۱۲۳ میلیون تومان</span>
      </div>
    </div>
  )
}
