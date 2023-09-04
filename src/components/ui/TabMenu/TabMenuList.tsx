'use client'
import React, { FC, ReactElement, useState } from 'react'
import { TabMenuItem } from '@/components/ui/TabMenu/TabMenuItem'

interface TabMenuList {
  data: { id: number; title: string; active?: boolean }[]
}

export const TabMenuList: FC<TabMenuList> = ({ data }): ReactElement => {
  const [activeTabId, setActiveTabId] = useState<number>(1)
  const selectedTabHandler = (id: number) => {
    setActiveTabId(id)
  }
  return (
    <ul className="flex items-center space-x-4">
      {data &&
        data.map((item) => (
          <TabMenuItem
            key={item.id}
            id={item.id}
            title={item.title}
            handleSelectedTab={selectedTabHandler}
            active={item.id === activeTabId}
          />
        ))}
    </ul>
  )
}
