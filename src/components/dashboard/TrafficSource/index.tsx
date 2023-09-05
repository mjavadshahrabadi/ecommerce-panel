import React, { FC, ReactElement } from 'react'
import { TabMenu } from '@/components/dashboard/TrafficSource/TabMenu'

export const TrafficSource: FC = (): ReactElement => {
  return (
    <div className="bg-white p-5 rounded-md shadow-lg shadow-gray-200">
      <TabMenu />
    </div>
  )
}
