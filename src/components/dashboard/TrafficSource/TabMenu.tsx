'use client'
import React, { FC, ReactElement, useState } from 'react'
import { BrowsersList } from '@/components/dashboard/TrafficSource/BrowsersList'
import { Os } from '@/components/dashboard/TrafficSource/Os'
import { Country } from '@/components/dashboard/TrafficSource/Country'

const tabs = [
  {
    id: 1,
    title: 'مرورگر',
    active: true,
  },
  {
    id: 2,
    title: 'سیستم عامل',
  },
  {
    id: 3,
    title: 'کشور',
  },
]
export const TabMenu: FC = (): ReactElement => {
  const [selectedTab, setSelectedTab] = useState(1)

  return (
    <div className="flex flex-col space-y-6">
      <ul className="flex items-center space-x-4">
        {tabs &&
          tabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`py-1 px-4 rounded-md text-[15px] cursor-pointer ${
                tab.id === selectedTab
                  ? 'text-white bg-indigo-500'
                  : 'text-gray-700'
              }`}
            >
              {tab.title}
            </li>
          ))}
      </ul>
      {selectedTab === 1 && <BrowsersList />}
      {selectedTab === 2 && <Os />}
      {selectedTab === 3 && <Country />}
    </div>
  )
}
