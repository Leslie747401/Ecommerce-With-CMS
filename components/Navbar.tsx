'use client';

import { Menu, Search, ShoppingBagIcon } from 'lucide-react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Rubik } from "next/font/google";
const RubikFont = Rubik({ subsets: ["latin"] });

import { CartStore } from '@/app/(pages)/(State Store)/store';

export default function Navbar() {

  const route = usePathname();
  const numberOfItemsInCart = CartStore((state) => state.Cart).length;
  
  return (
    <>
      {/* Desktop */}
      <div className='flex items-center justify-between p-8 px-10 max-mobile:hidden'>

        <Link href={'/'}><p className={`${RubikFont.className} mobile:text-5xl max-mobile:text-4xl font-extrabold`}>TULOS</p></Link>

        <div className='flex gap-10'>
          <Link href={'/'}><p className={` ${route == '/' ? 'text-black' : 'text-[#b9b9b9]'} text-xl cursor-pointer`}>Home</p></Link>
          <Link href={'/man'}><p className={`${route == '/man' ? 'text-black' : 'text-[#b9b9b9]'} text-xl cursor-pointer`}>Men</p></Link>
          <Link href={'/woman'}><p className={`${route == '/woman' ? 'text-black' : 'text-[#b9b9b9]'} text-xl  cursor-pointer`}>Women</p></Link>
          <Link href={'/kids'}><p className={`${route == '/kids' ? 'text-black' : 'text-[#b9b9b9]'} text-xl  cursor-pointer`}>Kids</p></Link>
          <Link href={'/collection'}><p className={`${route == '/collection' ? 'text-black' : 'text-[#b9b9b9]'} text-xl  cursor-pointer`}>Collection</p></Link>
        </div>

        <div className='flex gap-8 relative'>

          <Search/>
          <Link href={'/Cart'}><ShoppingBagIcon/></Link>
          <Link href={'/Login'}><p className='text-xl font-[500] cursor-pointer'>Login</p></Link>

          {
            
            numberOfItemsInCart != 0 &&

            <div className={`${RubikFont.className} absolute w-[28px] h-[28px] rounded-full bg-black bottom-4 right-[68px] text-white flex justify-center items-center border-[3px] border-white`}>{numberOfItemsInCart}</div>
          }

        </div>

      </div>

      {/* Mobile and tablet */}
      <div className='flex items-center justify-between py-6 px-5 mobile:hidden'>

        <Link href={'/'}><p className={`${RubikFont.className} text-4xl font-bold`}>TULOS</p></Link>

        <div className='flex gap-8 relative'>

          <Search/>
          <Link href={'/Cart'}><ShoppingBagIcon/></Link>
          <Menu/>

          {
            numberOfItemsInCart != 0 &&

            <div className={`${RubikFont.className} absolute w-[28px] h-[28px] rounded-full bg-black bottom-3 right-10 text-white flex justify-center items-center border-[3px] border-white`}>{numberOfItemsInCart}</div>
          }

        </div>

      </div>
    </>
  )
}
