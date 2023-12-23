'use client'

import Cookies from 'js-cookie'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import api from '../api/api'
import { useAuthContext } from '../context/AuthContext'

export default function Navbar() {
  const [userData, setUserData] = useState('')

  const { isAuthenticated, setIsAuthenticated } = useAuthContext()

  const url = usePathname()

  /* useEffect(() => {
    const user = Cookies.get('user')
    if (user) {
      setUserData(user)
    }
  }, []) */
  const refresh = Cookies.get('refresh')

  const handleLogout = async () => {
    try {
      const response = await api.post('/auth/logout/', { refresh })
      if (response.status === 200) {
        Cookies.remove('access')
        Cookies.remove('refresh')
        Cookies.remove('user')
        setIsAuthenticated(false)
        router.push('/')
      } else if (response.status === 400) {
        console.log(response.data)
      }
    } catch (error) {
      Cookies.remove('access')
      Cookies.remove('refresh')
      Cookies.remove('user')
      console.error(error)
    }
  }

  return (
    <nav className='bg-gray-800'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center w-1/3'>
            <Link href={'/'} className='flex-shrink-0'>
              <img
                className='h-8 w-8'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                alt='Your Company'
              />
            </Link>
          </div>
          <div className='hidden md:flex justify-center w-1/3'>
            <div className='flex items-baseline space-x-4'>
              <Link
                href='/'
                className={`${
                  url === '/' ? 'bg-gray-900' : ''
                } text-white rounded-md px-3 py-2 text-sm font-medium`}
                aria-current='page'
              >
                Dashboard
              </Link>
            </div>
            <div className='flex items-baseline space-x-4'>
              <Link
                href='/create-new-flavor2'
                className={`${
                  url === '/create-new-flavor2' ? 'bg-gray-900' : ''
                } text-white rounded-md px-3 py-2 text-sm font-medium`}
                aria-current='page'
              >
                Customize
              </Link>
            </div>
          </div>

          <div className='hidden md:flex justify-end w-1/3'>
            <div className='ml-4 flex items-center md:ml-6'>
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className='border-0 relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                >
                  LOGOUT
                </button>
              ) : (
                <Link href={'/login'} className='p-1 text-gray-400 hover:text-white'>
                  LOGIN
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
