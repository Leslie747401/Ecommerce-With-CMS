'use client'

import React from 'react'
import CollectionItem from './CollectionItem'
import { SlidersHorizontal } from 'lucide-react'
import Cloth1 from '../public/Cloth1.png'
import Cloth4 from '../public/Cloth4.png'
import Cloth6 from '../public/Cloth6.png'
import { CollectionStore } from '@/app/(pages)/(State Store)/store'

export default function FilledCollection() {

  const Collectionitems = CollectionStore((state) => state.Collection)

  return (
    
    <div className='flex flex-col items-center mobile:gap-[70px] max-mobile:gap-10'>
                    
        <div className='flex mobile:gap-8 max-mobile:gap-5 mobile:pt-8 max-mobile:pt-4 items-center'>
            <p className="text-5xl max-laptop:text-4xl max-mobile:text-3xl">Personal Collection</p>
            <div className='mobile:p-3.5 max-mobile:p-3 border rounded-full cursor-pointer hover:bg-[#f3f3f3] transition-all duration-300'>
                <SlidersHorizontal className='max-mobile:w-[20px] max-mobile:h-[20px]'/>
            </div>
        </div>

        <div className='w-full flex max-mobile:flex-col justify-center gap-4'>
                        
            <CollectionItem
                Name={"Striped Textured Shirt"}
                productImage={Cloth1}
                price={30}
            />
                        
            <CollectionItem
                Name={"Faux Shearling Overshirt"}
                productImage={Cloth4}
                price={30}
            />

            <CollectionItem
                Name={"Abstract Print Shirt"}
                productImage={Cloth6}
                price={30}                    
            />


            {/* {
                Collectionitems.map((item,index) => (
                    <CollectionItem 
                        key={item.id}
                        Name={item.Name}
                        productImage={item.productImage}
                        price={item.price}
                    />
                ))
            } */}
            

        </div>

    </div>

  )
}
