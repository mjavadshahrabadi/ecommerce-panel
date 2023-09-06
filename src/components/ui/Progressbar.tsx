import React, { FC, ReactElement } from 'react'

interface ProgressbarProps {
  percentage: number
}

export const Progressbar: FC<ProgressbarProps> = ({
  percentage,
}): ReactElement => {
  return (
    <div className="flex items-center space-x-2">
      <p>{percentage}%</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className={`bg-indigo-500 h-2.5 rounded-full dark:bg-gray-300`}
          style={{ width: percentage + '%' }}
        ></div>
      </div>
    </div>
  )
}
