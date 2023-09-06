import React, { FC, ReactElement } from 'react'
import { data as countryData } from '@/constants/dashboard/country'
import Image from 'next/image'
import { Progressbar } from '@/components/ui/Progressbar'

export const Country: FC = (): ReactElement => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Browser
            </th>
            <th scope="col" className="px-6 py-3">
              Visits
            </th>
            <th scope="col" className="px-6 py-3">
              Data in percentage
            </th>
          </tr>
        </thead>
        <tbody>
          {countryData &&
            countryData.map((country) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={country.num}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {country.num}
                </th>
                <td className="px-6 py-4 flex items-center space-x-2">
                  <Image
                    src={country.imgSrc}
                    alt={country.country}
                    className="w-6 h-6"
                    width={100}
                    height={100}
                  />
                  <span>{country.country}</span>
                </td>
                <td className="px-6 pynom-4" dir="rtl">
                  {country.visits} هزار
                </td>
                <td className="px-6 py-4">
                  <Progressbar percentage={country.dataInPercentage} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
