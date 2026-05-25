'use client'

import Image from 'next/image'
import { Button } from '@worldresources/wri-design-systems'

const ExternalLinkIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='w-4 h-4'
    aria-hidden='true'
  >
    <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
    <polyline points='15 3 21 3 21 9' />
    <line x1='10' y1='14' x2='21' y2='3' />
  </svg>
)

export const HeroSection = () => {
  return (
    <section className='bg-gradient-to-b from-white to-primary-200 overflow-hidden py-[4rem] pt-[calc(4rem+50px)] lg:py-[9rem] relative'>
      <div className='mx-auto max-w-screen-xl px-4 flex flex-col lg:flex-row  lg:items-center justify-center lg:justify-start min-h-[400px] lg:min-h-[500px]'>
        <div className='relative z-10 w-full lg:w-[50%] '>
          <h1 className='text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-gray-900 mb-6'>
            Restoration Diagnostic Tool
          </h1>
          <p className='text-gray-700 text-lg leading-relaxed mb-8'>
            A rapid assessment tool developed as part of ROAM to help you
            evaluate whether your geography is ready for ecosystem restoration
            and define strategies for long-term success.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 items-start sm:items-center'>
            <Button variant='primary'>Start diagnostic</Button>
            <a
              href=''
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 text-base font-semibold text-gray-900 hover:text-gray-600 transition-colors bg-transparent border-none cursor-pointer'
            >
              ROAM methodology
              <ExternalLinkIcon />
            </a>
          </div>
        </div>
      </div>

      <div className='hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 w-[60%] xl:w-[50%] translate-x-[30%]'>
        <Image
          src='/images/computer-mockup-full.png'
          alt='Restoration Diagnostic tool interface'
          width={1290}
          height={840}
          className='w-full h-auto'
        />
      </div>
    </section>
  )
}
