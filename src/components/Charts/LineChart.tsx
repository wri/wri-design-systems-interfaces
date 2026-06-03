'use client'

import { formatForCharts } from '@/utils/numerics'
import { Chart, useChart } from '@chakra-ui/charts'
import { getThemedColor } from '@worldresources/wri-design-systems'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import type { UseChartProps } from '@chakra-ui/charts'
import { defaultColor, targetColor } from '@/utils/utils'

const LineChart = ({
  data,
  series,
  unit = '',
  label = '',
  maxHeight = 350,
}: {
  data: Record<string, string | number | null | undefined>[]
  series?: UseChartProps<
    Record<string, string | number | null | undefined>
  >['series']
  unit?: string
  label?: string
  maxHeight?: number
}) => {
  const target = data?.[data.length - 1]?.target as number | undefined | null

  const chart = useChart({
    data,
    series: series
      ? [
          ...series.map((item) => ({
            ...item,
            color: item.color ?? defaultColor,
          })),
        ]
      : [
          { name: 'y', label, color: defaultColor },
          {
            name: 'target',
            label: 'Target',
            color: targetColor,
            strokeDasharray: '5 5',
          },
        ],
  })

  return (
    <ResponsiveContainer width='100%' height={maxHeight}>
      <Chart.Root chart={chart}>
        <RechartsLineChart data={chart.data}>
          <CartesianGrid
            stroke={getThemedColor('neutral', 300)}
            strokeDasharray='3 3'
          />
          <XAxis
            dataKey={chart.key('x')}
            stroke={getThemedColor('neutral', 300)}
          />
          <YAxis
            tickLine={false}
            tickMargin={10}
            tickFormatter={(value: number) =>
              formatForCharts(value, unit, true)
            }
            stroke={getThemedColor('neutral', 300)}
            domain={[
              0,
              (dataMax: number) => {
                if (dataMax === 0) {
                  return 10
                }

                const magnitude = Math.pow(10, Math.floor(Math.log10(dataMax)))
                const bump = Math.max(10, magnitude)

                const localTarget = target ?? 0
                if (localTarget >= dataMax) {
                  return localTarget + bump
                }

                return dataMax + bump
              },
            ]}
          />
          <Tooltip
            animationDuration={100}
            cursor={false}
            content={
              <Chart.Tooltip
                formatter={(value: number) => formatForCharts(value, unit)}
              />
            }
          />
          <Legend
            content={
              <div className='flex items-center justify-center gap-4'>
                {series ? (
                  series.map((item) => (
                    <div
                      className='flex items-center gap-1.5 text-neutral-800'
                      key={item.name}
                    >
                      <div
                        className='h-4 w-4 rounded-full'
                        style={{
                          backgroundColor: item.color ?? defaultColor,
                        }}
                      />
                      {item.label}
                    </div>
                  ))
                ) : (
                  <>
                    <div className='flex items-center gap-1.5 text-neutral-800'>
                      <div
                        className='h-4 w-4 rounded-full'
                        style={{
                          backgroundColor: defaultColor,
                        }}
                      />
                      {label}
                    </div>
                    {target !== null && target !== undefined ? (
                      <div className='flex items-center gap-1.5 text-neutral-800'>
                        <div
                          className='h-4 w-4 rounded-full'
                          style={{
                            backgroundColor: targetColor,
                          }}
                        />
                        Target: {formatForCharts(target, unit)}
                      </div>
                    ) : null}
                  </>
                )}
              </div>
            }
          />
          {chart.series.map((item) => (
            <Line
              key={item.name}
              isAnimationActive
              dataKey={chart.key(item.name)}
              stroke={chart.color(item.color) as string}
              strokeWidth={2}
              strokeDasharray={item.strokeDasharray}
            />
          ))}
        </RechartsLineChart>
      </Chart.Root>
    </ResponsiveContainer>
  )
}

export default LineChart
