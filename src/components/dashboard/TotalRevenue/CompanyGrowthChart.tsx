import React, { FC, ReactElement } from 'react'
import { WalletIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { digitsEnToFa } from '@persian-tools/persian-tools'

export const CompanyGrowthChart: FC = (): ReactElement => {
  return (
    <div
      id="chart"
      className="w-full flex flex-col items-center space-y-4 pt-3"
      dir="rtl"
    >
      <div className="w-32 h-32">
        <CircularProgressbar
          value={62}
          text={`${digitsEnToFa(62)}%`}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 1,
            strokeLinecap: 'round',
            textSize: '14px',
            pathTransitionDuration: 0.5,

            pathColor: '#6366f1',
            textColor: '#374151',
            trailColor: '#e5e7eb',
            backgroundColor: '#3e98c7',
          })}
        />
      </div>
      <span className="text-sm text-gray-700">۶۲ درصد رشد شرکت</span>

      <div className="flex items-center justify-evenly mt-6 w-full">
        <div className="flex items-center">
          <div className="flex flex-col items-end space-y-0.5 text-sm text-gray-600">
            <span>۱۴۰۲</span>
            <span>$41.2k</span>
          </div>
          <div className="p-2 rounded-md bg-teal-100 mr-2">
            <WalletIcon className="w-5 h-5 text-teal-500" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col items-end space-y-0.5 text-sm text-gray-600">
            <span>۱۴۰۱</span>
            <span>$22.5k</span>
          </div>
          <div className="p-2 rounded-md bg-violet-100 mr-2">
            <CurrencyDollarIcon className="w-5 h-5 text-violet-500" />
          </div>
        </div>
      </div>
    </div>
  )
}
