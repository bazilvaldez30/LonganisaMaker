'use client'

import Cookies from 'js-cookie'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import api from '../api/api'
import { useAuthContext } from '../context/AuthContext'

export default function Navbar() {
  const { isAuthenticated, setIsAuthenticated, isAuthloading } = useAuthContext()

  const url = usePathname()
  const router = useRouter()

  const refresh = Cookies.get('refresh')

  const handleLogout = async () => {
    try {
      const response = await api.post('/auth/logout/', { refresh })
      if (response.status === 200) {
        Cookies.remove('access')
        Cookies.remove('refresh')
        Cookies.remove('user')
        setIsAuthenticated(false)
        router.push('/login')
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
          <div className='hidden md:flex justify-center w-1/3 tracking-widest'>
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
                href='/production'
                className={`${
                  url === '/production' ? 'bg-gray-900' : ''
                } text-white rounded-md px-3 py-2 text-sm font-medium`}
                aria-current='page'
              >
                Production
              </Link>
            </div>
            <div className='flex items-baseline space-x-4'>
              <Link
                href='/flavors'
                className={`${
                  url === '/flavors' ? 'bg-gray-900' : ''
                } text-white rounded-md px-3 py-2 text-sm font-medium`}
                aria-current='page'
              >
                Flavors
              </Link>
            </div>
          </div>

          <div className='hidden md:flex justify-end w-1/3'>
            {isAuthloading ? (
              <div role='status'>
                <svg
                  aria-hidden='true'
                  className='inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300'
                  viewBox='0 0 100 101'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                    fill='currentColor'
                  />
                  <path
                    d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                    fill='currentFill'
                  />
                </svg>
                <span className='sr-only'>Loading...</span>
              </div>
            ) : (
              <div className='ml-4 flex items-center md:ml-6'>
                {isAuthenticated ? (
                  <button
                    onClick={handleLogout}
                    className='border-0 rounded-full p-3 text-gray-400 hover:text-white font-semibold'
                  >
                    LOGOUT
                  </button>
                ) : (
                  <Link
                    href={'/login'}
                    className='border-0 rounded-full p-3 text-gray-400 hover:text-white font-semibold'
                  >
                    LOGIN
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
