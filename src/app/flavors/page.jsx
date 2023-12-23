'use client'

import React, { useEffect, useState } from 'react'
import api from '../api/api'
import Link from 'next/link'
import EditButtonModal from '../components/editFlavorsModal'

export default function page() {
  const [flavors, setFlavors] = useState([])

  const handleFlavorClick = async (e) => {
    const name = e.target.name
    const response = await api.post()
    console.log(name)
  }

  useEffect(() => {
    const fetchFlavors = async () => {
      try {
        const response = await api.get('/flavors/')
        const data = response.data
        if (response.status == 200) {
          setFlavors(data)
        } else {
          console.log(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchFlavors()
  }, [])

  return (
    <div className='relative  shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 '>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Name
            </th>
            <th scope='col' className='px-6 py-3'></th>
            <th scope='col' className='px-6 py-3'></th>
            <th scope='col' className='px-6 py-3'></th>
            <th scope='col' className='px-6 py-3 flex justify-end'>
              <Link
                href='/create-new-flavor'
                className='border-0'
                onClick={() => console.log}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='23'
                  width='21'
                  viewBox='0 0 448 512'
                >
                  <path
                    fill='#000'
                    d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z'
                  />
                </svg>
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {flavors &&
            flavors.map((flavor, index) => (
              <tr className='bg-white border-b  hover:bg-gray-50' key={index}>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                >
                  {flavor.title}
                </th>
                <td className='px-6 py-4'></td>
                <td className='px-6 py-4'></td>
                <td className='px-6 py-4'></td>
                <td className='px-6 py-4 flex justify-end gap-3'>
                  <EditButtonModal flavor={flavor} />
                  <a
                    href='#'
                    className='font-medium text-red-600  hover:underline'
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
