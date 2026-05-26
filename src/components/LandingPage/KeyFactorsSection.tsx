'use client'

import Image from 'next/image'

const repoBase = process.env.NEXT_PUBLIC_BASE_PATH || ''

const CATEGORIES = [
  'cultural',
  'political',
  'ecological',
  'financial',
  'institutional',
  'social',
]

export const KeyFactorsSection = () => {
  return (
    <section className='bg-white py-16 lg:py-24'>
      <div className='mx-auto max-w-screen-xl px-4 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center'>
        <div className='flex-1'>
          <h2 className='text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6'>
            Assess the key factors for restoration success
          </h2>
          <p className='text-gray-600 text-base leading-relaxed'>
            The Restoration Diagnostic helps you determine whether the key
            conditions for ecosystem restoration are in place—and what may be
            missing.
          </p>
          <p className='text-gray-600 text-base leading-relaxed mb-4'>
            It highlights opportunities, gaps, and challenges across 31
            cultural, financial, institutional, political, and ecological
            factors.
          </p>
          <p className='text-gray-600 text-base leading-relaxed'>
            This enables you to move from high-level planning to focused,
            effective strategies that can succeed in the long-term.
          </p>
        </div>

        <div className='flex-shrink-0 w-full lg:w-auto'>
          <div className='grid grid-cols-3 gap-4 lg:gap-6'>
            {CATEGORIES.map((category) => (
              <div
                key={category}
                className='flex flex-col items-center gap-3 p-6 rounded-lg bg-secondary-100 border border-secondary-200'
              >
                <div className='flex items-center justify-center'>
                  <Image
                    src={`${repoBase}/images/${category}.png`}
                    alt={category}
                    width={40}
                    height={40}
                    className='w-10 h-10 object-contain'
                  />
                </div>
                <span className='text-sm font-medium text-secondary-700 text-center'>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
