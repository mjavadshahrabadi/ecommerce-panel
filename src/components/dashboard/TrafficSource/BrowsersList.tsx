import React, { FC, ReactElement } from 'react'

const browsersData = [
  {
    num: 1,
    browser: 'Chrome',
    visits: '۲۵۵',
    dataInPercentage: 90,
  },
  {
    num: 2,
    browser: 'Safari',
    visits: '۲۰۰',
    dataInPercentage: 80,
  },
  {
    num: 3,
    browser: 'Firefox',
    visits: '۱۵۰',
    dataInPercentage: 70,
  },
  {
    num: 4,
    browser: 'Edge',
    visits: '۱۰۰',
    dataInPercentage: 60,
  },
  {
    num: 5,
    browser: 'Opera',
    visits: '۵۰',
    dataInPercentage: 50,
  },
  {
    num: 6,
    browser: 'Brave',
    visits: '۳۰',
    dataInPercentage: 40,
  },
  {
    num: 7,
    browser: '۲۰',
    visits: '۲۵۵',
    dataInPercentage: 30,
  },
  {
    num: 8,
    browser: 'UC Browser',
    visits: '۱۰',
    dataInPercentage: 20,
  },
]
export const BrowsersList: FC = (): ReactElement => {
  return (
    <div className="grid grid-cols-12 gap-2 place-items-center">
      <div className="col-span-1 flex flex-col space-y-6">
        <h4 className="text-sm font-semibold text-gray-700">NO</h4>
        {browsersData &&
          browsersData.map((browser) => (
            <span key={browser.num}>{browser.num}</span>
          ))}
      </div>
      <div className="col-span-2 flex flex-col space-y-6">
        <h4 className="text-sm font-semibold text-gray-700">Browsers</h4>
        {browsersData &&
          browsersData.map((browser) => (
            <span key={browser.num}>{browser.browser}</span>
          ))}
      </div>
      <div className="col-span-2 flex flex-col space-y-6">
        <h4 className="text-sm font-semibold text-gray-700">Visits</h4>
        {browsersData &&
          browsersData.map((browser) => (
            <span key={browser.num}>{browser.visits}</span>
          ))}
      </div>
      <div className="col-span-6 flex flex-col space-y-6">
        <h4 className="text-sm font-semibold text-gray-700">
          Data in percentage
        </h4>
        {browsersData &&
          browsersData.map((browser) => (
            <span key={browser.num}>{browser.dataInPercentage} %</span>
          ))}
      </div>
    </div>
  )
}
