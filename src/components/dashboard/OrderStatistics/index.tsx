'use client'
import React, { FC, ReactElement, useRef, useEffect, useState } from 'react'

import {
  ArrowUpOnSquareIcon,
  ArrowPathIcon,
  ShareIcon,
  EllipsisVerticalIcon,
  DevicePhoneMobileIcon,
  BoltIcon,
  HomeIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline'
import { DropdownList } from '@/components/ui/DropdownList'
import { DropDownItem } from '@/components/ui/DropdownList/DropDownItem'

export const OrderStatistics: FC = (): ReactElement => {
  const OrderStatisticsRef = useRef<HTMLDivElement>(null)
  const [isOptionsShow, setIsOptionsShow] = useState(false)

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      OrderStatisticsRef.current &&
      !OrderStatisticsRef.current.contains(event.target as Node)
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
    <div className="flex flex-col justify-between  space-y-7 bg-white p-5 rounded-md shadow-lg shadow-gray-200 relative h-full">
      <div className="flex items-start justify-between">
        <div className="flex flex-col space-y-1 text-sm text-gray-700">
          <h4 className="font-semibold">آمار سفارش</h4>
          <span dir="rtl">۴۲ هزار - فروش کل </span>
        </div>
        <div
          className="cursor-pointer"
          ref={OrderStatisticsRef}
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
      <div className="flex flex-col space-y-2" dir="rtl">
        <div className="flex items-ceneter justify-between">
          <div className="flex items-center">
            <div className="w-fit rounded-md p-2 bg-violet-100 ml-2">
              <DevicePhoneMobileIcon className="w-5 h-5 text-violet-500" />
            </div>

            <div className="flex flex-col space-y-2 text-[13px] text-gray-600 ">
              <span className="font-semibold">الکترونیک</span>
              <span className="text-[12px]">موبایل، هدفون، تلویزیون</span>
            </div>
          </div>

          <h4 className="text-gray-600 text-sm">۲۲ هزار</h4>
        </div>
        <div className="flex items-ceneter justify-between">
          <div className="flex items-center">
            <div className="w-fit rounded-md p-2 bg-teal-100 ml-2">
              <BoltIcon className="w-5 h-5 text-teal-500" />
            </div>

            <div className="flex flex-col space-y-2 text-[13px] text-gray-600 ">
              <span className="font-semibold">مد</span>
              <span className="text-[12px]">شلوار، پیراهن، کفش</span>
            </div>
          </div>

          <h4 className="text-gray-600 text-sm">۱۲ هزار</h4>
        </div>
        <div className="flex items-ceneter justify-between">
          <div className="flex items-center">
            <div className="w-fit rounded-md p-2 bg-red-100 ml-2">
              <HomeIcon className="w-5 h-5 text-red-500" />
            </div>

            <div className="flex flex-col space-y-2 text-[13px] text-gray-600 ">
              <span className="font-semibold">دکوری</span>
              <span className="text-[12px]">مجسمه، تابلو</span>
            </div>
          </div>

          <h4 className="text-gray-600 text-sm">۹ هزار</h4>
        </div>
        <div className="flex items-ceneter justify-between">
          <div className="flex items-center">
            <div className="w-fit rounded-md p-2 bg-green-100 ml-2">
              <TrophyIcon className="w-5 h-5 text-green-500" />
            </div>

            <div className="flex flex-col space-y-2 text-[13px] text-gray-600 ">
              <span className="font-semibold">ورزشی</span>
              <span className="text-[12px]">فوتبال، کیت ورزشی</span>
            </div>
          </div>

          <h4 className="text-gray-600 text-sm">۳ هزار</h4>
        </div>
        <div className="flex items-ceneter justify-between">
          <div className="flex items-center">
            <div className="w-fit rounded-md p-2 bg-violet-100 ml-2">
              <DevicePhoneMobileIcon className="w-5 h-5 text-violet-500" />
            </div>

            <div className="flex flex-col space-y-2 text-[13px] text-gray-600 ">
              <span className="font-semibold">الکترونیک</span>
              <span className="text-[12px]">موبایل، هدفون، تلویزیون</span>
            </div>
          </div>

          <h4 className="text-gray-600 text-sm">۲۲ هزار</h4>
        </div>
        <div className="flex items-ceneter justify-between">
          <div className="flex items-center">
            <div className="w-fit rounded-md p-2 bg-red-100 ml-2">
              <HomeIcon className="w-5 h-5 text-red-500" />
            </div>

            <div className="flex flex-col space-y-2 text-[13px] text-gray-600 ">
              <span className="font-semibold">دکوری</span>
              <span className="text-[12px]">مجسمه، تابلو</span>
            </div>
          </div>

          <h4 className="text-gray-600 text-sm">۹ هزار</h4>
        </div>
        <div className="flex items-ceneter justify-between">
          <div className="flex items-center">
            <div className="w-fit rounded-md p-2 bg-green-100 ml-2">
              <TrophyIcon className="w-5 h-5 text-green-500" />
            </div>

            <div className="flex flex-col space-y-2 text-[13px] text-gray-600 ">
              <span className="font-semibold">ورزشی</span>
              <span className="text-[12px]">فوتبال، کیت ورزشی</span>
            </div>
          </div>

          <h4 className="text-gray-600 text-sm">۳ هزار</h4>
        </div>
      </div>
    </div>
  )
}
