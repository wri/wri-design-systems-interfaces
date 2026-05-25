'use client'

import Image from 'next/image'

const AUDIENCES = [
  {
    label: 'Government agencies:',
    description:
      'National and sub-national policymakers shaping restoration strategies and programs.',
  },
  {
    label: 'NGOs and development partners:',
    description:
      'Organizations providing technical assistance, capacity building, and funding for on-the-ground initiatives',
  },
  {
    label: 'Private sector and funders',
    description:
      'Companies investing in or contributing to restoration efforts.',
  },
  {
    label: 'Landscape-level partnerships:',
    description:
      'Multi-stakeholder platforms coordinating restoration across sectors.',
  },
]

export const TargetAudienceSection = () => {
  return (
    <section className='bg-white py-16 lg:py-24'>
      <div className='mx-auto max-w-screen-xl px-4 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center'>
        <div className='flex-1 w-full'>
          <div className='relative rounded-2xl overflow-hidden aspect-[4/3]'>
            <Image
              src='/images/is-this-tool-for-you.jpg'
              alt='People working in a restoration landscape'
              className='object-cover'
              sizes='(max-width: 1024px) 100vw, 50vw'
              fill
            />
          </div>
          <p className='text-neutral-500 text-xs italic mt-1 text-right'>
            Serrah Galos/WRI
          </p>
        </div>

        <div className='flex-1'>
          <h2 className='text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4'>
            Is this tool for you?
          </h2>
          <p className='text-gray-600 text-base leading-relaxed mb-3'>
            This tool is designed for people and organizations involved in
            planning, managing, or scaling ecosystem restoration. It is
            primarily used by technical teams and decisionmakers to assess
            current conditions and identify what needs to be strengthened to
            enable effective restoration implementation.
          </p>
          <p className='text-gray-600 text-base leading-relaxed mb-4'>
            It may be especially useful for:
          </p>
          <ul className='space-y-2'>
            {AUDIENCES.map((audience) => (
              <li
                key={audience.label}
                className='flex gap-2 text-gray-700 text-base leading-relaxed'
              >
                <span className='mt-0.5 text-gray-400 flex-shrink-0'>•</span>
                <span>
                  <strong className='font-semibold text-gray-900'>
                    {audience.label}
                  </strong>{' '}
                  {audience.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
