import React from 'react'
import Image from "next/image"
import Man from '../public/Man.jpg'
import Women from '../public/Women.jpg'
import Kid from '../public/Kid.webp'
import { Button } from './ui/button'
import Link from 'next/link'

export default function Categories() {
  return (
    <div className='w-full flex flex-col justify-center items-center max-mobile:gap-8 mobile:gap-14 max-mobile:px-5 mobile:px-10 max-mobile:mb-20 mobile:mb-40'>

        <div className='flex flex-col gap-5 max-mobile:gap-2 items-center'>
            <p className='text-5xl font-bold max-laptop:text-4xl max-mobile:text-3xl'>CATEGORIES</p>
            {/* For laptop */}
            <p className='hidden text-[#a9a9a9] text-center max-mobile:text-sm mobile:block'>Explore our diverse range, featuring styles crafted for Men, Women, and Kids. <br className="hidden mobile:block"/> Find something special for everyone.</p>
            {/* For Mobile */}
            <p className='hidden text-[#a9a9a9] text-center max-mobile:text-sm max-mobile:block'>Explore styles for Men, Women, and Kids.<br className="hidden mobile:block"/> Find something special for everyone.</p>
        </div>

        <div className='w-full flex flex-col gap-4'>

            <div className='w-full flex max-mobile:flex-col justify-center gap-4'>
                    
                    <Link href={'/man'} className="w-full flex flex-col gap-3 relative">

                        <Image
                            src={Man}
                            alt="Black tshirt"
                            width={1600}
                            height={800}
                            priority
                            className="w-full h-[450px] max-mobile:h-[380px] object-cover rounded-xl"
                            sizes="(min-width: 1280px) 1600px, (min-width: 768px) 100vw, 100vw"
                            quality={100}
                        />

                        <div className='absolute bottom-0 flex flex-col gap-5 max-mobile:p-6 mobile:p-8 items-start'>
                            <p className='text-5xl text-white font-bold'>MAN</p>
                            <Button className='rounded-full bg-white text-black py-6 px-12 hover:bg-white'>See Details</Button>
                        </div>

                    </Link>

                    <Link href={'/woman'} className="w-full flex flex-col gap-3 relative">

                        <Image
                            src={Women}
                            alt="Black tshirt"
                            width={1600}
                            height={800}
                            priority
                            className="w-full h-[450px] max-mobile:h-[380px] object-cover rounded-xl"
                            sizes="(min-width: 1280px) 1600px, (min-width: 768px) 100vw, 100vw"
                            quality={100}
                        />

                        <div className='absolute bottom-0 flex flex-col gap-5 max-mobile:p-6 mobile:p-8 items-start'>
                            <p className='text-5xl text-white font-bold'>WOMAN</p>
                            <Button className='rounded-full bg-white text-black py-6 px-12 hover:bg-white'>See Details</Button>
                        </div>

                    </Link>

                    <Link href={'/kids'} className="w-full flex flex-col gap-3 relative">

                        <Image
                            src={Kid}
                            alt="Black tshirt"
                            width={1600}
                            height={800}
                            priority
                            className="w-full h-[450px] max-mobile:h-[380px] object-cover rounded-xl"
                            sizes="(min-width: 1280px) 1600px, (min-width: 768px) 100vw, 100vw"
                            quality={100}
                        />

                        <div className='absolute bottom-0 flex flex-col gap-5 max-mobile:p-6 mobile:p-8 items-start'>
                            <p className='text-5xl text-white font-bold'>KIDS</p>
                            <Button className='rounded-full bg-white text-black py-6 px-12 hover:bg-white'>See Details</Button>
                        </div>

                    </Link>

            </div>

        </div>

    </div>
  )
}
