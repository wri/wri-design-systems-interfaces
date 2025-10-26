'use client'

import { Sheet, TabBar } from '@worldresources/wri-design-systems'
import { useState } from 'react'
import LayerPanel from './LayerPanel'
import LegendPanel from './LegendPanel'
import BaseMapContent from './BaseMapSettings/BaseMapContent'
import clsx from 'clsx'

const TabsControls = () => {
  const [tabValue, setTabValue] = useState('add-data')
  const [isOpenSheet, setIsOpenSheet] = useState(true)

  const handleOnTabClick = (tabValue: string) => {
    setTabValue(tabValue)
    setIsOpenSheet(true)
  }

  let content = <LayerPanel />
  if (tabValue === 'legend') {
    content = <LegendPanel />
  } else if (tabValue === 'base-map') {
    content = <BaseMapContent maxWidth='100%' />
  }

  return (
    <div className='h-[115px] w-screen sm:max-w-[400px] relative'>
      <div className='w-full absolute bottom-10'>
        {isOpenSheet ? (
          <Sheet
            className='custom-sheet-styles'
            content={content}
            minimizedHeight={80}
            midHeight={300}
            open={isOpenSheet}
            onClose={() => setIsOpenSheet(false)}
            blocking={false}
            zIndex={1000}
          />
        ) : null}
      </div>
      <div
        className={clsx(
          'w-full absolute bottom-0 sm:rounded-b-2xl overflow-hidden z-[1001]',
          isOpenSheet ? '' : 'sm:rounded-t-2xl',
        )}
      >
        <TabBar
          defaultValue={tabValue}
          tabs={[
            {
              label: 'Add Data',
              value: 'add-data',
              onClick: () => handleOnTabClick('add-data'),
            },
            {
              label: 'Legend',
              value: 'legend',
              onClick: () => handleOnTabClick('legend'),
            },
            {
              label: 'Base Map',
              value: 'base-map',
              onClick: () => handleOnTabClick('base-map'),
            },
          ]}
        />
      </div>
    </div>
  )
}

export default TabsControls
