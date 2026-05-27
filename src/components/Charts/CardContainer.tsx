'use client'

import { cn } from '@/utils/styles'
import { Select, Tag } from '@worldresources/wri-design-systems'

const CardContainer = ({
  children,
  title,
  caption,
  tag,
  isCumulative,
  changeOptions,
  onViewChange,
  isStackedBars,
}: {
  children: React.ReactNode
  title: string
  caption?: string
  tag?: {
    label: string
    variant: 'info-white' | 'info-grey' | 'success' | 'warning' | 'error'
    icon?: React.ReactNode
  }
  isCumulative?: boolean
  changeOptions?: { label: string; value: string }[]
  onViewChange?: (view: string[]) => void
  isStackedBars?: boolean
}) => {
  return (
    <div className='flex-1 rounded-lg border border-neutral-200 bg-white p-4 shadow-md'>
      <div
        className={cn(
          'flex flex-col items-start gap-1',
          !isCumulative ? 'mb-4' : '',
        )}
      >
        <div className='flex w-full justify-between gap-1'>
          <div
            className={
              'flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap'
            }
          >
            <h2 className='min-w-fit font-bold text-neutral-900'>{title}</h2>
            {(isCumulative || isStackedBars) &&
            changeOptions &&
            changeOptions.length > 0 ? (
              <div className='flex-1'>
                <Select
                  items={changeOptions}
                  defaultValue={[changeOptions?.[0]?.value ?? '']}
                  size='small'
                  width='170px'
                  onChange={(value) => onViewChange?.(value)}
                  className='sm:-mt-1.5'
                />
              </div>
            ) : null}
          </div>
          {tag?.label ? <Tag {...tag} /> : null}
        </div>
        {caption ? (
          <p
            className={cn(
              'text-sm text-neutral-700',
              isCumulative ? 'sm:-mt-3' : '',
            )}
          >
            {caption}
          </p>
        ) : null}
      </div>
      {children}
    </div>
  )
}

export default CardContainer
