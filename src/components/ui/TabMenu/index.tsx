import React, { FC, ReactElement } from 'react'
import { TabMenuList } from '@/components/ui/TabMenu/TabMenuList'

interface TabMenuProps {
  data: { id: number; title: string }[]
}
export const TabMenu: FC<TabMenuProps> = ({ data }): ReactElement => {
  return <TabMenuList data={data} />
}
