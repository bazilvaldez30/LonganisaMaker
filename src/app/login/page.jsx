import React from 'react'

export default function page() {
  return (
    <div className='grow flex items-center px-6'>
      <div className='mx-auto w-full max-w-md px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-md shadow-lg min-h-[450px] flex flex-col justify-center space-y-6'>
        <h1 className='text-center text-2xl font-bold'>IMAGE LOGO</h1>
        <h2 className='text-lg font-semibold'>Sign in</h2>
        <div className='flex flex-col gap-7'>
          <input
            type='text'
            placeholder='Username'
            className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
          />
          <input
            type='password'
            placeholder='Password'
            className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
          />
        </div>
        <button>Log in</button>
      </div>
    </div>
  )
}
