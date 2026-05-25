'use client'

import { Button } from '@worldresources/wri-design-systems'
import { CheckIcon } from '@/components/icons'
import { Box } from '@chakra-ui/react'

const BENEFITS = [
  'A snapshot of the enabling environment for ecosystem restoration in your geography or landscape.',
  'A list of strategies to address gaps or weaknesses in key success factors',
  'A shared basis for discussion among stakeholders and decision-makers',
]

export const CTASection = () => {
  return (
    <section className='bg-white py-16 lg:py-24'>
      <div className='mx-auto max-w-screen-xl px-4 lg:px-12'>
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <h2 className='text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4'>
            Get started with the diagnostic
          </h2>
          <p className='text-gray-600 text-lg leading-relaxed mb-8'>
            Create your diagnostic to assess restoration readiness and identify
            priorities for action. By completing the diagnostic, you will gain:
          </p>
          <ul className='space-y-3 mb-10 max-w-xl mx-auto text-left'>
            {BENEFITS.map((benefit) => (
              <li key={benefit} className='flex items-center gap-3'>
                <CheckIcon className='text-success-500' />
                <span className='text-gray-700 text-base leading-relaxed'>
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
          <Button variant='primary'>Start diagnostic</Button>
        </div>

        <Box className='max-w-2xl mx-auto'>
          <div className='my-4 px-4 py-3 border border-neutral-300 rounded-lg bg-white'>
            <div className='flex items-center justify-between gap-4'>
              <div className='flex-1'>
                <h3 className='font-bold text-lg text-neutral-800'>
                  Complete offline
                </h3>
                <p className='text-neutral-800'>
                  If you need to work without an internet connection, you can
                  request a simplified spreadsheet version of the diagnostic.
                  For the full experience, we recommend using the online tool.
                </p>
              </div>
              <Button variant='secondary' label='Get resource' />
            </div>
          </div>
        </Box>
      </div>
    </section>
  )
}
