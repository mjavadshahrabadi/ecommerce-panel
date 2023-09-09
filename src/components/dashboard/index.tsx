import React, { FC, ReactElement } from 'react'
import { Congratulations } from '@/components/dashboard/Congratulations'
import { OrderChart } from '@/components/dashboard/OrderChart'
import { Sales } from '@/components/dashboard/Sales'
import { TotalRevenue } from '@/components/dashboard/TotalRevenue/ index'
import { Payments } from '@/components/dashboard/Payments'
import { Revenue } from '@/components/dashboard/Revenue'
import { ProfileReport } from '@/components/dashboard/ProfileReport'
import { OrderStatistics } from '@/components/dashboard/OrderStatistics'
import { TotalBalance } from '@/components/dashboard/TotalBalance'
import { Transactions } from '@/components/dashboard/Transactions'
import { ActivityTimeline } from '@/components/dashboard/ActivityTimeline'
import { TrafficSource } from '@/components/dashboard/TrafficSource'

export const DashboardSection: FC = (): ReactElement => {
  return (
    <section className="overflow-hidden">
      <div className="grid grid-cols-12 my-6 gap-5 items-stretch">
        <div className="col-span-8">
          <Congratulations />
        </div>
        <div className="col-span-4 grid grid-cols-2 gap-5">
          <OrderChart />
          <Sales />
        </div>

        <div className="col-span-8">
          <TotalRevenue />
        </div>
        <div className="col-span-4 grid grid-cols-2 grid-rows-2 gap-5">
          <Payments />
          <Revenue />
          <ProfileReport />
        </div>

        <div className="col-span-4">
          <OrderStatistics />
        </div>
        <div className="col-span-4">
          <TotalBalance />
        </div>
        <div className="col-span-4">
          <Transactions />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <ActivityTimeline />
        <TrafficSource />
      </div>
    </section>
  )
}
