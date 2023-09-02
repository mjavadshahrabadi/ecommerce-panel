'use client'
import React, { FC, ReactElement } from 'react'
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts'

import { data } from '@/constants/dashboard/orderCharts'

export const OrderChart: FC = (): ReactElement => {
  return (
    <div className="bg-white p-5 rounded-md shadow-lg shadow-gray-200 flex flex-col space-y-4">
      <div className="flex flex-col items-end space-y-2">
        <h2 className="text-sm text-gray-700 font-semibold">سفارشات</h2>
        <small className="text-sm bg-green-100 text-green-500 rounded-md p-1">
          276k
        </small>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={data}>
          <Line type="monotone" dataKey="pv" strokeWidth={2} stroke="#22c55e" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
