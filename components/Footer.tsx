import Link from "next/link";
import { Button } from "./ui/button";

import { Roboto} from "next/font/google";
const RobotoFont = Roboto({subsets : ["latin"], weight : "500"})


export default function Footer() {
  return (
    <div className="flex max-mobile:flex-col max-mobile:gap-12 justify-between mobile:px-10 max-mobile:px-5 mb-10">
      
      <div className="flex flex-col gap-5">
        
        <div className="flex flex-col gap-5">
          <p className="text-5xl max-mobile:text-4xl font-extrabold">TULOS</p>
          <p className="text-[#a9a9a9] w-[450px] max-mobile:w-fit">Get newsletter updates for upcoming products and best discount for all items</p>
        </div>
          
        <div className="flex gap-2 items-center">
          <input type="text" className="w-[350px] border rounded-full px-8 pl-6 py-3 outline-none max-mobile:px-4 max-mobile:pl-4 max-mobile:py-3" placeholder="Your Email"/>
          <Button className="rounded-full px-10 py-6 max-mobile:px-5">Submit</Button>
        </div>

      </div>

      <div className="flex max-mobile:flex-col max-mobile:gap-10 gap-40">

        <div className="flex flex-col gap-8 max-mobile:gap-4">

          <p className={`${RobotoFont.className} text-xl font-semibold`}>Products</p>

          <div className="flex flex-col gap-1 font-[500]">
            <Link href={'/sweatshirt'}><p className="text-[#a9a9a9] hover:text-black transition-all duration-300">Sweatshirt</p></Link>
            <Link href={'/tshirt'}><p className="text-[#a9a9a9] hover:text-black transition-all duration-300">Tshirt</p></Link>
            <Link href={'/shirt'}><p className="text-[#a9a9a9] hover:text-black transition-all duration-300">Shirt</p></Link>
            <Link href={'/jacket'}><p className="text-[#a9a9a9] hover:text-black transition-all duration-300">Jacket</p></Link>
            <Link href={'/sweater'}><p className="text-[#a9a9a9] hover:text-black transition-all duration-300">Sweater</p></Link>
          </div>
      
        </div>

        <div className="flex flex-col gap-8 max-mobile:gap-4">

          <p className={`${RobotoFont.className} text-xl font-semibold`}>Categories</p>

          <div className="flex flex-col gap-1 font-[500]">
            <Link href={'/man'}><p className="text-[#a9a9a9] hover:text-black transition-all duration-300">Man</p></Link>
            <Link href={'/woman'}><p className="text-[#a9a9a9] hover:text-black transition-all duration-300">Women</p></Link>
            <Link href={'/kids'}><p className="text-[#a9a9a9] hover:text-black transition-all duration-300">Kids</p></Link>
          </div>
      
        </div>

        <div className="flex flex-col gap-8 max-mobile:gap-4">

          <p className={`${RobotoFont.className} text-xl font-semibold`}>Social Media</p>

          <div className="flex flex-col gap-1 font-[500]">
            <Link href={'https://www.facebook.com/souledstore/'} target="_blank"><p className="text-[#a9a9a9] hover:text-black transition-all duration-300">Facebook</p></Link>
            <Link href={'https://www.instagram.com/TheSouledStore/'} target="_blank"><p className="text-[#a9a9a9] hover:text-black transition-all duration-300">Instagram</p></Link>
            <Link href={'https://x.com/TheSouledStore'} target="_blank"><p className="text-[#a9a9a9] hover:text-black transition-all duration-300">Twitter</p></Link>
          </div>
      
        </div>

      </div>

    </div>
  )
}
