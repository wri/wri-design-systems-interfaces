import { formatForCharts } from '@/utils/numerics'

const HighlightedValue = ({
  label,
  value,
  unit = '',
  target,
  noMargin,
}: {
  label: string
  value: number
  unit?: string
  target?: number | null
  noMargin?: boolean
}) => {
  return (
    <div className={noMargin ? '' : 'mb-5'}>
      <p className='text-sm'>{label}</p>
      <p className='text-secondary-700 py-1 text-3xl font-bold'>
        {formatForCharts(value, unit)}
        {target !== null && target !== undefined ? (
          <span className='ml-1.5 text-base font-normal text-neutral-800'>
            / {formatForCharts(target, unit)}
          </span>
        ) : null}
      </p>
    </div>
  )
}

export default HighlightedValue
