import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import PromotionalBanner from '@/components/PromotionalBanner'
import TermsAndConditions from '@/components/TermsAndConditions';

import { Roboto } from "next/font/google";

const RobotoFont = Roboto({subsets : ["latin"], weight : "500"})

export default function page() {
  return (
    <div>
      
        <PromotionalBanner/>
        <Navbar/>
      
        <div className='flex flex-col gap-8 items-center max-mobile:px-5 mobile:px-10'>

            <p className='text-5xl font-medium max-laptop:text-4xl max-mobile:text-3xl pt-8 max-mobile:text-center mb-10'>TERMS AND CONDITIONS</p>

            <div className='mobile:w-[1000px] max-mobile:w-full flex flex-col gap-8 mobile:mb-40 max-mobile:mb-20'>

              <div className='flex flex-col gap-8'>

                <p>Welcome to TULOS (the &#34;Website&#34;). We are delighted to have you here and look forward to providing you with an exceptional shopping experience. These Terms and Conditions (&#34;Terms&#34;) are designed to establish a clear understanding between you, the user, and us, the service provider, regarding your use of our Website and the purchase of products offered through it.</p>

                <p>By accessing or using our Website, you signify your agreement to comply with and be bound by these Terms. This document outlines your rights, responsibilities, and the standards we uphold to ensure a secure and enjoyable platform for all users. Whether you are browsing, creating an account, or making a purchase, these Terms govern every aspect of your interaction with our Website.</p>

                <p>We encourage you to read these Terms carefully before placing an order or engaging with any of our services. Your continued use of the Website constitutes acceptance of these Terms, and we are here to address any questions or concerns you may have. Thank you for choosing TULOS, and we hope you have a pleasant shopping journey with us.</p>

              </div>

              <p className={`${RobotoFont.className} text-xl font-semibold`}>About us and Elgibility</p>

              <div className='flex flex-col gap-8'>

                <p>TULOS is a premier online marketplace that offers a wide range of clothing, footwear, and accessories tailored for men, women, and children. Our goal is to provide a convenient, secure, and enjoyable shopping experience for our users. By accessing our Website, you confirm that you are either:</p>

                <ul className='list-disc pl-8 flex flex-col gap-4'>
                  <li>At least 18 years of age, thereby legally eligible to enter into agreements and make transactions</li>
                  <li>Or a minor using the Website under the guidance and supervision of a parent or legal guardian, who accepts responsibility for your actions.</li>
                </ul>

                <p>We reserve the right to limit or refuse access to individuals who do not comply with these eligibility requirements.</p>

              </div>

              <p className={`${RobotoFont.className} text-xl font-semibold`}>Account Creation and Responsibilities</p>

              <div className='flex flex-col gap-8'>

                <p>To make purchases or access certain features of the Website, you may need to create a user account. This involves providing accurate personal details, such as your name, email address, contact number, and payment details. By creating an account, you agree to:</p>

                <ul className='list-disc pl-8 flex flex-col gap-4'>
                  <li>Provide true, current, and complete information.</li>
                  <li>Keep your account information up-to-date.</li>
                  <li>Safeguard your login credentials and notify us immediately if you suspect unauthorized access.</li>
                </ul>

                <p>You are fully responsible for all actions taken under your account, including any purchases made. Any misuse of your account or failure to comply with these responsibilities may result in the suspension or termination of your account.</p>

              </div>

              <p className={`${RobotoFont.className} text-xl font-semibold`}>Product Information and Pricing</p>

              <div className='flex flex-col gap-8'>

                <p>We strive to ensure that the products listed on our Website are described accurately and depicted through high-quality images. However, variations in color, texture, and appearance may occur due to differences in display screens and production batches. Prices are displayed in dollars, inclusive of taxes unless otherwise stated. Additional charges, such as shipping fees, will be calculated at checkout.</p>

                <p>While we make every effort to avoid errors, occasional inaccuracies in pricing or product details may occur. In such cases, we reserve the right to:</p>

                <ul className='list-disc pl-8 flex flex-col gap-4'>
                  <li>Cancel orders containing errors.</li>
                  <li>Contact you to offer alternatives or resolve discrepancies.</li>
                </ul>

                <p>All promotions, discounts, and offers are subject to availability and specific terms.</p>

              </div>

              <p className={`${RobotoFont.className} text-xl font-semibold`}>Orders and Payments</p>

              <div className='flex flex-col gap-8'>

                <p>By placing an order, you agree to pay the total amount displayed at checkout, which includes the product price, applicable taxes, and shipping charges. Orders are subject to our acceptance, and we reserve the right to cancel or modify any order for reasons such as:</p>

                <ul className='list-disc pl-8 flex flex-col gap-4'>
                  <li>Stock unavailability.</li>
                  <li>Inaccurate billing or shipping information.</li>
                  <li>Suspected fraudulent activity.</li>
                </ul>

                <p>Payments can be made securely using Stripe, Google Pay or Credit/Debit Cards. All transactions are encrypted to ensure your financial information remains secure. Once an order is placed, modifications or cancellations may not always be possible, so we advise reviewing your order details carefully before proceeding.</p>

              </div>

              <p className={`${RobotoFont.className} text-xl font-semibold`}>Shipping and Delivery</p>

              <div className='flex flex-col gap-8'>

                <p>We offer shipping to [list regions/countries], with estimated delivery times varying based on your location and the selected shipping method. After dispatch, you will receive a tracking number to monitor the progress of your shipment. While we aim to deliver orders promptly, delays may occur due to unforeseen circumstances, including:</p>

                <ul className='list-disc pl-8 flex flex-col gap-4'>
                  <li>Natural disasters.</li>
                  <li>Carrier-related issues.</li>
                  <li>Address discrepancies.</li>
                </ul>

                <p>Shipping costs are displayed at checkout and are non-refundable unless there is an error on our part. It is your responsibility to provide accurate delivery details to ensure successful shipment.</p>

              </div>

              <p className={`${RobotoFont.className} text-xl font-semibold`}>Returns, Refunds, and Exchanges</p>

              <div className='flex flex-col gap-8'>

                <p>Your satisfaction is our priority, and we accept returns on eligible products within 7 days of delivery. To qualify for a return, items must be:</p>

                <ul className='list-disc pl-8 flex flex-col gap-4'>
                  <li>Unused, unwashed, and in their original condition.</li>
                  <li>Returned with all original tags and packaging intact.</li>
                </ul>

                <p>Once we receive and inspect your return, refunds will be processed to the original payment method within 5 days. Exchanges for different sizes, colors, or products are subject to stock availability. Products marked as &#34;final sale&#34; or &#34;non-returnable&#34; are not eligible for return or exchange. Please contact our support team for detailed return instructions.</p>

              </div>

              <p className={`${RobotoFont.className} text-xl font-semibold`}>Intellectual Property</p>

              <div className='flex flex-col gap-8'>

                <p>All content displayed on the Website, including text, images, videos, logos, and designs, is protected under copyright, trademark, and other intellectual property laws. This content is the exclusive property of TULOS or its licensors. You may not:</p>

                <ul className='list-disc pl-8 flex flex-col gap-4'>
                  <li>Copy, reproduce, modify, or distribute Website content for any purpose.</li>
                  <li>Use trademarks or logos without prior written permission.</li>
                </ul>

                <p>Unauthorized use of our intellectual property will be subject to legal action.</p>

              </div>

              <p className={`${RobotoFont.className} text-xl font-semibold`}>Limitation of Liability</p>

              <div className='flex flex-col gap-8'>

                <p>While we make every effort to ensure a seamless shopping experience, TULOS is not responsible for:</p>

                <ul className='list-disc pl-8 flex flex-col gap-4'>
                  <li>Indirect, incidental, or consequential damages arising from the use or inability to use the Website.</li>
                  <li>Loss of data or unauthorized access resulting from your failure to secure your account.</li>
                  <li>Delivery delays or issues caused by third-party carriers or circumstances beyond our control.</li>
                </ul>

                <p>Our liability is limited to the total value of the transaction in question.</p>

              </div>

              <p className={`${RobotoFont.className} text-xl font-semibold`}>Termination</p>

              <div className='flex flex-col gap-8'>

                <p>We reserve the right to suspend or terminate your access to the Website at our discretion, particularly in cases of:</p>

                <ul className='list-disc pl-8 flex flex-col gap-4'>
                  <li>Breaches of these Terms.</li>
                  <li>Fraudulent or malicious activity.</li>
                  <li>Any actions that disrupt the Website&#39;s operations or harm its users.</li>
                </ul>

                <p>Termination of your account will not affect our right to seek compensation for any damages caused by your actions.</p>

              </div>

              <p className={`${RobotoFont.className} text-xl font-semibold`}>Changes to Terms and Conditions</p>

              <p>We may update these Terms from time to time to reflect changes in our operations, legal requirements, or market conditions. The latest version will always be available on this page, with the &#34;Effective Date&#34; updated. Continued use of the Website after such changes constitutes your acceptance of the revised Terms.</p>

              <p className={`${RobotoFont.className} text-xl font-semibold`}>Contact Us</p>

              <p>For questions about these Terms or our policies, you can contact us via email at Tulos@gmail.com or by phone at +91 1234567890. By accessing or using our Website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>

            </div>

        </div>

        <Footer/>
        <TermsAndConditions/>

    </div>
  )
}