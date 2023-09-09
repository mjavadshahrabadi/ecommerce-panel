import React, { FC, ReactElement } from 'react'
import { Plan } from '@/components/users/enum/Plan'

interface PlanColProp {
  plan: Plan
}

export const PlanCol: FC<PlanColProp> = ({ plan }): ReactElement => {
  return (
    <td className="p-1 text-center">
      <span className="text-gray-700 text-[14 px]">{plan}</span>
    </td>
  )
}
