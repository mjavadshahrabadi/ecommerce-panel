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
import { TeamsList } from '@/components/profile/Teams/TeamsList'
import { teamsData } from '@/constants/profile/teams'

export const Teams: FC = (): ReactElement => {
  const teamOptionsRef = useRef<HTMLDivElement>(null)
  const [isOptionsShow, setIsOptionsShow] = useState(false)

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      teamOptionsRef.current &&
      !teamOptionsRef.current.contains(event.target as Node)
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
    <div className="bg-white rounded-md shadow-lg shadow-gray-200 p-5">
      <div className="flex items-center justify-between relative">
        <h4 className="text-sm font-semibold text-gray-700">تیم ها</h4>
        <div
          className="cursor-pointer"
          ref={teamOptionsRef}
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
      <TeamsList teams={teamsData} />

      <button
        type="button"
        className="bg-indigo-500 text-white text-sm py-2 w-full mt-5 rounded-md hover:bg-indigo-600 active:scale-95 duration-300 ease-out"
      >
        مشاهده همه تیم ها
      </button>
    </div>
  )
}
