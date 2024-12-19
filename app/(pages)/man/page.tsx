import Navbar from '@/components/Navbar'
import PromotionalBanner from '@/components/PromotionalBanner'
import Cloth1 from '../../../public/Cloth1.png'
import Cloth2 from '../../../public/Cloth2.png'
import Cloth3 from '../../../public/Cloth3.png'
import Cloth4 from '../../../public/Cloth4.png'
import Cloth5 from '../../../public/Cloth5.png'
import Cloth6 from '../../../public/Cloth6.png'
import Footer from '@/components/Footer';
import TermsAndConditions from '@/components/TermsAndConditions';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import DisplayItem from '@/components/DisplayItem';
import { Button } from '@/components/ui/button';

export default function page() {
  return (
    <div>

      <PromotionalBanner/>
      <Navbar/>

      <div className='w-full flex flex-col gap-14'>

        <div className='flex flex-col gap-8 items-center max-mobile:px-5 mobile:px-10'>

          <p className='text-5xl font-medium max-laptop:text-4xl max-mobile:text-3xl pt-8 max-mobile:text-center'>MEN&#39;S CLOTHING COLLECTION</p>
        
            <ScrollArea className='w-full'>

                <div className='w-full flex justify-center gap-5 mb-4'>
                  <Button variant={'outline'} className='px-6 py-6 rounded-full border border-[#dedede]'>Sweatshirt</Button>
                  <Button variant={'outline'} className='px-6 py-6 rounded-full border border-[#dedede]'>Sweater</Button>
                  <Button variant={'outline'} className='px-6 py-6 rounded-full border border-[#dedede]'>Jacket</Button>
                  <Button variant={'outline'} className='px-6 py-6 rounded-full border border-[#dedede]'>Tshirt</Button>
                  <Button variant={'outline'} className='px-6 py-6 rounded-full border border-[#dedede]'>Shirt</Button>
                </div>

                <ScrollBar orientation='horizontal'/>

            </ScrollArea>
          
        </div>

        <div className='w-full flex flex-col gap-4 max-mobile:px-5 mobile:px-10 max-mobile:mb-20 mobile:mb-40'>

            <div className='w-full flex flex-wrap max-mobile:flex-col justify-center gap-4'>

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
      
      </div>

      <Footer/>
      <TermsAndConditions/>

    </div>
  )
}
