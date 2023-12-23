'use client'

import React, { useState } from 'react'
import CreateNewFlavor from './CreateNewFlavorForm'
import FlavorsButton from './FlavorsButton'
import { Button, Modal } from 'antd'

export default function EditButtonModal({ flavor }) {
  const [flavorInputs, setFlavorInputs] = useState({
    name: '',
    ingredient1: 0,
    ingredient2: 0,
    ingredient3: 0,
    ingredient4: 0,
    ingredient5: 0,
  })

  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const handleInputChange = async (e) => {
    const name = e.target.name
    const value = e.target.value

    setFlavorInputs((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <button className='border-0 text-blue-500' type='' onClick={showModal}>
        Edit
      </button>
      <Modal
        title={`Edit ${flavor.title} Flavor`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form className='space-y-6 text-start'>
          <div className='flex flex-col gap-2'>
            <label>Flavor Name</label>
            <input
              onChange={(e) => handleInputChange(e)}
              name='name'
              type='text'
              placeholder='Amount in grams'
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
            <button type='submit' className='custom-button w-full'>
              Save
            </button>
          </div>
        </form>
      </Modal>
    </>
  )
}
