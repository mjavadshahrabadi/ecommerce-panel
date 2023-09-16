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
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-6">
          <div className="w-full lg:col-span-2">
            <Congratulations />
          </div>
          <div className="w-full lg:col-span-1 grid grid-cols-2 gap-5">
            <OrderChart />
            <Sales />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 my-6 gap-5">
          <div className="w-full lg:col-span-2">
            <TotalRevenue />
          </div>
          <div className="w-full lg:col-span-1 grid grid-cols-2 grid-rows-2 gap-5">
            <Payments />
            <Revenue />
            <ProfileReport />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 items-stretch">
          <div className="w-full">
            <OrderStatistics />
          </div>
          <div className="w-full">
            <TotalBalance />
          </div>
          <div className="w-full">
            <Transactions />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
          <ActivityTimeline />
          <TrafficSource />
        </div>
      </div>
    </section>
  )
}
