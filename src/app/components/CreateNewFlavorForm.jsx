'use client'

import Link from 'next/link'
import React, { useState } from 'react'

export default function CreateNewFlavorForm() {
  const [flavorInputs, setFlavorInputs] = useState({
    name: '',
    ingredient1: 0,
    ingredient2: 0,
    ingredient3: 0,
    ingredient4: 0,
    ingredient5: 0,
  })

  const handleInputChange = async (e) => {
    const name = e.target.name
    const value = e.target.value

    setFlavorInputs((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className='mx-auto w-full max-w-2xlpx-4 sm:px-6 lg:px-8 py-4 bg-white rounded-md shadow-lg min-h-[450px] flex flex-col justify-center space-y-6 my-4'>
      <div className='text-center'>
        <h3 className='text-[#800080]'>Craft Your Signature Longganisa</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is
          simply dummy text of the printing and typesetting industry.
        </p>
      </div>
      <form className='space-y-6 text-start'>
        <div className='flex flex-col gap-2'>
          <label>Flavor Name</label>
          <input
            onChange={(e) => handleInputChange(e)}
            name='name'
            type='text'
            placeholder='Enter flavor name'
            className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500'
          />
        </div>
        <div className='grid grid-cols-2 gap-3'>
          <div className='flex flex-col gap-2'>
            <label>Sugar</label>
            <input
              onChange={(e) => handleInputChange(e)}
              name='ingredient1'
              type='number'
              placeholder='Amount in grams'
              className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Salt</label>
            <input
              onChange={(e) => handleInputChange(e)}
              name='ingredient2'
              type='number'
              placeholder='Amount in grams'
              className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Pepper</label>
            <input
              onChange={(e) => handleInputChange(e)}
              name='ingredient3'
              type='number'
              placeholder='Amount in grams'
              className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Paprika</label>
            <input
              onChange={(e) => handleInputChange(e)}
              name='ingredient4'
              type='number'
              placeholder='Amount in grams'
              className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Magic sarap</label>
            <input
              onChange={(e) => handleInputChange(e)}
              name='ingredient5'
              type='number'
              placeholder='Amount in grams'
              className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500'
            />
          </div>
        </div>
        <div className='flex justify-center gap-6'>
          <button className='custom-button w-full max-w-[10rem]'>Clear</button>
          <button type='submit' className='custom-button w-full max-w-[10rem]'>
            Create
          </button>
        </div>
      </form>
    </div>
  )
}
