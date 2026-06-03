import { formatForCharts, formatMoney } from '@/utils/numerics'
import Loader from './Loader'

const StatisticCard = ({
  label,
  value,
  unit,
  caption,
  isLoading,
  useFormatMoney,
}: {
  label: string
  value: number | null
  unit?: string
  caption?: string
  isLoading?: boolean
  useFormatMoney?: boolean
}) => {
  return (
    <div className='w-full rounded-lg border border-neutral-300 bg-white p-4 shadow-md'>
      <p className='mb-4 font-bold text-neutral-900'>{label}</p>
      {isLoading ? (
        <Loader />
      ) : (
        <p className='text-primary-800 text-3xl font-bold'>
          {value !== null
            ? useFormatMoney
              ? formatMoney(value)
              : formatForCharts(value, unit)
            : '--'}
        </p>
      )}
      {caption && <p className='mt-3 text-xs text-neutral-700'>{caption}</p>}
    </div>
  )
}

export default StatisticCard
