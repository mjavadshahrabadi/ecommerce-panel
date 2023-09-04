import React, { FC, ReactElement } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    name: 'sun',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'sat',
    uv: -3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'mon',
    uv: -2000,
    pv: -1800,
    amt: 2290,
  },
  {
    name: 'tue',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'wed',
    uv: -1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'thu',
    uv: 2390,
    pv: -3800,
    amt: 2500,
  },
  {
    name: 'fri',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

export const TotalRevenueChart: FC = (): ReactElement => {
  return (
    <ResponsiveContainer className="w-full h-full">
      <BarChart width={100} height={100} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Bar dataKey="pv" fill="#818cf8" radius={10} barSize={15} />
        <Bar dataKey="uv" fill="#5eead4" radius={10} barSize={15} />
      </BarChart>
    </ResponsiveContainer>
  )
}
