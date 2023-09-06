'use client'
import React, { FC, ReactElement, useState } from 'react'
import { SelectorList } from '@/components/ui/SelectorList'
import { Role } from '@/components/users/enum/Role'
import { Plan } from '@/components/users/enum/Plan'
import { Status } from '@/components/users/enum/Status'

export const SearchFilter: FC = (): ReactElement => {
  const [selectedRoleOption, setSelectedRoleOption] = useState('')
  const [selectedPlanOption, setSelectedPlanOption] = useState('')
  const [selectedStatusOption, setSelectedStatusOption] = useState('')

  return (
    <div
      className="p-5 bg-white shadow-md shadow-gray-200 rounded-md flex flex-col space-y-4"
      dir="rtl"
    >
      <h4 className="text-[15px] font-semibold text-gray-700">فیلتر جستجو</h4>
      <div className="grid grid-cols-3 gap-5">
        <SelectorList
          onSelectHandler={setSelectedRoleOption}
          selectorDefaultValue={selectedRoleOption}
          options={Object.keys(Role) as Array<keyof typeof Role>}
        />
        <SelectorList
          onSelectHandler={setSelectedPlanOption}
          selectorDefaultValue={selectedPlanOption}
          options={Object.keys(Plan) as Array<keyof typeof Plan>}
        />
        <SelectorList
          onSelectHandler={setSelectedStatusOption}
          selectorDefaultValue={selectedStatusOption}
          options={Object.keys(Status) as Array<keyof typeof Status>}
        />
      </div>
    </div>
  )
}
