import React, { FC, ReactElement } from 'react'
import { Congratulations } from '@/components/dashboard/Congratulations'
import { OrderChart } from '@/components/dashboard/OrderChart'
import { Sales } from '@/components/dashboard/Sales'
import { TotalRevenue } from '@/components/dashboard/TotalRevenue/ index'
import { Payments } from '@/components/dashboard/Payments'
import { Revenue } from '@/components/dashboard/Revenue'

export const DashboardSection: FC = (): ReactElement => {
  return (
    <section className="overflow-hidden">
      <div className="grid grid-cols-12 my-6 gap-5 items-start">
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
        <div className="col-span-4 grid grid-cols-2 gap-5">
          <Payments />
          <Revenue />
        </div>
      </div>
    </section>
  )
}
