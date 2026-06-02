'use client'

import useResponsiveFlags from '@/hooks/useResponsiveFlags'
import { sections } from '../Header'
import { useEffect, useState } from 'react'
import { cn } from '@/utils/styles'
import { Select } from '@worldresources/wri-design-systems'
import { CheckCircleIcon } from '@/components/icons/CheckCircle'

const TabsHandler = ({ section = 'overview' }: { section: string }) => {
  const [activeNavPanelItem, setActiveNavPanelItem] = useState('')
  const { isSmallTablet, isMobile } = useResponsiveFlags()

  const activeSection = sections.find((item) => item.value === section)

  useEffect(() => {
    setActiveNavPanelItem(
      sections.find((item) => item.value === section)?.navPanelItems?.[0]
        ?.label ?? '',
    )
  }, [section])

  const handleNavPanelItemClick = (item: string) => {
    setActiveNavPanelItem(item)
  }

  return (
    <div className='w-full'>
      <div className='flex w-full'>
        {activeSection?.navPanelItems ? (
          <div className='sticky top-0 hidden h-[calc(100vh-129px)] w-72 flex-col items-start border border-neutral-300 bg-white pt-2 lg:flex'>
            {activeSection?.navPanelItems.map((item) => (
              <button
                key={item.label}
                className={cn(
                  'focus-visible:outline-primary-700 hover:bg-primary-300 flex w-full cursor-pointer justify-between px-3 py-4 text-left',
                  activeNavPanelItem === item.label
                    ? 'text-accessible-controls-on-neutral-lights'
                    : 'text-neutral-800',
                )}
                onClick={() => handleNavPanelItemClick(item.label)}
              >
                {item.label}
                {activeNavPanelItem === item.label ? (
                  <CheckCircleIcon className='text-primary-700 mt-1' />
                ) : null}
              </button>
            ))}
          </div>
        ) : null}
        <div className='min-h-[calc(100vh-130px)] flex-1 bg-neutral-200 p-5'>
          {(isSmallTablet || isMobile) && activeSection?.navPanelItems ? (
            <div>
              <Select
                items={
                  activeSection?.navPanelItems.map((item) => ({
                    label: item.label,
                    value: item.label,
                  })) ?? []
                }
                value={[activeNavPanelItem]}
                onChange={(value) => handleNavPanelItemClick(value[0] ?? '')}
              />
            </div>
          ) : null}

          {activeSection?.navPanelItems?.find(
            (item) => item.label === activeNavPanelItem,
          )?.component ?? activeNavPanelItem}
        </div>
      </div>
    </div>
  )
}

export default TabsHandler
