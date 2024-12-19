import { Heart } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

export default function EmptyCollection() {
  return (
        <div className='flex flex-col gap-12 justify-center items-center h-[450px]'>
    
            <Heart width={50} height={50} className='text-[#5d5d5d]'/>
    
            <div className='flex flex-col gap-8 justify-center items-center'>
    
                <p className={`text-xl font-semibold`}>No saved collections</p>
    
                <p className='mobile:w-[450px] max-mobile:w-[90%] text-center font-normal'>Create and save your favorite collections by clicking the Heart icon. Your curated collections will appear here.</p>
    
                <Button className='py-6 px-8 rounded-full'>
                    <Link href={'/'}><p>Browse Collection</p></Link>
                </Button>
            </div>
    
        </div>
    )
}
