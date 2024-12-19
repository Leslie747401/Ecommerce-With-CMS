import Link from 'next/link'
import React from 'react'

export default function TermsAndConditions() {
  return (
    <div className='w-full py-6 bg-black mobile:px-10 max-mobile:px-5 flex max-mobile:flex-col-reverse max-mobile:gap-8 justify-between max-mobile:text-sm'>

        <p className='text-white'>&copy; 2023 Tulos Production</p>

        <div className='flex max-mobile:flex-col max-mobile:gap-3 mobile:gap-12'>
          <Link href={'/terms-and-conditions'}><p className='text-[#989898] cursor-pointer hover:text-white transition-all duration-300'>Terms and Conditions</p></Link>
          <Link href={'/privacy-policy'}><p className='text-[#989898] cursor-pointer hover:text-white transition-all duration-300'>Privacy Policy</p></Link>
          <Link href={'/cookie-policy'}><p className='text-[#989898] cursor-pointer hover:text-white transition-all duration-300'>Cookies Policy</p></Link>
        </div>

    </div>
  )
}
