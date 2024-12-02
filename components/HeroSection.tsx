import React from 'react'
import Image from 'next/image'
import HeroSectionImage from '../public/newHero.webp'
import { Button } from './ui/button'

export default function HeroSection() {
  return (
    <div className='mobile:px-10 max-mobile:px-5 max-mobile:mb-15 max-laptop:mb-20 laptop:mb-40'>
        
        <div className="relative w-full overflow-hidden rounded-lg">
            
            <Image
                src={HeroSectionImage}
                alt="Fashion editorial showing models in cream blazers standing in a wheat field"
                width={1600}
                height={800}
                priority
                className="w-full max-mobile:h-[340px] rounded-xl object-cover"
                sizes="(min-width: 1280px) 1600px, (min-width: 768px) 100vw, 100vw"
                quality={85}
            />

            <div className='absolute w-full bottom-0 left-0 flex max-mobile:flex-col max-laptop:gap-3 flex-wrap justify-between p-10 max-mobile:p-4 max-laptop:p-6 laptop:items-end'>

                <p className='text-white text-5xl max-mobile:text-3xl max-laptop:text-3xl flex-wrap'>TULOS SPRING COLLECTION</p>
                <Button className='w-fit text-black bg-white px-14 py-6 max-laptop:px-10 max-laptop:py-5 max-mobile:px-6 max-mobile:py-3 rounded-full font-[500] hover:bg-white'>Buy Now</Button>
            
            </div>
    
        </div>

    </div>
  )
}


// "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Met-Gala-2025-Featured-Image--1600x800-4uSAMFEZEXj48W8elFpeJoVyDgseHb.png"