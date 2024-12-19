import Image, { StaticImageData } from "next/image"
import Cloth1 from '../public/Cloth1.jpg'
import { Roboto, Rubik } from "next/font/google";
import { Trash } from "lucide-react";
const RubikFont = Rubik({ subsets: ["latin"] });
const RobotoFont = Roboto({subsets : ["latin"], weight : "500"})

export default function CollectionItem(props : {Name : string, productImage : StaticImageData, price : number}) {
  return (
    <div className="w-full flex flex-col gap-3 relative">

        <Image
            src={props.productImage}
            alt="Black tshirt"
            width={1600}
            height={800}
            priority
            className="w-full h-[500px] max-mobile:h-[380px] object-cover rounded-xl bg-[#F2F2F2]"
            sizes="(min-width: 1280px) 1600px, (min-width: 768px) 100vw, 100vw"
            quality={100}
        />
    
        <div className="flex justify-between">
            <div className="flex flex-col gap-0.5">
                <p className={`${RobotoFont.className} text-xl`}>{props.Name}</p>
                <p className={`text-[#b8b8b8]`}>Men&#39;s Shirt</p>
            </div>
            <p className={`${RubikFont.className} text-xl`}>$ {props.price}.00</p>
        </div>

        <div className="absolute top-6 right-6">
            <div className="p-2.5 rounded-full bg-white border cursor-pointer">
                <Trash/>
            </div>
        </div>

    </div>
  )
}
