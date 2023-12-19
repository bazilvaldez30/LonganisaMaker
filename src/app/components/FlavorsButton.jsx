import Link from 'next/link'
import React from 'react'

export default function FlavorsButton() {
  return (
    <div className='flex flex-col space-y-4 max-w-xs mx-auto'>
      <button>Lucban Longganisa</button>
      <Link href={'/create-new-flavor'}>
        <button className='w-full'>Custom Flavor</button>
      </Link>
    </div>
  )
}
