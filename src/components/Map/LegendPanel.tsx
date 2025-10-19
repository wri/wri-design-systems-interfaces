'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */

import { Panel, TabBar } from '@worldresources/wri-design-systems'
import {
  LegendItemDemo,
  LegendItemDemo2,
  LegendItemDemo3,
} from '@/components/Map/LegendItem/LegendItemDemo'
import { Children, cloneElement, ReactElement, useState } from 'react'

const defaultLegendTabValue = 'legend-tab'

const LegendPanel = () => {
  const [selectedTabValue, setSelectedTabValue] = useState(
    defaultLegendTabValue,
  )
  const [legentItems, setLegentItems] = useState([
    <LegendItemDemo />,
    <LegendItemDemo2 />,
    <LegendItemDemo3 />,
  ])

  const handleOnTabClick = (tabValue: string) => {
    setSelectedTabValue(tabValue)
  }

  const reorder = (list: any[], startIndex: number, endIndex: number) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  return (
    <Panel
      content={
        <div>
          <TabBar
            tabs={[
              { label: 'Legend', value: 'legend-tab' },
              {
                label: 'Analysis',
                value: 'analysis-tab',
              },
            ]}
            onTabClick={handleOnTabClick}
          />
          {selectedTabValue === 'legend-tab' ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              {Children.map(legentItems, (child, idx) =>
                cloneElement(child as ReactElement, {
                  onUpClick: () => {
                    const items = reorder(legentItems, idx, idx - 1)
                    setLegentItems(items)
                  },
                  onDownClick: () => {
                    const items = reorder(legentItems, idx, idx + 1)
                    setLegentItems(items)
                  },
                }),
              )}
            </div>
          ) : null}
          {selectedTabValue === 'analysis-tab' ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <div>Analysis Content</div>
            </div>
          ) : null}
        </div>
      }
      variant='floating'
      width='100%'
    />
  )
}

export default LegendPanel
