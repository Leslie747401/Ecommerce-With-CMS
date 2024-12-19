import Image from 'next/image';
import Cloth2 from '../public/Cloth2.png'
import Cloth4 from '../public/Cloth4.png'
import Cloth6 from '../public/Cloth6.png'

import { Roboto, Rubik } from "next/font/google";
import DisplayItem from './DisplayItem';
const RubikFont = Rubik({ subsets: ["latin"] });
const RobotoFont = Roboto({subsets : ["latin"], weight : "500"})


export default function RecommendedProducts() {
  return (
    <div className='flex flex-col max-mobile:items-center gap-10 px-10 max-mobile:px-5 mobile:mb-40 max-mobile:mb-20'>

        <p className={`${RobotoFont.className} font-bold mobile:text-5xl max-mobile:text-4xl`}>Similar Products</p>
    
            <div className='w-full flex flex-wrap max-mobile:flex-col justify-center gap-4'>


                <DisplayItem
                  Name={"Purl Knit Pool Shirt"}
                  productImage={Cloth2}
                  price={45.00}
                  type={"Men's Shirt"}                   
                />

                <DisplayItem
                  Name={"Faux Shearling Overshirt"}
                  productImage={Cloth4}
                  price={30.00}
                  type={"Men's Sweatshirt"}             
                />

                <DisplayItem
                  Name={"Abstract Print Shirt"}
                  productImage={Cloth6}
                  price={65.00}
                  type={"Men's Shirt"}                    
                />


            </div>

    </div>
  )
}
