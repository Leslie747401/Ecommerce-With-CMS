import Image from "next/image"
import Cloth1 from '../public/Cloth1.png'
import Cloth2 from '../public/Cloth2.png'
import Cloth3 from '../public/Cloth3.png'
import Cloth4 from '../public/Cloth4.png'
import Cloth5 from '../public/Cloth5.png'
import Cloth6 from '../public/Cloth6.png'
import { Roboto, Rubik } from "next/font/google";

const RubikFont = Rubik({ subsets: ["latin"] });
const RobotoFont = Roboto({subsets : ["latin"], weight : "500"})

export default function NewCollection() {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-8 max-mobile:px-5 mobile:px-10 max-mobile:mb-20 mobile:mb-40'>

        <div className='flex flex-col gap-5 max-mobile:gap-2 items-center'>
            <p className='text-5xl font-bold max-laptop:text-4xl max-mobile:text-3xl'>NEW COLLECTION</p>
            <p className='text-[#a9a9a9] text-center max-mobile:text-sm'>Our latest collection, where classic and contemporary style converge in <br className="hidden mobile:block"/>perfect harmony.</p>
        </div>

        <div className='w-full flex flex-col gap-4'>

            <div className='w-full flex max-mobile:flex-col justify-center gap-4'>

                <div className="w-full flex flex-col gap-3">

                    <Image
                        src={Cloth1}
                        alt="Black tshirt"
                        width={1600}
                        height={800}
                        priority
                        className="w-full h-[450px] max-mobile:h-[380px] object-cover rounded-xl bg-[#F2F2F2]"
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
                        className="w-full h-[450px] max-mobile:h-[380px] object-cover rounded-xl bg-[#F2F2F2]"
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
                        className="w-full h-[450px] max-mobile:h-[380px] object-cover rounded-xl bg-[#F2F2F2]"
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

            <div className='w-full flex max-mobile:flex-col justify-center gap-4'>

                <div className="w-full flex flex-col gap-3">

                    <Image
                        src={Cloth4}
                        alt="Black tshirt"
                        width={1600}
                        height={800}
                        priority
                        className="w-full h-[450px] max-mobile:h-[380px] object-cover rounded-xl bg-[#F2F2F2]"
                        sizes="(min-width: 1280px) 1600px, (min-width: 768px) 100vw, 100vw"
                        quality={100}
                    />
                    
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-0.5">
                            <p className={`${RobotoFont.className} text-xl`}>Faux Shearling Overshirt</p>
                            <p className={`text-[#b8b8b8]`}>Men&#39;s Shirt</p>
                        </div>
                        <p className={`${RubikFont.className} text-xl`}>$ 30.00</p>
                    </div>

                </div>

                <div className="w-full flex flex-col gap-3">

                    <Image
                        src={Cloth5}
                        alt="Black tshirt"
                        width={1600}
                        height={800}
                        priority
                        className="w-full h-[450px] max-mobile:h-[380px] object-cover rounded-xl bg-[#F2F2F2]"
                        sizes="(min-width: 1280px) 1600px, (min-width: 768px) 100vw, 100vw"
                        quality={100}
                    />
                    
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-0.5">
                            <p className={`${RobotoFont.className} text-xl`}>Textured Cable Knit Sweater</p>
                            <p className={`text-[#b8b8b8]`}>Men&#39;s Sweater</p>
                        </div>
                        <p className={`${RubikFont.className} text-xl`}>$ 60.00</p>
                    </div>

                </div>

                <div className="w-full flex flex-col gap-3">

                    <Image
                        src={Cloth6}
                        alt="Black tshirt"
                        width={1600}
                        height={800}
                        priority
                        className="w-full h-[450px] max-mobile:h-[380px] object-cover rounded-xl bg-[#F2F2F2]"
                        sizes="(min-width: 1280px) 1600px, (min-width: 768px) 100vw, 100vw" 
                        quality={100}
                    />
                    
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-0.5">
                            <p className={`${RobotoFont.className} text-xl`}>Abstract Print Shirt</p>
                            <p className={`text-[#b8b8b8]`}>Men&#39;s Shirt</p>
                        </div>
                        <p className={`${RubikFont.className} text-xl`}>$ 65.00</p>
                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}
