'use client'

import Link from 'next/link'
import api from '../api/api'
import { useEffect } from 'react'

export default function FlavorsButton() {
  
  useEffect(() => {
    const fetchFlavors = async () => {
      try {
        const response = await api.get('/flavors/')
        const data = response.data
        if (response.status == 200) {
          console.log(data)
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
    <div className='flex flex-col space-y-4 max-w-xs mx-auto'>
      <button>Lucban Longganisa</button>
      <Link href={'/create-new-flavor'}>
        <button className='w-full'>Custom Flavor</button>
      </Link>
    </div>
  )
}
