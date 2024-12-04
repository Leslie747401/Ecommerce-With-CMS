import Image, { StaticImageData } from "next/image"
import { Roboto, Rubik } from "next/font/google";
import { CircleMinus, CirclePlus, Heart, Trash } from "lucide-react";

const RubikFont = Rubik({ subsets: ["latin"] });
const RobotoFont = Roboto({subsets : ["latin"], weight : "500"})

export default function CartItem(props : {Name : string, productImage : StaticImageData, size : string, color : string, price : number}) {
    return (
    
    <div className="flex mobile:justify-between max-mobile:gap-5 border-b pb-6 pt-6">

        <Image
            src={props.productImage}
            width={200}
            height={200}
            alt="Cart Item"
            className="mobile:w-[220px] mobile:h-[220px] max-mobile:w-[32%] max-mobile:h-[120px] object-cover rounded-lg"
        />

        <div className="max-mobile:w-[60%] flex flex-col max-mobile:gap-5 justify-between">

            <div className="mobile:w-[610px] max-mobile:w-full flex flex-col gap-3">

                <div className="flex justify-between">
                    <p className={`${RobotoFont.className} mobile:text-xl max-mobile:text-lg text-wrap max-mobile:w-fit`}>{props.Name}</p>
                    <p className={`${RubikFont.className} mobile:text-xl max-mobile:text-lg`}>{`$${props.price}.00`}</p>
                </div>

                <div className="flex flex-col gap-1.5 max-mobile:gap-1">
                    <p className="text-[#adadad] font-medium max-mobile:text-sm">Size : {props.size}</p>
                    <p className="text-[#adadad] font-medium max-mobile:text-sm">Color : {props.color}</p>
                </div>

            </div>

            <div className="flex justify-between">
                
                <div className="flex gap-5">
                    <Heart/>
                    <Trash/>
                </div>

                <div className="flex gap-5">
                    <CircleMinus className="text-[#b8b8b8]"/>
                    <p>1</p>
                    <CirclePlus/>
                </div>
            
            </div>

        </div>
    
    </div>
  )
}
