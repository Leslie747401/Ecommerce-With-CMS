import { Menu, Search, ShoppingBagIcon } from 'lucide-react'
import { Rubik } from "next/font/google";
import Link from 'next/link';

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

        <Link href={'/'}><p className={`${brandname.className} mobile:text-5xl max-mobile:text-4xl font-extrabold`}>TULOS</p></Link>

        <div className='flex gap-8'>
          <Search/>
          <Link href={'/Cart'}><ShoppingBagIcon/></Link>
          <Link href={'/Login'}><p className='font-[500] cursor-pointer'>Login</p></Link>
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
