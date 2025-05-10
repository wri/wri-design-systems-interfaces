'use client'

import {
  Button,
  InlineMessage,
  Password,
  SSOButtons,
  TextInput,
} from '@worldresources/wri-design-systems'
import Link from 'next/link'
import { useState } from 'react'

const SignIn = () => {
  const [showError, setShowError] = useState(false)

  return (
    <div className='flex row items-center justify-between h-full pl-20'>
      <div className='w-[400px]'>
        <div>
          <p className='text-3xl font-bold mb-2'>Sign into your account</p>
          <div className='flex gap-4 mb-6'>
            <Link
              className='text-base underline text-primary-700 font-bold'
              href='/sign-up'
            >
              Don&apos;t have an account?
            </Link>
            <Link
              className='text-base underline text-primary-700 font-bold'
              href=''
            >
              Forgot password?
            </Link>
          </div>
          <TextInput label='Email address' required />
          <Password label='Password' hideValidations required />
          {showError ? (
            <div className='mt-5'>
              <InlineMessage
                variant='error'
                label='Incorrect email address or password.'
              />
            </div>
          ) : null}
          <Button
            className={showError ? 'mt-3' : 'mt-5'}
            label='Sign in'
            onClick={() => setShowError(!showError)}
          />
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

export default SignIn
