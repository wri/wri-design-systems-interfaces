import { formatSubmissionDate } from '@/utils/time'
import { CheckIcon } from '@/components/icons'
import { validateAchieved } from '@/utils/utils'
import HighlightedValue from './HighlightedValue'
import { useState } from 'react'
import { Tag } from '@worldresources/wri-design-systems'
import { ReportItem } from './types'
import CardContainer from './CardContainer'
import LineChart from './LineChart'
import BarChart from './BarChart'
import NoActivityReported from './NoActivityReported'

const CumulativeChart = ({
  title,
  caption,
  data,
  cumulativeLabel,
  customChartLegend,
  useCurrencyFormat,
  barChartKey,
}: {
  title: string
  caption?: string
  data: ReportItem[]
  cumulativeLabel: string
  customChartLegend?: string
  useCurrencyFormat?: boolean
  barChartKey?: string
}) => {
  const [view, setView] = useState<'cumulative' | 'period'>('cumulative')

  const target = data?.[data.length - 1]?.metric?.targets?.[0]?.value ?? null

  const unit = data?.[0]?.unit ?? ''

  const totalValue = data.reduce((acc, current) => {
    return acc + (current.valueNumber ?? 0)
  }, 0)

  const cumulativeData: { x: string; y: number; target: number | null }[] = []
  data.forEach((item, index) => {
    const value = item.valueNumber ?? 0
    const cumulativeValue = cumulativeData[index - 1]?.y ?? 0
    cumulativeData.push({
      x: formatSubmissionDate(item.submissionDate, 'MMM yyyy'),
      y: cumulativeValue + value,
      target,
    })
  })

  const hasData = data.length > 0

  return (
    <CardContainer
      title={title}
      caption={caption}
      changeOptions={[
        { label: 'Cumulative total', value: 'cumulative' },
        { label: 'Reporting period', value: 'period' },
      ]}
      onViewChange={(value) => setView(value[0] as 'cumulative' | 'period')}
      isCumulative
    >
      {hasData ? (
        <>
          <HighlightedValue
            label={cumulativeLabel}
            value={totalValue}
            unit={unit}
            target={target}
          />
          {target !== null && target !== undefined ? (
            <div className='-mt-4 mb-5 flex'>
              <Tag
                {...validateAchieved(
                  totalValue,
                  target,
                  <CheckIcon />,
                  null,
                  'Target achieved',
                  'Target not achieved',
                )}
              />
            </div>
          ) : null}
          {view === 'cumulative' ? (
            <LineChart
              data={cumulativeData}
              unit={unit}
              label={customChartLegend ?? title}
            />
          ) : (
            <BarChart
              data={data.map((item) => ({
                x: formatSubmissionDate(item.submissionDate, 'MMM yyyy'),
                [barChartKey ?? 'y']: item.valueNumber ?? 0,
              }))}
              series={[
                {
                  name: barChartKey ?? 'y',
                  label: customChartLegend ?? title,
                },
              ]}
              barCellKey={barChartKey}
              useCurrencyFormat={useCurrencyFormat}
            />
          )}
        </>
      ) : (
        <NoActivityReported />
      )}
    </CardContainer>
  )
}

export default CumulativeChart
