'use client'

import Link from 'next/link'
import api from '../api/api'
import { useEffect, useState } from 'react'

export default function FlavorsButton() {
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
    <div className='flex flex-col space-y-4 mx-auto'>
      <h2 className='text-center'>Flavors</h2>

      <div class='flex flex-wrap -mx-4 gap-5 justify-center'>
        {flavors &&
          flavors.map((flavor, index) => (
            <button
              key={index}
              onClick={handleFlavorClick}
              name={flavor.title}
              className='custom-button !w-1/5'
            >
              {flavor.title}
            </button>
          ))}
        {flavors &&
          flavors.map((flavor, index) => (
            <button
              key={index}
              onClick={handleFlavorClick}
              name={flavor.title}
              className='custom-button !w-1/5'
            >
              {flavor.title}
            </button>
          ))}
        {flavors &&
          flavors.map((flavor, index) => (
            <button
              key={index}
              onClick={handleFlavorClick}
              name={flavor.title}
              className='custom-button !w-1/5'
            >
              {flavor.title}
            </button>
          ))}
        {flavors &&
          flavors.map((flavor, index) => (
            <button
              key={index}
              onClick={handleFlavorClick}
              name={flavor.title}
              className='custom-button !w-1/5'
            >
              {flavor.title}
            </button>
          ))}
        {flavors &&
          flavors.map((flavor, index) => (
            <button
              key={index}
              onClick={handleFlavorClick}
              name={flavor.title}
              className='custom-button !w-1/5'
            >
              {flavor.title}
            </button>
          ))}
      </div>

      {/* <Link href={'/create-new-flavor'}>
        <button className='custom-button w-6/12'>Custom Flavor</button>
      </Link> */}
    </div>
  )
}
