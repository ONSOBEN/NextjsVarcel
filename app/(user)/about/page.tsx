import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "ISTAD Ecommerce About Us",
  description: "We are providing the best service for you!",
}

export default function page() {
  return (
    <div className='h-screen grid place-content-center text-6xl'>
      About Page
      <div className='mt-8'>
        <h1 className='text-4xl font-bold'>Welcome to ISTAD Ecommerce</h1>
        <p className='mt-4 text-lg'>
          We are a dedicated team providing the best service for all your ecommerce needs.
        </p>
      </div>
    </div>
  )
}
