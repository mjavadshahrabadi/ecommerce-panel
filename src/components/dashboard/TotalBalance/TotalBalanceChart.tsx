'use client'
import React, { FC, ReactElement } from 'react'
import { LineChart, Line, XAxis, ResponsiveContainer } from 'recharts'
import { data } from '@/constants/dashboard/totalBalance'

export const TotalBalanceChart: FC = (): ReactElement => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#6366f1"
          dot={false}
          strokeWidth={3}
        />
        <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={14} />
      </LineChart>
    </ResponsiveContainer>
  )
}
