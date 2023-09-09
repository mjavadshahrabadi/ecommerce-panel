import React, { FC, ReactElement } from 'react'
import { Billing } from './enum/Billing'
interface BillingColProp {
  billing: Billing
}

export const BillingCol: FC<BillingColProp> = ({ billing }): ReactElement => {
  return (
    <td className="p-1 text-center">
      <span className="text-gray-700 text-[14px]">{billing}</span>
    </td>
  )
}
