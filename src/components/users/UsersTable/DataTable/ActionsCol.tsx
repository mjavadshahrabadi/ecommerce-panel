'use client'
import React, { FC, ReactElement, useState, useEffect, useRef } from 'react'
import {
  EllipsisVerticalIcon,
  TrashIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline'
import { DropdownList } from '@/components/ui/DropdownList'
import { DropDownItem } from '@/components/ui/DropdownList/DropDownItem'

export const ActionsCol: FC = (): ReactElement => {
  const menuOptionsRef = useRef<HTMLDivElement>(null)
  const [isOptionsShow, setIsOptionsShow] = useState(false)

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      menuOptionsRef.current &&
      !menuOptionsRef.current.contains(event.target as Node)
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
    <td className="p-1">
      <div className="flex items-center space-x-2 justify-center">
        <PencilSquareIcon className="w-5 h-5 text-gray-700 cursor-pointer" />
        <TrashIcon className="w-5 h-5 text-gray-700 cursor-pointer" />
        <div
          onClick={() => setIsOptionsShow((prev) => !prev)}
          className="relative"
          ref={menuOptionsRef}
        >
          <EllipsisVerticalIcon className="w-5 h-5 text-gra-700 cursor-pointer" />
          {isOptionsShow && (
            <DropdownList width={10}>
              <DropDownItem>1</DropDownItem>
              <DropDownItem>2</DropDownItem>
            </DropdownList>
          )}
        </div>
      </div>
    </td>
  )
}
