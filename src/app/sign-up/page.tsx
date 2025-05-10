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
    <div className='flex row items-center justify-between h-full pl-20'>
      <div className='w-[400px]'>
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
        <div className='w-[400px] flex items-center justify-between'>
          <SSOButtons.Google />
          <SSOButtons.Facebook />
          <SSOButtons.Microsoft />
        </div>
      </div>
      <div className='h-[498px] w-[700px] bg-neutral-300' />
    </div>
  )
}

export default SignUp
