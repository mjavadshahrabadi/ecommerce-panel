'use client'
import React, { FC, ReactElement, useRef, useState, useEffect } from 'react'
import {
  ArrowPathIcon,
  ArrowUpOnSquareIcon,
  EllipsisVerticalIcon,
  ShareIcon,
} from '@heroicons/react/24/outline'
import { DropdownList } from '@/components/ui/DropdownList'
import { DropDownItem } from '@/components/ui/DropdownList/DropDownItem'
import { TransactionItem } from '@/components/dashboard/Transactions/TransactionItem'

export const Transactions: FC = (): ReactElement => {
  const TransactionOptionsRef = useRef<HTMLDivElement>(null)
  const [isOptionsShow, setIsOptionsShow] = useState(false)
  const handleDocumentClick = (event: MouseEvent) => {
    if (
      TransactionOptionsRef.current &&
      !TransactionOptionsRef.current.contains(event.target as Node)
    ) {
      setIsOptionsShow(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick)

    return () => {
      document?.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  return (
    <div className="bg-white p-5 rounded-md shadow-lg shadow-gray-200 flex flex-col space-y-8 relative">
      <div className="flex items-start justify-between">
        <h4 className="font-semibold text-gray-700 text-[15px]">تراکنش ها</h4>

        <div
          className="cursor-pointer"
          ref={TransactionOptionsRef}
          onClick={() => setIsOptionsShow((prev) => !prev)}
        >
          <EllipsisVerticalIcon className="w-6 h-6 text-gray-600" />
          {isOptionsShow && (
            <DropdownList width={10}>
              <DropDownItem>
                <div className="flex items-center justify-between">
                  <ArrowUpOnSquareIcon className="text-gray-500 w-5 h-5" />
                  <h4 className="text-[13px] text-gray-600">انتخاب همه</h4>
                </div>
              </DropDownItem>
              <DropDownItem>
                <div className="flex items-center justify-between">
                  <ArrowPathIcon className="text-gray-500 w-5 h-5" />
                  <h4 className="text-[13px] text-gray-600">به روزرسانی</h4>
                </div>
              </DropDownItem>
              <DropDownItem>
                <div className="flex items-center justify-between">
                  <ShareIcon className="text-gray-500 w-5 h-5" />
                  <h4 className="text-[13px] text-gray-600">اشتراک گذاری</h4>
                </div>
              </DropDownItem>
            </DropdownList>
          )}
        </div>
      </div>

      <ul dir="rtl" className="flex flex-col space-y-5">
        <TransactionItem
          title="paypal"
          subtitle="سفارش غذا"
          iconSrc="/vector/dashboard/paypal.png"
          amount="۱۰"
        />
        <TransactionItem
          title="wallet"
          subtitle="کیف پول"
          iconSrc="/vector/dashboard/wallet.png"
          amount="۱۰"
        />
        <TransactionItem
          title="Transfer"
          subtitle="بازپرداخت"
          iconSrc="/vector/dashboard/chart.png"
          amount="۱۰"
        />
        <TransactionItem
          title="wallet"
          subtitle="پاداش کارمندان"
          iconSrc="/vector/dashboard/cc-warning.png"
          amount="۱۰"
        />
        <TransactionItem
          title="wallet"
          subtitle="پاداش کارمندان"
          iconSrc="/vector/dashboard/wallet.png"
          amount="۱۰"
        />
        <TransactionItem
          title="wallet"
          subtitle="پاداش کارمندان"
          iconSrc="/vector/dashboard/cc-success.png"
          amount="۱۰"
        />
      </ul>
    </div>
  )
}
