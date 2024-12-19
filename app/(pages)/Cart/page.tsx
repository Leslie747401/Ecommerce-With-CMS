import CartItem from '@/components/CartItem'
import CartSummary from '@/components/CartSummary'
import Navbar from '@/components/Navbar'
import PromotionalBanner from '@/components/PromotionalBanner'
import Cloth4 from '../../../public/Cloth4.png'
import Cloth6 from '../../../public/Cloth6.png'
import Cloth3 from '../../../public/Cloth3.png'
import { ScrollArea } from "@/components/ui/scroll-area"
import Footer from '@/components/Footer'
import TermsAndConditions from '@/components/TermsAndConditions'

export default function Page() {
  return (

    <div>

      <PromotionalBanner/>
      <Navbar/>

      <div className='flex flex-col mobile:px-10 max-mobile:px-5 mobile:mb-40 max-mobile:mb-20'>

        <div className='flex max-mobile:flex-col-reverse justify-between'>
            
          <div className='mobile:w-[60%] max-mobile:w-full flex flex-col gap-4'>

            <p className='font-semibold mobile:text-4xl max-mobile:text-3xl'>Your Cart</p>

            {/* laptop */}
            <div className='hidden mobile:block'>

              <ScrollArea className='h-[520px]'>

                <div className='flex flex-col'>

                  <CartItem
                    Name={"Faux Shearling Overshirt"}
                    productImage={Cloth4}
                    size={"XL"}
                    color={"Green"}
                    price={30}
                  />

                  <CartItem
                    Name={"Abstract Print Shirt"}
                    productImage={Cloth6}
                    size={"L"}
                    color={"white"}
                    price={65}
                  />

                  <CartItem
                    Name={"Quarter-Zip Sweatshirt"}
                    productImage={Cloth3}
                    size={"M"}
                    color={"Black"}
                    price={35}
                  />

                </div>

              </ScrollArea>

            </div>

            {/* Mobile */}
            <div className='block mobile:hidden'>

                <div className='flex flex-col'>

                  <CartItem
                    Name={"Faux Shearling Overshirt"}
                    productImage={Cloth4}
                    size={"XL"}
                    color={"Green"}
                    price={30}
                  />

                  <CartItem
                    Name={"Abstract Print Shirt"}
                    productImage={Cloth6}
                    size={"L"}
                    color={"white"}
                    price={65}
                  />

                  <CartItem
                    Name={"Quarter-Zip Sweatshirt"}
                    productImage={Cloth3}
                    size={"M"}
                    color={"Black"}
                    price={35}
                  />

                </div>

            </div>
          
          </div>

          <div className='mobile:w-[36%] max-mobile:w-full h-fit flex flex-col mobile:gap-10 max-mobile:gap-8'>

            <p className='mobile:text-4xl max-mobile:text-3xl font-semibold max-mobile:mt-5'>Summary</p>
            <CartSummary/>
          
          </div>

        </div>

      </div>

      <Footer/>
      <TermsAndConditions/>

    </div>
  )
}
