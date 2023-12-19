import Link from 'next/link'
import React from 'react'

export default function CreateNewFlavorForm() {
  return (
    <div className='mx-auto w-full max-w-md px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-md shadow-lg min-h-[450px] flex flex-col justify-center space-y-6'>
      <div>
        <h3 className='text-[#800080]'>Craft Your Signature Longganisa</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is
          simply dummy text of the printing and typesetting industry.
        </p>
      </div>
      <form className='space-y-6'>
        <div className='flex flex-col gap-6 max-w-xs mx-auto'>
          <input
            type='text'
            placeholder='Ingredients 1'
            className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500'
          />
          <input
            type='text'
            placeholder='Ingredients 2'
            className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500'
          />
          <input
            type='text'
            placeholder='Ingredients 3'
            className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500'
          />
          <input
            type='text'
            placeholder='Ingredients 3'
            className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500'
          />
          <input
            type='text'
            placeholder='Ingredients 4'
            className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500'
          />
          <input
            type='text'
            placeholder='Amount 1'
            className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500'
          />
          <input
            type='text'
            placeholder='Amount 2'
            className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500'
          />
          <input
            type='text'
            placeholder='Amount 3'
            className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500'
          />
          <input
            type='text'
            placeholder='Amount 4'
            className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500'
          />
        </div>
        <div className='flex justify-center gap-6'>
          <button className='w-full max-w-[10rem]'>Clear</button>
          <button className='w-full max-w-[10rem]'>Submit</button>
        </div>
      </form>
    </div>
  )
}
