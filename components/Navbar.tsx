import { Menu, Search, ShoppingBagIcon } from 'lucide-react'
import { Rubik } from "next/font/google";

const brandname = Rubik({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <>
      {/* Desktop */}
      <div className='flex items-center justify-between p-8 px-10 max-mobile:hidden'>

        <div className='flex gap-8 font-[500]'>
          <p className='cursor-pointer'>Men</p>
          <p className='cursor-pointer'>Women</p>
          <p className='cursor-pointer'>Kids</p>
        </div>

        <p className={`${brandname.className} text-4xl font-extrabold`}>TULOS</p>

        <div className='flex gap-8'>
          <Search/>
          <ShoppingBagIcon/>
          <p className='font-[500] cursor-pointer'>Login</p>
        </div>

      </div>

      {/* Mobile and tablet */}
      <div className='flex items-center justify-between py-6 px-5 mobile:hidden'>

        <p className={`${brandname.className} text-4xl font-bold`}>TULOS</p>

        <div className='flex gap-8'>
          <Search/>
          <ShoppingBagIcon/>
          <Menu/>
        </div>

      </div>
    </>
  )
}
