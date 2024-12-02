import React from 'react'

export default function TermsAndConditions() {
  return (
    <div className='w-full py-6 bg-black mobile:px-10 max-mobile:px-5 flex max-mobile:flex-col-reverse max-mobile:gap-8 justify-between max-mobile:text-sm'>

        <p className='text-white'>&copy; 2023 Tulos Production</p>

        <div className='flex max-mobile:flex-col max-mobile:gap-3 mobile:gap-12'>
            <p className='text-[#989898]'>Terms and Conditions</p>
            <p className='text-[#989898]'>Privacy Policy</p>
            <p className='text-[#989898]'>Cookies Policy</p>
        </div>

    </div>
  )
}
