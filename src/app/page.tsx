'use client'

import { ROUTES } from '@/constants'
import { Panel } from '@worldresources/wri-design-systems'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='App'>
      <div className='app-container flex mt-12 lg:mt-24 1121:mt-12'>
        <div className='w-80 h-[calc(100vh-56px-48px)] lg:h-[calc(100vh-56px-96px)] 1121:h-[calc(100vh-56px-48px)] fixed left-0'>
          <Panel
            header={
              <h1 className='text-2xl font-bold text-left py-2 px-5'>
                WRI Design Systems Interfaces
              </h1>
            }
            content={
              <div className='flex flex-col gap-2 p-5'>
                <h2 className='text-lg font-bold'>Auth</h2>
                <Link
                  href={ROUTES.AUTH.SIGN_IN}
                  className='underline cursor-pointer'
                >
                  Sign In
                </Link>
                <Link
                  href={ROUTES.AUTH.SIGN_UP}
                  className='underline cursor-pointer'
                >
                  Sign Up
                </Link>

                <hr className='my-2' />

                <h2 className='text-lg font-bold'>Multi Page Forms</h2>
                <Link
                  href={ROUTES.MULTI_PAGE_FORMS.SINGLE_QUESTION}
                  className='underline cursor-pointer'
                >
                  Single Question
                </Link>
                <Link
                  href={ROUTES.MULTI_PAGE_FORMS.SINGLE_SECTION}
                  className='underline cursor-pointer'
                >
                  Single Section
                </Link>

                <hr className='my-2' />
              </div>
            }
          />
        </div>
        <div className='w-[calc(100%-320px)] p-5 flex flex-col gap-2 absolute left-80' />
      </div>
    </div>
  )
}
