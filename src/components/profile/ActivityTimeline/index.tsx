'use client'
import React, { FC, ReactElement, useRef, useEffect, useState } from 'react'
import {
  ArrowPathIcon,
  ArrowUpOnSquareIcon,
  EllipsisVerticalIcon,
  ShareIcon,
} from '@heroicons/react/24/outline'
export const ActivityTimeline: FC = (): ReactElement => {
  const activityOptionsRef = useRef<HTMLDivElement>(null)
  const [isOptionsShow, setIsOptionsShow] = useState(false)

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      activityOptionsRef.current &&
      !activityOptionsRef.current.contains(event.target as Node)
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
    <div className="relative bg-white p-5 shadow-lg rounded-md shadow-gray-200">
      <div className="flex items-center justify-between">
        <h4 className="text-sm text-gray-700 font-semibold">
          جدول زمانی فعالیت
        </h4>
        <div
          className="cursor-pointer"
          ref={activityOptionsRef}
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
      <div className="mt-5">
        <ol
          className="relative border-r border-gray-200 dark:border-gray-700"
          dir="rtl"
        >
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -right-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <div className="pr-3 flex flex-col space-y-2 pt-1">
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                شهریور ۱۴۰۱
              </time>
              <h3 className="text-md font-semibold text-gray-700 dark:text-white">
                عنوان فعالیت یکم
              </h3>
              <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              </p>
            </div>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-red-500 rounded-full mt-1.5 -right-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <div className="pr-3 flex flex-col space-y-2 pt-1">
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                مهر ۱۴۰۱
              </time>
              <h3 className="text-md font-semibold text-gray-700 dark:text-white">
                عنوان فعالیت دوم
              </h3>
              <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              </p>
            </div>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-sky-500 rounded-full mt-1.5 -right-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <div className="pr-3 flex flex-col space-y-2 pt-1">
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                آذر ۱۴۰۱
              </time>
              <h3 className="text-md font-semibold text-gray-700 dark:text-white">
                عنوان فعالیت سوم
              </h3>
              <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  )
}
import { DropdownList } from '@/components/ui/DropdownList'

import { DropDownItem } from '@/components/ui/DropdownList/DropDownItem'
