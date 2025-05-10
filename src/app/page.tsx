'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className='App'>
      <div className='app-container'>
        <h1 style={{ marginBottom: '20px' }}>
          Welcome to WRI Design Systems Patterns
        </h1>
        <div className='flex gap-3'>
          <Link href='/sign-in' className='underline cursor-pointer'>
            Sign In
          </Link>
          <Link href='/sign-up' className='underline cursor-pointer'>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}
