'use client'

import Navbar from '@/components/Navbar'
import PromotionalBanner from '@/components/PromotionalBanner'
import Footer from '@/components/Footer'
import TermsAndConditions from '@/components/TermsAndConditions'
import { CartStore } from '../(State Store)/store'
import EmptyCart from '@/components/EmptyCart'
import FilledCart from '@/components/FilledCart'

export default function Page() {

  const numberOfItemsInCart = CartStore((state) => state.Cart.length)

  return (

    <div>

      <PromotionalBanner/>
      <Navbar/>

      <div className='flex flex-col mobile:px-10 max-mobile:px-5 mobile:mb-40 max-mobile:mb-20'>

        {

          numberOfItemsInCart != 0 ?
          
            <FilledCart/>

          :

            <EmptyCart/>
        }

      </div>

      <Footer/>
      <TermsAndConditions/>

    </div>
  )
}
