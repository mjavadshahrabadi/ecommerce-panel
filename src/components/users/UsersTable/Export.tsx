'use client'
import React, { FC, ReactElement, useState, useEffect, useRef } from 'react'
import {
  ArrowUpOnSquareIcon,
  ChevronDownIcon,
  PrinterIcon,
  DocumentTextIcon,
  DocumentArrowDownIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline'
import { DropdownList } from '@/components/ui/DropdownList'
import { DropDownItem } from '@/components/ui/DropdownList/DropDownItem'

export const Export: FC = (): ReactElement => {
  const exportRef = useRef<HTMLDivElement>(null)
  const [isOptionShow, setIsOptionShow] = useState(false)

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      exportRef.current &&
      !exportRef.current.contains(event.target as Node)
    ) {
      setIsOptionShow(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick)

    return () => {
      document?.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  return (
    <div className="relative">
      <div
        className="flex items-center p-2 rounded-md space-x-2 bg-gray-100 cursor-pointer hover:bg-gray-200 duration-300 ease-out"
        ref={exportRef}
        onClick={() => setIsOptionShow((prev) => !prev)}
      >
        <ArrowUpOnSquareIcon className="w-5 h-5 text-gray-600" />
        <span className="text-[15px] text-gray-700">Export</span>
        <ChevronDownIcon className="w-3 h-3 text-gray-600" />
      </div>
      {isOptionShow && (
        <DropdownList width={10}>
          <DropDownItem>
            <div className="flex items-center justify-between text-gray-700 text-[14px]">
              <PrinterIcon className="w-5 h-5 text-gray-600" />
              <span>پرینت</span>
            </div>
          </DropDownItem>
          <DropDownItem>
            <div className="flex items-center justify-between text-gray-700 text-[14px]">
              <DocumentTextIcon className="w-5 h-5 text-gray-600" />
              <span>CSV فایل</span>
            </div>
          </DropDownItem>
          <DropDownItem>
            <div className="flex items-center justify-between text-gray-700 text-[14px]">
              <DocumentArrowDownIcon className="w-5 h-5 text-gray-600" />
              <span>PDF فایل</span>
            </div>
          </DropDownItem>
          <DropDownItem>
            <div className="flex items-center justify-between text-gray-700 text-[14px]">
              <DocumentDuplicateIcon className="w-5 h-5 text-gray-600" />
              <span>Copy</span>
            </div>
          </DropDownItem>
        </DropdownList>
      )}
    </div>
  )
}
