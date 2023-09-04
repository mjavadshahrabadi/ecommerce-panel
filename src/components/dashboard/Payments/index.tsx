'use client'
import React, { FC, ReactElement, useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import {
  ArrowUpOnSquareIcon,
  EllipsisVerticalIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'
import { DropdownList } from '@/components/ui/DropdownList'
import { DropDownItem } from '@/components/ui/DropdownList/DropDownItem'
import { PercentageStatus } from '@/components/ui/PercentageStatus'

export const Payments: FC = (): ReactElement => {
  const [isOptionsShow, setIsOptionsShow] = useState<boolean>(false)
  const PaymentOptionsRef = useRef<HTMLDivElement>(null)

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      PaymentOptionsRef.current &&
      !PaymentOptionsRef.current.contains(event.target as Node)
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
    <div className="flex flex-col space-y-5 bg-white p-5 rounded-md shadow-lg shadow-gray-200 relative">
      <div className="flex items-start justify-between">
        <div>
          <Image
            src="/vector/dashboard/paypal.png"
            alt="wallet-info.png"
            width={0}
            height={0}
            sizes="100vw"
            className="w-10 h-10"
          />
        </div>
        <div
          className="cursor-pointer"
          ref={PaymentOptionsRef}
          onClick={() => setIsOptionsShow((prev) => !prev)}
        >
          <EllipsisVerticalIcon className="w-6 h-6 text-gray-600" />
          {isOptionsShow && (
            <DropdownList width={10}>
              <DropDownItem>
                <div className="flex items-center justify-between">
                  <ArrowUpOnSquareIcon className="text-gray-500 w-5 h-5" />
                  <h4 className="text-[13px] text-gray-600">نمایش همه</h4>
                </div>
              </DropDownItem>
              <DropDownItem>
                <div className="flex items-center justify-between">
                  <TrashIcon className="text-gray-500 w-5 h-5" />
                  <h4 className="text-[13px] text-gray-600">حذف</h4>
                </div>
              </DropDownItem>
            </DropdownList>
          )}
        </div>
      </div>
      <div className="flex flex-col items-start space-y-2" dir="rtl">
        <h4 className="text-gray-500 text-[15px]">پرداخت ها</h4>
        <p className="font-semibold text-gray-600">۵۳ میلیون</p>
        <PercentageStatus type="down" value="۴۱.۶۴%-" />
      </div>
    </div>
  )
}
