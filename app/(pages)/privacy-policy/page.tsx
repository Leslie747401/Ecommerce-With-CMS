import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import PromotionalBanner from '@/components/PromotionalBanner'
import TermsAndConditions from '@/components/TermsAndConditions';

export default function page() {
  return (
    <div>
      
        <PromotionalBanner/>
        <Navbar/>
      
        <div className='flex flex-col gap-8 items-center max-mobile:px-5 mobile:px-10'>

          <p className='text-5xl font-medium max-laptop:text-4xl max-mobile:text-3xl pt-8 max-mobile:text-center mb-10'>PRIVACY POLICY</p>

        </div>  

        <Footer/>
        <TermsAndConditions/>

    </div>
  )
}