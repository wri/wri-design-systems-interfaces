import React from 'react'

interface ProgressCircleProps {
  value: number | null | undefined
  unit?: string
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  value,
  unit = '%',
}) => {
  const radius = 40
  const stroke = 7
  const circumference = radius * 2 * Math.PI
  // 270 degrees arc length
  const arcLength = (circumference * 270) / 360
  const safeValue =
    value !== null && value !== undefined
      ? Math.min(Math.max(value, 0), 100)
      : null

  // Determine how much of the arc should be filled
  const progressLength = safeValue ? (safeValue / 100) * arcLength : 0

  return (
    <div className='relative flex items-center justify-center py-4'>
      <svg
        className='h-auto w-full max-w-[290px] rotate-135 transform'
        viewBox='0 0 100 100'
      >
        {/* Background track */}
        <circle
          className='stroke-primary-800/20'
          fill='transparent'
          strokeWidth={stroke}
          strokeDasharray={`${arcLength} ${circumference}`}
          r={radius}
          cx='50'
          cy='50'
          strokeLinecap='butt'
        />
        {/* Progress track */}
        <circle
          className='stroke-primary-800 transition-all duration-1000 ease-out'
          fill='transparent'
          strokeWidth={stroke}
          strokeDasharray={`${progressLength} ${circumference}`}
          r={radius}
          cx='50'
          cy='50'
          strokeLinecap='butt'
        />
      </svg>
      {/* Center Text Wrapper */}
      <div className='absolute inset-0 flex items-center justify-center'>
        <span className='text-primary-800 mt-2 text-4xl font-bold'>
          {safeValue !== null && safeValue !== undefined
            ? `${safeValue}${unit}`
            : '--'}
        </span>
      </div>
    </div>
  )
}

export default ProgressCircle
