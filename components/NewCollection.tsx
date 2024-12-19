import Image from "next/image"
import Cloth1 from '../public/Cloth1.png'
import Cloth2 from '../public/Cloth2.png'
import Cloth3 from '../public/Cloth3.png'
import Cloth4 from '../public/Cloth4.png'
import Cloth5 from '../public/Cloth5.png'
import Cloth6 from '../public/Cloth6.png'
import { Roboto, Rubik } from "next/font/google";
import DisplayItem from "./DisplayItem"

const RubikFont = Rubik({ subsets: ["latin"] });
const RobotoFont = Roboto({subsets : ["latin"], weight : "500"})

export default function NewCollection() {
  return (
    <div className='w-full flex flex-col justify-center items-center max-mobile:gap-8 mobile:gap-14 max-mobile:px-5 mobile:px-10 max-mobile:mb-20 mobile:mb-40'>

        <div className='flex flex-col gap-5 max-mobile:gap-2 items-center'>
            <p className='text-5xl font-bold max-laptop:text-4xl max-mobile:text-3xl'>NEW COLLECTION</p>
            <p className='text-[#a9a9a9] text-center max-mobile:text-sm'>Our latest collection, where classic and contemporary style converge in <br className="hidden mobile:block"/>perfect harmony.</p>
        </div>

        <div className='w-full flex flex-wrap max-mobile:flex-col justify-between gap-4'>

            <DisplayItem
                Name={"Striped Textured Shirt"}
                productImage={Cloth1}
                price={30.00}
                type={"Men's Shirt"}                 
            />

            <DisplayItem
                Name={"Purl Knit Pool Shirt"}
                productImage={Cloth2}
                price={45.00}
                type={"Men's Shirt"}                    
            />

            <DisplayItem
                Name={"Quarter-Zip Sweatshirt"}
                productImage={Cloth3}
                price={35.00}
                type={"Men's Sweatshirt"}                    
            />

            <DisplayItem
                    Name={"Faux Shearling Overshirt"}
                    productImage={Cloth4}
                    price={30.00}
                    type={"Men's Sweatshirt"}                    
            />

            <DisplayItem
                Name={"Textured Cable Knit Sweater"}
                productImage={Cloth5}
                price={60.00}
                type={"Men's Sweater"}       
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
