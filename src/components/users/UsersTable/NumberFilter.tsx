import React, { FC, ReactElement } from 'react'

interface NumberFilter {
  options: number[]
}

export const NumberFilter: FC<NumberFilter> = ({ options }): ReactElement => {
  return (
    <select
      defaultValue={options[0] || 10}
      className="py-0.5 px-3 focus:outline-0 cursor-pointer border rounded-md border-gray-300 text-gray-600 text-sm"
    >
      {options &&
        options.map((item, _i) => (
          <option key={_i} value={item}>
            {item}
          </option>
        ))}
    </select>
  )
}
