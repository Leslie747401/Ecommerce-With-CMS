import Image from 'next/image';
import Cloth1 from '../public/Cloth1.jpg'
import Cloth2 from '../public/Cloth2.jpg'
import Cloth3 from '../public/Cloth3.jpg'

import { Roboto, Rubik } from "next/font/google";
const RubikFont = Rubik({ subsets: ["latin"] });
const RobotoFont = Roboto({subsets : ["latin"], weight : "500"})


export default function RecommendedProducts() {
  return (
    <div className='flex flex-col max-mobile:items-center gap-10 px-10 max-mobile:px-5 mobile:mb-40 max-mobile:mb-20'>

        <p className={`${RobotoFont.className} font-bold mobile:text-5xl max-mobile:text-4xl`}>Similar Products</p>
    
        <div className='w-full flex max-mobile:flex-col justify-center gap-4'>

            <div className="w-full flex flex-col gap-3">

                <Image
                    src={Cloth1}
                    alt="Black tshirt"
                    width={1600}
                    height={800}
                    priority
                    className="w-full h-[450px] max-mobile:h-[380px] object-cover rounded-xl"
                    sizes="(min-width: 1280px) 1600px, (min-width: 768px) 100vw, 100vw"
                    quality={100}
                />
                    
                <div className="flex justify-between">
                    <div className="flex flex-col gap-0.5">
                        <p className={`${RobotoFont.className} text-xl`}>Striped Textured Shirt</p>
                        <p className={`text-[#b8b8b8]`}>Men&#39;s Shirt</p>
                    </div>
                    <p className={`${RubikFont.className} text-xl`}>$ 40.00</p>
                </div>

            </div>

            <div className="w-full flex flex-col gap-3">

                <Image
                    src={Cloth2}
                    alt="Black tshirt"
                    width={1600}
                    height={800}
                    priority
                    className="w-full h-[450px] max-mobile:h-[380px] object-cover rounded-xl"
                    sizes="(min-width: 1280px) 1600px, (min-width: 768px) 100vw, 100vw"
                    quality={100}
                />
                    
                <div className="flex justify-between">
                    <div className="flex flex-col gap-0.5">
                        <p className={`${RobotoFont.className} text-xl`}>Purl Knit Pool Shirt</p>
                        <p className={`text-[#b8b8b8]`}>Men&#39;s Tshirt</p>
                    </div>
                    <p className={`${RubikFont.className} text-xl`}>$ 45.00</p>
                </div>

            </div>

            <div className="w-full flex flex-col gap-3">

                <Image
                    src={Cloth3}
                    alt="Black tshirt"
                    width={1600}
                    height={800}
                    priority
                    className="w-full h-[450px] max-mobile:h-[380px] object-cover rounded-xl"
                    sizes="(min-width: 1280px) 1600px, (min-width: 768px) 100vw, 100vw"
                    quality={100}
                />
                    
                <div className="flex justify-between">
                    <div className="flex flex-col gap-0.5">
                        <p className={`${RobotoFont.className} text-xl`}>Quarter-Zip Sweatshirt</p>
                        <p className={`text-[#b8b8b8]`}>Men&#39;s Sweatshirt</p>
                    </div>
                    <p className={`${RubikFont.className} text-xl`}>$ 35.00</p>
                </div>

            </div>

        </div>

    </div>
  )
}
