'use client'
import React, { FC, ReactElement, useRef, useEffect, useState } from 'react'
import {
  ArrowPathIcon,
  ArrowUpOnSquareIcon,
  EllipsisVerticalIcon,
  ShareIcon,
} from '@heroicons/react/24/outline'
import { DropdownList } from '@/components/ui/DropdownList'
import { DropDownItem } from '@/components/ui/DropdownList/DropDownItem'

export const ActivityTimeline: FC = (): ReactElement => {
  const [isOptionsShow, setIsOptionsShow] = useState(false)
  const ActivityTimelineRef = useRef<HTMLDivElement>(null)

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      ActivityTimelineRef.current &&
      !ActivityTimelineRef.current.contains(event.target as Node)
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
    <div
      className="bg-white p-5 rounded-md shadow-lg shadow-gray-200 relative"
      dir="rtl"
    >
      <div className="flex items-start justify-between" dir="ltr">
        <h4 className="font-semibold text-[15px]">جدول زمانی فعالیت</h4>

        <div
          className="cursor-pointer"
          ref={ActivityTimelineRef}
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

      <div>
        <ol className="relative border-r border-gray-200 dark:border-gray-700 mt-4">
          <li className="mb-10 pr-3">
            <div className="absolute w-3 h-3 bg-indigo-500 rounded-full mt-1.5 -right-1.5 dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              مهر ۱۴۰۲
            </time>
            <h3 className="text-md font-semibold text-gray-900 dark:text-white">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </h3>
            <p className="mt-1 mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
          </li>
          <li className="mb-10 pr-3">
            <div className="absolute w-3 h-3 bg-indigo-500 rounded-full mt-1.5 -right-1.5 dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              مهر ۱۴۰۲
            </time>
            <h3 className="text-md font-semibold text-gray-900 dark:text-white">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </h3>
            <p className="mt-1 mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
          </li>
          <li className="mb-10 p-3">
            <div className="absolute w-3 h-3 bg-amber-500 rounded-full mt-1.5 -right-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              مهر ۱۴۰۲
            </time>
            <h3 className="text-md font-semibold text-gray-900 dark:text-white">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </h3>
            <p className="mt-1 mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
          </li>
          <li className="pr-3">
            <div className="absolute w-3 h-3 bg-red-500 rounded-full mt-1.5 -right-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              مهر ۱۴۰۲
            </time>
            <h3 className="text-md font-semibold text-gray-900 dark:text-white">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </h3>
            <p className="mt-1 mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
          </li>
        </ol>
      </div>
    </div>
  )
}
