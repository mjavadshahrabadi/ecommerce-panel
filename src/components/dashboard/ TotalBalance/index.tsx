import React, { FC, ReactElement } from 'react'
import { TabMenu } from '@/components/ui/TabMenu'
import { totalBalanceTabList } from '@/constants/dashboard/totalBalanceTabList'

export const TotalBalance: FC = (): ReactElement => {
  return (
    <div className="bg-white p-5 rounded-md shadow-lg shadow-gray-200 flex flex-col space-y-5">
      <TabMenu data={totalBalanceTabList} />
      <div className="flex items-center"></div>
    </div>
  )
}
