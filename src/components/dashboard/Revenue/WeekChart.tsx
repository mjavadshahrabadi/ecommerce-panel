'use client'
import React, { FC, ReactElement } from 'react'
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: 'َsu',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'sa',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'mo',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'tu',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'we',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'th',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'fr',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

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

        <Bar dataKey="pv" fill="#8884d8" radius={2} />
      </BarChart>
    </ResponsiveContainer>
  )
}
