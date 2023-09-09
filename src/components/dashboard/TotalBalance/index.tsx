import React, { FC, ReactElement } from 'react'
import { TabMenu } from '@/components/ui/TabMenu'
import { totalBalanceTabList } from '@/constants/dashboard/totalBalanceTabList'
import { WalletIcon } from '@heroicons/react/24/outline'
import { PercentageStatus } from '@/components/ui/PercentageStatus'
import { TotalBalanceChart } from '@/components/dashboard/TotalBalance/TotalBalanceChart'

export const TotalBalance: FC = (): ReactElement => {
  return (
    <div className="bg-white p-5 rounded-md shadow-lg shadow-gray-200 flex flex-col space-y-8">
      <TabMenu data={totalBalanceTabList} />
      <div className="flex items-center space-x-2">
        <div className="p-1 rounded-md bg-indigo-100">
          <WalletIcon className="w-7 h-7 text-indigo-500" />
        </div>
        <div className="flex flex-col space-y-1">
          <span className="text-gray-700 text-sm">موجودی کل</span>
          <div className="flex items-center space-x-2">
            <span dir="rtl" className="text-sm">
              ۲۳۰ میلیون
            </span>
            <PercentageStatus type="up" value="24.65%+" />
          </div>
        </div>
      </div>

      <div className="w-auto h-[300px]">
        <TotalBalanceChart />
      </div>
    </div>
  )
}
