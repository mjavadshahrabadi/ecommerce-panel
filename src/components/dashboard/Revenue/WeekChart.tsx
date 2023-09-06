'use client'
import React, { FC, ReactElement } from 'react'
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts'
import { data } from '@/constants/dashboard/weekRevenue'
export const WeekChart: FC = (): ReactElement => {
  return (
    <ResponsiveContainer>
      <BarChart width={500} height={300} data={data} barSize={12}>
        <XAxis
          dataKey="name"
          scale="point"
          padding={{ left: 5, right: 5 }}
          tickLine={false}
          axisLine={false}
          allowDuplicatedCategory={true}
        />

        <Bar dataKey="pv" fill="#6366f1" radius={2} />
      </BarChart>
    </ResponsiveContainer>
  )
}
