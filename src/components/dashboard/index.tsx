import React, { FC, ReactElement } from 'react'
import { Congratulations } from '@/components/dashboard/Congratulations'
import { OrderChart } from '@/components/dashboard/OrderChart'
import { Sales } from '@/components/dashboard/Sales'
import { TotalRevenue } from '@/components/dashboard/TotalRevenue/ index'

export const DashboardSection: FC = (): ReactElement => {
  return (
    <section>
      <div className="grid grid-cols-12 my-6 gap-5">
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
        <div className="col-span-4 grid grid-cols-2 gap-5 items-start">
          <OrderChart />
          <Sales />
        </div>
      </div>
    </section>
  )
}
