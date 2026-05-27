'use client'

import { formatForCharts, formatMoney } from '@/utils/numerics'
import { Chart, useChart, type UseChartProps } from '@chakra-ui/charts'
import { getThemedColor } from '@worldresources/wri-design-systems'
import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  LabelList,
  Cell,
  ReferenceLine,
  ReferenceArea,
  Legend,
} from 'recharts'

const BarChart = ({
  data,
  series,
  useCurrencyFormat = false,
  usePercentageFormat = false,
  barCellKey,
  xlabel,
  ylabel,
  referenceValue,
  referenceLabel,
  showLegend,
}: {
  data: Record<string, string | number>[]
  series: UseChartProps<Record<string, string | number>>['series']
  useCurrencyFormat?: boolean
  usePercentageFormat?: boolean
  barCellKey?: string
  xlabel?: string
  ylabel?: string
  referenceValue?: number
  referenceLabel?: string
  showLegend?: boolean
}) => {
  const chart = useChart({
    data,
    series,
  })

  return (
    <ResponsiveContainer width='100%' height={350}>
      <Chart.Root maxH='sm' chart={chart}>
        <RechartsBarChart data={chart.data}>
          <CartesianGrid stroke={getThemedColor('neutral', 300)} vertical />
          <XAxis
            axisLine={false}
            tickLine={false}
            dataKey={chart.key('x')}
            label={{
              value: xlabel,
              position: 'insideBottom',
              offset: -5,
            }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            domain={[
              (dataMin: number) => {
                if (dataMin === 0) {
                  return 0
                }

                const magnitude = Math.pow(
                  10,
                  Math.floor(Math.log10(Math.abs(dataMin))),
                )
                let bump = Math.max(0, magnitude)
                if (barCellKey) {
                  bump = Math.abs(dataMin) * 1
                }

                return dataMin - bump
              },
              (dataMax: number) => {
                if (dataMax === 0) {
                  return 10
                }

                const magnitude = Math.pow(10, Math.floor(Math.log10(dataMax)))
                let bump = Math.max(10, magnitude)
                if (barCellKey && usePercentageFormat) {
                  bump = dataMax * 0.5
                } else if (barCellKey) {
                  bump = dataMax * 2
                }

                return dataMax + bump
              },
            ]}
            tickFormatter={
              usePercentageFormat
                ? (value: number) => formatForCharts(value, '%')
                : chart.formatNumber(
                    useCurrencyFormat
                      ? {
                          style: 'currency',
                          currency: 'USD',
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 2,
                          notation: 'compact',
                          unitDisplay: 'short',
                        }
                      : {
                          style: 'decimal',
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 2,
                          notation: 'compact',
                          unitDisplay: 'short',
                        },
                  )
            }
            label={{
              value: ylabel,
              position: 'insideBottomLeft',
              angle: -90,
            }}
          />
          <Tooltip
            animationDuration={100}
            cursor={{ fill: getThemedColor('neutral', 200) }}
            content={
              <Chart.Tooltip
                formatter={
                  usePercentageFormat
                    ? (value: number) => formatForCharts(value, '%')
                    : chart.formatNumber(
                        useCurrencyFormat
                          ? {
                              style: 'currency',
                              currency: 'USD',
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 2,
                              notation: 'compact',
                              unitDisplay: 'short',
                            }
                          : {
                              style: 'decimal',
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 2,
                              notation: 'compact',
                              unitDisplay: 'short',
                            },
                      )
                }
              />
            }
          />
          {showLegend ? (
            <Legend
              content={<Chart.Legend />}
              wrapperStyle={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                marginTop: 10,
              }}
            />
          ) : null}
          {chart.series.map((item) => (
            <Bar
              key={item.name}
              isAnimationActive
              dataKey={chart.key(item.name)}
              fill={
                (chart.color(item.color) as string) ??
                getThemedColor('secondary', 600)
              }
              stackId={item.stackId}
              radius={barCellKey ? 4 : 0}
            >
              <LabelList
                dataKey={barCellKey ? chart.key(item.name) : ''}
                position='top'
                offset={10}
                formatter={(value) => {
                  if (useCurrencyFormat) return formatMoney(value as number)
                  if (usePercentageFormat)
                    return formatForCharts(value as number, '%')
                  return value
                }}
              />
              {referenceValue && referenceLabel && (
                <>
                  <ReferenceArea
                    y1={referenceValue * 1}
                    y2={referenceValue * 1}
                    fill='transparent'
                    label={{
                      value: `${referenceLabel}: ${
                        useCurrencyFormat
                          ? formatMoney(referenceValue)
                          : usePercentageFormat
                            ? formatForCharts(referenceValue, '%')
                            : referenceValue
                      }`,
                      position: 'insideTopLeft',
                      fill: getThemedColor('neutral', 900),
                    }}
                  />
                  <ReferenceLine
                    y={referenceValue}
                    stroke={getThemedColor('neutral', 900)}
                    strokeDasharray='3 3'
                  />
                </>
              )}
              {barCellKey &&
                chart.data.map((item, index) => (
                  <Cell
                    key={index}
                    fill={
                      (item[barCellKey ?? ''] as number) >= 0
                        ? getThemedColor('success', 500)
                        : getThemedColor('error', 500)
                    }
                  />
                ))}
            </Bar>
          ))}
        </RechartsBarChart>
      </Chart.Root>
    </ResponsiveContainer>
  )
}

export default BarChart
