import { ShoppingBagIcon } from 'lucide-react'
import { Button } from './ui/button';
import Link from 'next/link';


export default function EmptyCart() {
  return (
    <div className='flex flex-col gap-12 justify-center items-center h-[450px]'>

        <ShoppingBagIcon width={50} height={50} className='text-[#5d5d5d]'/>

        <div className='flex flex-col gap-8 justify-center items-center'>

            <p className={`text-xl font-semibold`}>Your Cart is Empty</p>

            <p className='mobile:w-[450px] max-mobile:w-[90%] text-center font-normal'>Looks like you haven&#39;t added anything to your cart yet. Start shopping and discover amazing items.</p>

            <Button className='py-6 px-8 rounded-full'>
                <Link href={'/'}><p>Continue Shopping</p></Link>
            </Button>
        </div>

    </div>
  )
}
