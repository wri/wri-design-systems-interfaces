'use client'

import { TabBar } from '@worldresources/wri-design-systems'
import { useParams, useRouter } from 'next/navigation'
import PortfolioOverviewTab from './Tabs/PortfolioOverviewTab'
import AboutTheBusiness from './Tabs/AboutTheBusiness'
import Investments from './Tabs/Investments'
import Revenues from './Tabs/Revenues'
import SocialImpact from './Tabs/SocialImpact'

export const sections = [
  {
    label: 'Overview',
    value: 'overview',
    navPanelItems: [
      {
        label: 'Summary',
        component: <PortfolioOverviewTab />,
      },
      {
        label: 'About the business',
        component: <AboutTheBusiness />,
      },
    ],
  },
  {
    label: 'Financial',
    value: 'financial',
    navPanelItems: [
      {
        label: 'Investments',
        component: <Investments />,
      },
      {
        label: 'Revenues',
        component: <Revenues />,
      },
    ],
  },
  {
    label: 'ESG Impact',
    value: 'esg-impact',
    navPanelItems: [
      {
        label: 'Social impact',
        component: <SocialImpact />,
      },
    ],
  },
]

const Header = ({
  metadata,
}: {
  metadata: {
    total: number
    active: number
    finished: number
  }
}) => {
  const router = useRouter()
  const params = useParams()

  const section = (params?.section as string) ?? 'overview'

  return (
    <>
      <div className='mb-5 flex flex-col items-start justify-between gap-4 px-4 sm:flex-row'>
        <div className='flex flex-col gap-1'>
          <h1 className='text-accessible-text-on-primary-mids text-3xl font-bold tracking-tight'>
            Portfolio Overview
          </h1>
          <p className='text-neutral-700'>
            General indicators for your portfolio.
          </p>
        </div>
        {metadata?.total && metadata?.active ? (
          <div className='flex items-center justify-center gap-4'>
            <p className='text-neutral-700'>
              <span className='text-primary-900 font-bold'>
                {metadata.total}
              </span>{' '}
              total startups
            </p>
            <p className='text-neutral-700'>
              <span className='text-primary-900 font-bold'>
                {metadata.active}
              </span>{' '}
              active partnerships
            </p>
            <p className='text-neutral-700'>
              <span className='text-primary-900 font-bold'>
                {metadata.finished}
              </span>{' '}
              closed out partnerships
            </p>
          </div>
        ) : null}
      </div>
      <hr className='border-neutral-300' />
      <div className='stickys top-[89px] z-50 w-full overflow-x-auto border-b border-neutral-300 bg-white sm:top-[92px] lg:[overflow-x:initial]'>
        <div className='min-w-md'>
          <TabBar
            tabs={sections.map((sectionItem) => ({
              label: sectionItem.label,
              value: sectionItem.value,
            }))}
            variant='transparent'
            defaultValue={section}
            onTabClick={(tabValue: string) => {
              router.push(`/charts/${tabValue}`)
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Header
