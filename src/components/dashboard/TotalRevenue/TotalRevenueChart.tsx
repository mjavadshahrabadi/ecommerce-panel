import React, { FC, ReactElement } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { data } from '@/constants/dashboard/totalRevenue'

export const TotalRevenueChart: FC = (): ReactElement => {
  return (
    <ResponsiveContainer className="w-full h-full">
      <BarChart width={100} height={100} data={data}>
        <XAxis dataKey="name" tickLine={false} fontSize="14px" />
        <YAxis tickLine={false} fontSize="14px" />
        <Tooltip />

        <Bar dataKey="pv" fill="#818cf8" radius={10} barSize={12} />
        <Bar dataKey="uv" fill="#d1d5db" radius={10} barSize={12} />
      </BarChart>
    </ResponsiveContainer>
  )
}
