'use client'

import Navbar from '@/components/Navbar'
import PromotionalBanner from '@/components/PromotionalBanner'
import Footer from '@/components/Footer';
import TermsAndConditions from '@/components/TermsAndConditions';
import { CollectionStore } from '../(State Store)/store'
import EmptyCollection from '@/components/EmptyCollection'
import FilledCollection from '@/components/FilledCollection';

export default function page() {

  const numberofItemsInCollection = CollectionStore((state) => state.Collection.length)

  return (
    <div>

        <PromotionalBanner/>
        <Navbar/>

        <div className='mobile:px-10 max-mobile:px-5 mobile:mb-40 max-mobile:mb-20'>

            {
                numberofItemsInCollection !=0 ?

                  <FilledCollection/>

                :

                  <EmptyCollection/>
            }

        </div>

        <Footer/>
        <TermsAndConditions/>

    </div>
  )
}
