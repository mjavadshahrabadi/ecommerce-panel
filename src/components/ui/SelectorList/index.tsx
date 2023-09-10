import React, { FC, ReactElement } from 'react'

interface SelectorListProp {
  selectorDefaultValue: string
  onSelectHandler: React.Dispatch<React.SetStateAction<string>>
  options: string[]
}

export const SelectorList: FC<SelectorListProp> = ({
  selectorDefaultValue = 'گزینه مد نظر را انتخاب کنید',
  options = [],
  onSelectHandler,
}): ReactElement => {
  return (
    <select
      defaultValue={selectorDefaultValue}
      className="p-1 focus:outline-0 rounded-md border border-gray-300 focus:ring-1 ring-indigo-500 cursor-pointer text-gray-600 text-[14px]"
      onChange={(e) => onSelectHandler(e.target.value)}
    >
      {options &&
        options.map((option, _i) => (
          <option value={option} key={_i}>
            {option}
          </option>
        ))}
    </select>
  )
}
