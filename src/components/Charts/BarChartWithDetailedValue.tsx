import { validateAchieved } from '@/utils/utils'
import { CheckIcon, CloseIcon } from '../icons'
import { formatSubmissionDate } from '@/utils/time'
import { ReportItem } from './types'
import CardContainer from './CardContainer'
import BarChart from './BarChart'
import HighlightedValue from './HighlightedValue'

const BarChartWithDetailedValue = ({
  title,
  caption,
  data,
  cumulativeLabel,
  averageLabel,
  chartKey,
  referenceLineLabel,
  usePercentageFormat,
  useCurrencyFormat,
}: {
  title: string
  caption?: string
  data: ReportItem[]
  cumulativeLabel?: string
  averageLabel?: string
  chartKey: string
  referenceLineLabel?: string
  usePercentageFormat?: boolean
  useCurrencyFormat?: boolean
}) => {
  const target = data?.[data.length - 1]?.metric?.targets?.[0]?.value ?? null

  const isPercentage = data?.[0]?.unit === '%'
  const multiplier = isPercentage ? 100 : 1
  const unit = data?.[0]?.unit ?? ''

  const valueToCompare = averageLabel
    ? data.reduce((acc, data) => {
        return acc + (data.valueNumber ?? 0) * multiplier
      }, 0) / data.length
    : cumulativeLabel
      ? data.reduce((acc, data) => {
          return acc + (data.valueNumber ?? 0)
        }, 0)
      : (data[data.length - 1]?.valueNumber ?? 0)

  const barChartData =
    data?.map((item) => ({
      x: formatSubmissionDate(item.submissionDate, 'MMM yyyy'),
      [chartKey]: (item.valueNumber ?? 0) * multiplier,
    })) ?? []

  return (
    <CardContainer
      title={title}
      caption={caption}
      tag={
        target
          ? {
              ...validateAchieved(
                valueToCompare,
                target,
                <CheckIcon />,
                <CloseIcon />,
              ),
            }
          : undefined
      }
    >
      <div className='flex items-start gap-10'>
        <HighlightedValue
          label={averageLabel ?? cumulativeLabel ?? ''}
          value={valueToCompare}
          unit={unit}
        />
        {target !== null && target !== undefined ? (
          <HighlightedValue label='Target' value={target} unit={unit} />
        ) : null}
      </div>
      <BarChart
        data={barChartData}
        series={[chartKey].map((item) => ({
          name: item,
          label: item,
        }))}
        barCellKey={chartKey}
        referenceValue={referenceLineLabel ? valueToCompare : undefined}
        referenceLabel={referenceLineLabel}
        usePercentageFormat={usePercentageFormat}
        useCurrencyFormat={useCurrencyFormat}
      />
    </CardContainer>
  )
}

export default BarChartWithDetailedValue
