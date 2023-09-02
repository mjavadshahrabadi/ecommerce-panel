'use client'
import React, { FC, ReactElement, useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import {
  EllipsisVerticalIcon,
  ArrowUpOnSquareIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'
import { PercentageStatus } from '@/components/ui/PercentageStatus'
import { DropdownList } from '@/components/ui/DropdownList'
import { DropDownItem } from '@/components/ui/DropdownList/DropDownItem'

export const Sales: FC = (): ReactElement => {
  const [isOptionsShow, setIsOptionsShow] = useState(false)
  const optionsRef = useRef<HTMLDivElement>(null)

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      optionsRef.current &&
      !optionsRef.current.contains(event.target as Node)
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
            src="/vector/dashboard/wallet-info.png"
            alt="wallet-info.png"
            width={0}
            height={0}
            sizes="100vw"
            className="w-10 h-10"
          />
        </div>
        <div
          className="cursor-pointer"
          ref={optionsRef}
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
        <h4 className="text-gray-500 text-[15px]">فروش</h4>
        <p className="font-semibold text-gray-600">۱۰۰ میلیون</p>
        <PercentageStatus type="up" value="۲۵.۶۴%+" />
      </div>
    </div>
  )
}
