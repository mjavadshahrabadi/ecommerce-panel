import React, { FC, ReactElement } from 'react'
import ReactApexChart from 'react-apexcharts'

export const ApexChart: FC = (): ReactElement => {
  const chartOptions = {
    chart: {
      height: 200,
      type: 'radialBar',
      offsetY: -10,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          position: 'inside',
          name: {
            fontSize: '16px',
            color: undefined,
          },
          value: {
            fontSize: '16px',
            color: undefined,
            formatter: (val: string) => {
              return val + '%'
            },
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 4,
    },
    labels: [''],
  }

  const chartSeries = [67]

  return (
    <div id="chart" className="flex flex-col space-y-1 items-center" dir="rtl">
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="radialBar"
        height={200}
      />
      <span className="text-sm text-gray-700">۶۲ درصد رشد شرکت</span>
    </div>
  )
}
