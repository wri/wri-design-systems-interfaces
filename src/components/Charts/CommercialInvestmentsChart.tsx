import { formatSubmissionDate } from '@/utils/time'
import { useState } from 'react'
import { Tag } from '@worldresources/wri-design-systems'
import {
  debtColor,
  equityColor,
  targetColor,
  validateAchieved,
} from '@/utils/utils'
import { CheckIcon } from '@/components/icons'
import CardContainer from '@/components/Charts/CardContainer'
import HighlightedValue from './HighlightedValue'
import LineChart from './LineChart'
import BarChart from './BarChart'
import NoActivityReported from './NoActivityReported'
import { ReportItem } from './types'

const CommercialInvestmentsChart = ({
  title,
  caption,
  commercialInvestmentsData,
  commercialInvestmentEquityData,
  commercialInvestmentDebtData,
  commercialTarget,
}: {
  title: string
  caption?: string
  commercialInvestmentsData: ReportItem[]
  commercialInvestmentEquityData: ReportItem[]
  commercialInvestmentDebtData: ReportItem[]
  commercialTarget: number | null
}) => {
  const [view, setView] = useState<'cumulative' | 'period'>('cumulative')

  const unit = commercialInvestmentsData?.[0]?.unit ?? ''
  const totalValue = [
    ...commercialInvestmentEquityData,
    ...commercialInvestmentDebtData,
  ].reduce((acc, current) => {
    return acc + (current.valueNumber ?? 0)
  }, 0)

  const allDatesMap = new Map<number, Date>()
  ;[
    ...commercialInvestmentsData,
    ...commercialInvestmentEquityData,
    ...commercialInvestmentDebtData,
  ].forEach((item) => {
    allDatesMap.set(item.submissionDate.getTime(), item.submissionDate)
  })

  const sortedDates = Array.from(allDatesMap.values()).sort(
    (a, b) => a.getTime() - b.getTime(),
  )

  let cumulativeEquity = 0
  let cumulativeDebt = 0

  const equityByTime = new Map<number, ReportItem>()
  commercialInvestmentEquityData.forEach((item) => {
    equityByTime.set(item.submissionDate.getTime(), item)
  })
  const debtByTime = new Map<number, ReportItem>()
  commercialInvestmentDebtData.forEach((item) => {
    debtByTime.set(item.submissionDate.getTime(), item)
  })

  const cumulativeCommercialData = sortedDates.map((date) => {
    const time = date.getTime()
    const equityItem = equityByTime.get(time)
    const debtItem = debtByTime.get(time)

    cumulativeEquity += equityItem?.valueNumber ?? 0
    cumulativeDebt += debtItem?.valueNumber ?? 0

    return {
      x: formatSubmissionDate(date, 'MMM yyyy'),
      commercial: cumulativeEquity + cumulativeDebt,
      target: commercialTarget,
      equity: cumulativeEquity,
      debt: cumulativeDebt,
    }
  })

  const periodCommercialData = sortedDates.map((date) => {
    const time = date.getTime()
    const equityItem = equityByTime.get(time)
    const debtItem = debtByTime.get(time)

    const equity = equityItem?.valueNumber ?? 0
    const debt = debtItem?.valueNumber ?? 0

    return {
      x: formatSubmissionDate(date, 'MMM yyyy'),
      commercial: equity + debt,
      equity,
      debt,
    }
  })

  const hasData =
    (commercialInvestmentEquityData &&
      commercialInvestmentEquityData.length > 0) ||
    (commercialInvestmentDebtData && commercialInvestmentDebtData.length > 0)

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
          <div className='flex flex-wrap items-center gap-7'>
            <HighlightedValue
              label='Total reported'
              value={totalValue}
              unit={unit}
              target={commercialTarget}
              noMargin
            />
            <hr className='h-[83px] w-px bg-neutral-300' />
            <HighlightedValue
              label='Total Equity funding'
              value={cumulativeEquity}
              unit={commercialInvestmentEquityData?.[0]?.unit ?? ''}
              target={
                commercialInvestmentEquityData?.[0]?.metric?.targets?.[0]
                  ?.value ?? null
              }
              noMargin
            />
            <hr className='h-[83px] w-px bg-neutral-300' />
            <HighlightedValue
              label='Total Debt funding'
              value={cumulativeDebt}
              unit={commercialInvestmentDebtData?.[0]?.unit ?? ''}
              target={
                commercialInvestmentDebtData?.[0]?.metric?.targets?.[0]
                  ?.value ?? null
              }
              noMargin
            />
          </div>
          {commercialTarget !== null && commercialTarget !== undefined ? (
            <div className={'-mt-1 mb-5 flex'}>
              <Tag
                {...validateAchieved(
                  totalValue,
                  commercialTarget,
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
              data={cumulativeCommercialData}
              series={[
                { name: 'commercial', label: 'Commercial cumulative total' },
                {
                  name: 'equity',
                  label: 'Equity cumulative total',
                  color: equityColor,
                },
                {
                  name: 'debt',
                  label: 'Debt cumulative total',
                  color: debtColor,
                },
                {
                  name: 'target',
                  label: 'Commercial Inv. target',
                  color: targetColor,
                  strokeDasharray: '5 5',
                },
              ]}
              unit={unit}
            />
          ) : (
            <BarChart
              data={periodCommercialData.map((item) => ({
                x: item.x,
                equity: item.equity,
                debt: item.debt,
              }))}
              series={[
                {
                  name: 'equity',
                  label: 'Equity',
                  stackId: 'commercial',
                  color: equityColor,
                },
                {
                  name: 'debt',
                  label: 'Debt',
                  stackId: 'commercial',
                  color: debtColor,
                },
              ]}
              useCurrencyFormat
            />
          )}
        </>
      ) : (
        <NoActivityReported />
      )}
    </CardContainer>
  )
}

export default CommercialInvestmentsChart
