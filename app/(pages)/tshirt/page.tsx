import Navbar from '@/components/Navbar'
import PromotionalBanner from '@/components/PromotionalBanner'
import { Roboto, Rubik } from "next/font/google";
import Cloth1 from '../../../public/Women1.png'
import Cloth2 from '../../../public/Women2.png'
import Cloth3 from '../../../public/Women3.png'
import Cloth4 from '../../../public/Women4.png'
import Cloth5 from '../../../public/Women5.png'
import Cloth6 from '../../../public/Women6.png'
import Footer from '@/components/Footer';
import TermsAndConditions from '@/components/TermsAndConditions';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import DisplayItem from '@/components/DisplayItem';
import { Button } from '@/components/ui/button';

const RubikFont = Rubik({ subsets: ["latin"] });
const RobotoFont = Roboto({subsets : ["latin"], weight : "500"})

export default function page() {
  return (
    <div>

      <PromotionalBanner/>
      <Navbar/>

      <div className='w-full flex flex-col gap-14'>

        <div className='flex flex-col gap-8 items-center max-mobile:px-5 mobile:px-10'>

          <p className='text-5xl font-medium max-laptop:text-4xl max-mobile:text-3xl pt-8 max-mobile:text-center'>TSHIRT COLLECTION</p>
        
            <ScrollArea className='w-full'>

                <div className='w-full flex justify-center gap-5 mb-4'>
                    <Button variant={'outline'} className='px-6 py-6 rounded-full border border-[#dedede]'>Men</Button>
                    <Button variant={'outline'} className='px-6 py-6 rounded-full border border-[#dedede]'>Women</Button>
                    <Button variant={'outline'} className='px-6 py-6 rounded-full border border-[#dedede]'>Kids</Button>
                </div>

                <ScrollBar orientation='horizontal'/>

            </ScrollArea>
          
        </div>

        <div className='w-full flex flex-col gap-4 max-mobile:px-5 mobile:px-10 max-mobile:mb-20 mobile:mb-40'>

            <div className='w-full flex flex-wrap max-mobile:flex-col justify-center gap-4'>

                <DisplayItem
                  Name={"Short Boucle Jacket"}
                  productImage={Cloth1}
                  price={30.00}
                  type={"Women's Jacket"}                      
                />

                <DisplayItem
                  Name={"Varsity Tshirt"}
                  productImage={Cloth2}
                  price={45.00}
                  type={"Women's Tshirt"}                     
                />

                <DisplayItem
                  Name={"Zip-Up Gilet Tshirt"}
                  productImage={Cloth3}
                  price={35.00}
                  type={"Women's Tshirt"}                  
                />

                <DisplayItem
                  Name={"Leather Bomber Jacket"}
                  productImage={Cloth4}
                  price={30.00}
                  type={"Women's Jacket"}                  
                />

                <DisplayItem
                  Name={"Textured Cable Knit Sweater"}
                  productImage={Cloth5}
                  price={60.00}
                  type={"Women's Sweater"}            
                />

                <DisplayItem
                  Name={"Abstract Print Shirt"}
                  productImage={Cloth6}
                  price={65.00}
                  type={"Women's Shirt"}          
                />

            </div>

        </div>
      
      </div>

      <Footer/>
      <TermsAndConditions/>

    </div>
  )
}
