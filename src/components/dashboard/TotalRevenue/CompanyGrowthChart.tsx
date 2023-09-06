import React, { FC, ReactElement } from 'react'
import ReactApexChart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import { WalletIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

export const CompanyGrowthChart: FC = (): ReactElement => {
  const chartOptions: ApexOptions = {
    chart: {
      height: 200,
      type: 'bar',
      offsetY: -15,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: '16px',
            color: undefined,
          },
          value: {
            fontSize: '16px',
            color: undefined,
            formatter: (val) => {
              return val + '%'
            },
          },
        },
      },
    },
    fill: {
      type: 'solid',
      colors: ['#6366f1'],
    },
    stroke: {
      lineCap: 'round',
    },
    labels: [''],
  }

  const chartSeries = [62]

  return (
    <div id="chart" className="flex flex-col items-center" dir="rtl">
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="radialBar"
        height={200}
      />
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
