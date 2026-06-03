'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { getThemedColor } from '@worldresources/wri-design-systems'
import {
  Cell,
  Legend,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

const PieChart = ({
  data,
}: {
  data: { name: string; value: number; color: string }[]
}) => {
  const chart = useChart({
    data,
  })

  return (
    <ResponsiveContainer width='100%' height={350}>
      <Chart.Root boxSize='auto' mx='auto' chart={chart}>
        <RechartsPieChart>
          <Tooltip
            cursor={false}
            animationDuration={100}
            content={<Chart.Tooltip hideLabel />}
          />
          <Legend content={<Chart.Legend />} />
          <Pie
            isAnimationActive
            data={chart.data}
            dataKey={chart.key('value')}
            innerRadius={70}
            labelLine={{ stroke: getThemedColor('neutral', 300) }}
            label={({ index }) => {
              const { value } = chart.data[index] ?? {}
              const percent = (value ?? 0) / chart.getTotal('value')

              return `${value} (${(percent * 100).toFixed(1)}%)`
            }}
          >
            {chart.data.map((item) => (
              <Cell key={item.name} fill={chart.color(item.color) as string} />
            ))}
          </Pie>
        </RechartsPieChart>
      </Chart.Root>
    </ResponsiveContainer>
  )
}

export default PieChart
