'use client'

import {
  BarList as ChakraBarListChart,
  type BarListData,
  useChart,
  type UseChartProps,
} from '@chakra-ui/charts'

const BarListChart = ({
  data,
  series,
  sortDirection,
  unit = '',
}: {
  data: BarListData[]
  series: UseChartProps<BarListData>['series']
  sortDirection?: 'asc' | 'desc'
  unit?: string
}) => {
  const chart = useChart<BarListData>({
    sort: sortDirection ? { by: 'value', direction: sortDirection } : undefined,
    data,
    series,
  })

  return (
    <ChakraBarListChart.Root chart={chart}>
      <ChakraBarListChart.Content>
        <ChakraBarListChart.Label title='' flex='1'>
          <ChakraBarListChart.Bar tooltip />
        </ChakraBarListChart.Label>
        <ChakraBarListChart.Label title='' titleAlignment='end'>
          <ChakraBarListChart.Value
            valueFormatter={(value) => `${value.toFixed(2)}${unit}`}
          />
        </ChakraBarListChart.Label>
      </ChakraBarListChart.Content>
    </ChakraBarListChart.Root>
  )
}

export default BarListChart
