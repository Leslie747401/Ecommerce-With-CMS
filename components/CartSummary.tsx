import { CircleHelp } from 'lucide-react'
import { Button } from './ui/button';

import { Roboto, Rubik } from "next/font/google";
const RubikFont = Rubik({ subsets: ["latin"] });
const RobotoFont = Roboto({subsets : ["latin"], weight : "500"})

export default function CartSummary() {
  return (
    <div className='flex flex-col gap-8'>
        
        <div className='flex flex-col gap-5 pb-8 border-b'>

            <div className='flex justify-between items-center'>

                <div className='flex gap-2 items-center'>
                    <p className={`${RobotoFont.className} font-semibold mobile:text-lg max-mobile:text-base`}>Subtotal</p>
                    <CircleHelp width={18} height={18} className='text-[#9c9c9c]'/>
                </div>
                
                <p className={`${RubikFont.className} mobile:text-lg max-mobile:text-base`}>$90.00</p>
            
            </div>

            <div className='flex justify-between items-center'>
                
                <p className={`${RobotoFont.className} font-semibold mobile:text-lg max-mobile:text-base`}>Estimated Delivery & Handling</p>
                <p className={`${RubikFont.className} mobile:text-lg max-mobile:text-base`}>Free</p>

            </div>

            <div className='flex justify-between items-center'>
                
                <div className='flex gap-2 items-center'>
                    <p className={`${RobotoFont.className} mobile:text-lg max-mobile:text-base font-semibold`}>Taxes</p>
                    <CircleHelp width={18} height={18} className='text-[#9c9c9c]'/>
                </div>
                
                <p className={`${RubikFont.className} mobile:text-lg max-mobile:text-base`}>$20.00</p>
            
            </div>

        </div>

        <div className='flex justify-between items-center'>
                
            <p className={`${RobotoFont.className} font-semibold text-2xl`}>Total</p>
            <p className={`${RubikFont.className} text-2xl`}>$110.00</p>

        </div>

        <Button className='py-6 rounded-full max-mobile:mb-16'>Checkout Now</Button>

    </div>
  )
}
