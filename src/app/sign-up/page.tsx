'use client'

import {
  Button,
  Password,
  SSOButtons,
  TextInput,
} from '@worldresources/wri-design-systems'
import Link from 'next/link'

const SignUp = () => {
  return (
    <div className='min-h-[calc(100vh-56px-48px)] lg:min-h-[calc(100vh-56px-96px)] 1121:min-h-[calc(100vh-56px-48px)] max-w-[1440px] flex flex-col 1121:items-center 1121:justify-center overflow-y-auto mx-auto'>
      <div className='w-full flex flex-col-reverse 1121:flex-row items-center justify-between gap-8 lg:gap-16 1121:gap-6 mb-52 sm:mb-48 1121:mb-0 mt-12 lg:mt-24 1121:mt-0 1121:py-20 1121:pl-5 1200:pl-10'>
        <div className='max-w-[440px] w-full px-3 sm:px-5'>
          <div>
            <p className='text-3xl font-bold mb-2'>Create an account</p>
            <div className='flex gap-4 mb-6'>
              <Link
                className='text-base underline text-primary-700 font-bold'
                href='/sign-in'
              >
                Already have an account?
              </Link>
            </div>
            <TextInput label='Email address' required />
            <Password label='Password' required />
            <p className='text-sm text-neutral-700 mt-5'>
              By creating an account, I agree to the{' '}
              <Link href='' className='underline'>
                World Resources Institute User Agreement
              </Link>
              , which incorporates by reference the{' '}
              <Link href='' className='underline'>
                AI Product-Specific Terms
              </Link>
              , and acknowledge the{' '}
              <Link href='' className='underline'>
                Privacy Policy
              </Link>
              .
            </p>
            <Button className='mt-5' label='Create account' />
          </div>
          <div className='flex items-center justify-between gap-2 mt-8 mb-4'>
            <div className='h-[1px] flex-1 bg-neutral-400' />
            <p className='text-sm text-neutral-700'>Or continue with</p>
            <div className='h-[1px] flex-1 bg-neutral-400' />
          </div>
          <div className='w-full flex items-center justify-between gap-1'>
            <SSOButtons.Google />
            <SSOButtons.Facebook />
            <SSOButtons.Microsoft />
          </div>
        </div>
        <div className='h-52 sm:h-[343px] 1121:h-[498px] w-full sm:w-[700px] bg-neutral-300' />
      </div>
    </div>
  )
}

export default SignUp
