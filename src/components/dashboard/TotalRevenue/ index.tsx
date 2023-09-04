'use client'
import React, { FC, ReactElement, useState, useEffect, useRef } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { DropdownList } from '@/components/ui/DropdownList'
import { DropDownItem } from '@/components/ui/DropdownList/DropDownItem'
import { CompanyGrowthChart } from '@/components/dashboard/TotalRevenue/CompanyGrowthChart'
import { TotalRevenueChart } from '@/components/dashboard/TotalRevenue/TotalRevenueChart'

export const TotalRevenue: FC = (): ReactElement => {
  const [yearFilterListShow, setYearFilterShow] = useState(false)
  const yearFilterRef = useRef<HTMLButtonElement>(null)

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      yearFilterRef.current &&
      !yearFilterRef.current.contains(event.target as Node)
    ) {
      setYearFilterShow(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick)

    return () => {
      document?.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  return (
    <div className="grid grid-cols-12 items-start gap-5 overflow-hidden">
      <div className="col-span-8 p-5 overflow-hidden h-[400px] pb-10 bg-white rounded-md shadow-lg shadow-gray-200">
        <h3 className="text-gray-600 font-semibold text-right mb-2">
          کل درآمد
        </h3>
        <TotalRevenueChart />
      </div>
      <div className="col-span-4 p-5 flex flex-col items-center space-y-4 bg-white rounded-md shadow-lg shadow-gray-200">
        <div className="relative text-gray-500 text-[15px]">
          <button
            type="button"
            ref={yearFilterRef}
            className="flex items-center bg-indigo-100 text-indigo-500 hover:bg-indigo-500 hover:text-white duration-300 ease-out group p-1 rounded-md cursor-pointer space-x-2 focus:outline-0"
            onClick={() => setYearFilterShow((prev) => !prev)}
          >
            <ChevronDownIcon className="w-4 h-4 text-indigo-500 group-hover:text-white duration-300 ease-out" />
            <h4 className="text-sm">۱۴۰۲</h4>
          </button>
          {yearFilterListShow && (
            <DropdownList width={10}>
              <DropDownItem>۱۴۰۱</DropDownItem>
              <DropDownItem>۱۴۰۰</DropDownItem>
            </DropdownList>
          )}
        </div>
        <CompanyGrowthChart />
      </div>
    </div>
  )
}
