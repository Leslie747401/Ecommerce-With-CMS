import Navbar from '@/components/Navbar'
import PromotionalBanner from '@/components/PromotionalBanner'
import React from 'react'
import Image from 'next/image'
import Cloth1 from '../../../../public/Cloth1.png'
import Cloth1_1 from '../../../../public/Cloth1.1.png'
import Cloth1_2 from '../../../../public/Cloth1.2.png'
import Cloth1_3 from '../../../../public/Cloth1.3.png'

import { Roboto, Rubik } from "next/font/google";
import { Button } from '@/components/ui/button'
import Footer from '@/components/Footer'
import TermsAndConditions from '@/components/TermsAndConditions'
import RecommendedProducts from '@/components/RecommendedProducts'
import { Heart } from 'lucide-react'

const RubikFont = Rubik({ subsets: ["latin"] });
const RobotoFont = Roboto({subsets : ["latin"], weight : "500"})

export default function page() {
  return (

    <div>

      <PromotionalBanner/>
      <Navbar/>

      <div className='w-full flex max-mobile:flex-col max-mobile:gap-8 justify-between px-10 max-mobile:px-5 mb-20 pt-5'>

        <div className='mobile:w-[55%] flex justify-between max-mobile:flex-col-reverse max-mobile:gap-5'>

          <div className='flex mobile:flex-col gap-5 justify-center'>

            <div className='bg-[#F2F2F2] rounded-xl'>
              <Image
                src={Cloth1}
                alt="Black tshirt"
                width={1600}
                height={800}
                priority
                className="w-[125px] h-[125px] max-mobile:w-[80px] max-mobile:h-[80px] object-contain rounded-xl"
                // sizes="(min-width: 1280px) 1600px, (min-width: 768px) 100vw, 100vw"
                quality={100}
              />
            </div>

            <div className='bg-[#F2F2F2] rounded-xl'>
              <Image
                src={Cloth1_1}
                alt="Black tshirt"
                width={1600}
                height={800}
                priority
                className="w-[125px] h-[125px] max-mobile:w-[80px] max-mobile:h-[80px] object-contain rounded-xl"
                sizes="(min-width: 1280px) 1600px, (min-width: 768px) 100vw, 100vw"
                quality={100}
              />
            </div>

            <div className='bg-[#F2F2F2] rounded-xl border-[2px] border-[#b8b8b8]'>
              <Image
                src={Cloth1_2}
                alt="Black tshirt"
                width={1600}
                height={800}
                priority
                className="w-[125px] h-[125px] max-mobile:w-[80px] max-mobile:h-[80px] object-contain rounded-xl"
                sizes="(min-width: 1280px) 1600px, (min-width: 768px) 100vw, 100vw"
                quality={100}
              />
            </div>

            <div className='bg-[#F2F2F2] rounded-xl'>
              <Image
                src={Cloth1_3}
                alt="Black tshirt"
                width={1600}
                height={800}
                priority
                className="w-[125px] h-[125px] max-mobile:w-[80px] max-mobile:h-[80px] object-contain rounded-xl"
                sizes="(min-width: 1280px) 1600px, (min-width: 768px) 100vw, 100vw"
                quality={100}
              />
            </div>

          </div>

          <div className='bg-[#F2F2F2] rounded-xl'>
            <Image
              src={Cloth1_1}
              alt="Black tshirt"
              width={1600}
              height={800}
              priority
              className="w-[600px] h-[600px] max-mobile:w-full max-mobile:h-[350px] object-contain rounded-xl"
              sizes="(min-width: 1280px) 1600px, (min-width: 768px) 100vw, 100vw"
              quality={100}
            />
          </div>
        
        </div>

        <div className='mobile:w-[40%] flex flex-col gap-8'>
          
          <div className='flex flex-col gap-4'>
            <p className={`${RobotoFont.className} font-semibold mobile:text-4xl max-mobile:text-3xl`}>Striped Textured Shirt</p>
            <p className={`text-[#5f5f5f] font-medium px-5 py-2 border rounded-full w-fit`}>Men&#39;s Shirt</p>
          </div>

          <div className='flex flex-col gap-8'>
            <p className={`${RubikFont.className} text-lg text-[#8c8c8c]`}>This striped textured shirt is a perfect blend of style and comfort, designed for those who appreciate a relaxed yet polished look. It&#39;s relaxed fit, combined with a camp collar and short sleeves, ensures maximum comfort, making it ideal for casual outings.</p>
            <p className={`${RubikFont.className} mobile:text-3xl max-mobile:text-2xl`}>USD $40.00</p>
          </div>

          <div className='flex flex-col mobile:gap-5 max-mobile:gap-3'>

            <div className='flex flex-wrap gap-7 items-center'>

              <p className='text-xl'>Color</p>
              
              <div className='flex gap-5'>
                <div className='w-[20px] h-[20px] border rounded-full bg-[#ffc38f]'></div>
                <div className='w-[20px] h-[20px] border rounded-full bg-[#424242]'></div>
                <div className='w-[20px] h-[20px] border rounded-full bg-white'></div>
              </div>
            
            </div>
            
            <div className='flex flex-wrap gap-3 items-center'>
              
              <p className='text-xl pr-2'>Sizes</p>
              
              {/* <div className='flex flex-wrap gap-3'> */}
                <p className={`font-medium px-8 max-mobile:px-6 py-3 max-mobile:py-2 border rounded-full w-fit`}>S</p>
                <p className={`font-medium px-8 max-mobile:px-6 py-3 max-mobile:py-2 border rounded-full w-fit`}>M</p>
                <p className={`font-medium px-8 max-mobile:px-6 py-3 max-mobile:py-2 border rounded-full w-fit`}>L</p>
                <p className={`font-medium px-8 max-mobile:px-6 py-3 max-mobile:py-2 border rounded-full w-fit`}>XL</p>
              {/* </div> */}
            
            </div>
          
          </div>

          <div className='flex flex-col max-mobile:gap-4 mobile:gap-5'>

            <Button className='py-6 rounded-full'>Buy now</Button>

            {/* Add to Cart, Add to Collection */}
            {/* <div className='flex justify-between'> 
              <Button variant={"outline"} className='py-6 rounded-full border border-[#838383] w-[49%]'>Add to Cart</Button>
              <Button variant={"outline"} className='py-6 rounded-full border border-[#838383] w-[49%]'>Add to Collection</Button>
            </div> */}
            
            {/* Add to Cart, Heart Icon */}
            <div className='flex justify-between'> 
              <Button variant={"outline"} className='py-6 rounded-full border border-[#838383] mobile:w-[89%] max-mobile:w-[84%]'>Add to Cart</Button>
              <div className="max-mobile:w-[13%] p-3.5 flex justify-center items-center rounded-full bg-white border border-[#b6b6b6] cursor-pointer">
                <Heart width={20} height={20}/> 
              </div>
            </div>

          </div>

        </div>

      </div>
    
      <RecommendedProducts/>
      <Footer/>
      <TermsAndConditions/>

    </div>
  )
}
