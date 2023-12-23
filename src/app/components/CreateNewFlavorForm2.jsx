import Link from 'next/link'
import React from 'react'

export default function CreateNewFlavorForm2() {
  return (
    <div className='mx-auto w-full max-w-2xlpx-4 sm:px-6 lg:px-8 py-4 bg-white rounded-md shadow-lg min-h-[450px] flex flex-col justify-center space-y-6 my-4'>
      <div className='text-center'>
        <h3 className='text-[#800080]'>Craft Your Signature Longganisa</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is
          simply dummy text of the printing and typesetting industry.
        </p>
      </div>
      <form className='space-y-6'>
        <div className='grid grid-cols-2 gap-6'>
          <div className='flex flex-col gap-2'>
            <label>Sugar</label>
            <input
              type='text'
              placeholder='Amount in grams'
              className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Salt</label>
            <input
              type='text'
              placeholder='Amount in grams'
              className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Pepper</label>
            <input
              type='text'
              placeholder='Amount in grams'
              className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Paprika</label>
            <input
              type='text'
              placeholder='Amount in grams'
              className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Magic sarap</label>
            <input
              type='text'
              placeholder='Amount in grams'
              className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500'
            />
          </div>
        </div>
        <div className='flex justify-center gap-6'>
          <button className='w-full max-w-[10rem]'>Clear</button>
          <button className='w-full max-w-[10rem]'>Submit</button>
        </div>
      </form>
    </div>
  )
}
