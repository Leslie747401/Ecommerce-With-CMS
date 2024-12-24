import { Rubik } from "next/font/google";
import Image from "next/image";
import LoginImage from '../../../public/Login.jpg'
import { Button } from "@/components/ui/button";
import Google from '../../../public/Google.svg'
import Link from "next/link";

const brandname = Rubik({ subsets: ["latin"] });

export default function page() {
  return (
    <div className="w-full flex flex-col gap-10 max-mobile:gap-8 justify-center items-center mobile:px-10 mobile:pt-8 max-mobile:px-5 max-mobile:pt-10">

        <Link href={'/'}><p className={`${brandname.className} max-mobile:text-4xl mobile:text-5xl font-extrabold`}>TULOS</p></Link>

        <div className="w-full flex max-mobile:flex-col mb-8 justify-between">

            <Image
                src={LoginImage}
                alt="Fashion editorial showing models in cream blazers standing in a wheat field"
                width={1600}
                height={800}
                priority
                className="max-mobile:w-full mobile:w-[50%] mobile:h-[550px] max-mobile:h-[150px] rounded-xl object-cover max-mobile:mb-8"
                sizes="(min-width: 1280px) 1600px, (min-width: 768px) 100vw, 100vw"
                quality={100}
            />

            <div className="w-full flex flex-col justify-between mobile:px-10">

                <div className="flex flex-col gap-3 justify-start items-center max-mobile:mb-12">

                    <p className="mobile:text-4xl max-mobile:text-3xl font-semibold">WELCOME ABOARD</p>
                    <p className="text-[#b5b5b5] mobile:text-base max-mobile:text-sm">Create an account and be part of something great.</p>
                
                </div>

                <div className="max-mobile:mb-8">

                    <div className="flex flex-col gap-2 mb-8">
                        <p className="font-medium">Email Address</p>
                        <input type="text" className="max-mobile:w-full border rounded-full mobile:px-12 mobile:pl-6 mobile:py-3 max-mobile:px-8 max-mobile:pl-6 max-mobile:py-3 outline-none" placeholder="Your email address"/>
                    </div>

                    <div className="flex flex-col gap-2 max-mobile:mb-8 mobile:mb-12">
                        <p className="font-medium">Password</p>
                        <input type="text" className="max-mobile:w-full border rounded-full mobile:px-12 mobile:pl-6 mobile:py-3 max-mobile:px-8 max-mobile:pl-6 max-mobile:py-3 outline-none" placeholder="Your password"/>
                    </div>

                    <Button className="w-full rounded-full mb-4 py-6">Sign Up</Button>

                    <Button variant="outline" className="w-full flex gap-2 rounded-full py-6 border-[#a4a4a4]">
                        <Image
                            src={Google}
                            width={24}
                            height={24}
                            alt="Google Icon"
                        />
                        <p>Sign in with Google</p>
                    </Button>

                </div>

                <div className="flex gap-2 justify-center">
                    <p className="text-[#bababa]">Already have an account?</p>
                    <Link href={'/login'}><p className="text-blue-500 cursor-pointer">Log in</p></Link>
                </div>
            
            </div>

        </div>

    </div>
  )
}
