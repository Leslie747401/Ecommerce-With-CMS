import Navbar from '@/components/Navbar'
import PromotionalBanner from '@/components/PromotionalBanner'
import React from 'react'

export default function page() {
  return (
    <div>
      
        <PromotionalBanner/>
        <Navbar/>
      
        <div className='flex flex-col gap-8 items-center max-mobile:px-5 mobile:px-10'>

            <p className='text-5xl font-medium max-laptop:text-4xl max-mobile:text-3xl pt-8 max-mobile:text-center'>COOKIE POLICY</p>

        </div>

    </div>
  )
}