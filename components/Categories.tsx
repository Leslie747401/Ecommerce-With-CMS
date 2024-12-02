import React from 'react'
import Image from "next/image"
import Cloth1 from '../public/Cloth1.jpg'
import Cloth2 from '../public/Cloth2.jpg'
import Cloth3 from '../public/Cloth3.jpg'
import Man from '../public/Man.jpg'
import Women from '../public/Women.jpg'
import Kid from '../public/Kid.webp'
import { Roboto, Rubik } from "next/font/google";
import { Button } from './ui/button'

const RubikFont = Rubik({ subsets: ["latin"] });
const RobotoFont = Roboto({subsets : ["latin"], weight : "500"})

export default function Categories() {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-8 max-mobile:px-5 mobile:px-10 max-mobile:mb-20 mobile:mb-40'>

        <div className='flex flex-col gap-5 max-mobile:gap-2 items-center'>
            <p className='text-5xl font-bold max-laptop:text-4xl max-mobile:text-3xl'>CATEGORIES</p>
            <p className='text-[#a9a9a9] text-center max-mobile:text-sm'>Explore our diverse range, featuring styles crafted for Men, Women, and Kids. <br className="hidden mobile:block"/> Find something special for everyone.</p>
        </div>

        <div className='w-full flex flex-col gap-4'>

            <div className='w-full flex max-mobile:flex-col justify-center gap-4'>

                <div className="w-full flex flex-col gap-3 relative">

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

                </div>

                <div className="w-full flex flex-col gap-3 relative">

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

                </div>

                <div className="w-full flex flex-col gap-3 relative">

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

                </div>

            </div>

        </div>

    </div>
  )
}
