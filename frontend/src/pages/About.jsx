import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Welcome to Clotree—where style grows with you! We offer a curated collection of trendy, comfortable clothing designed to elevate your everyday look. Rooted in quality and crafted for confidence, Clotree is your go-to destination for fashion that speaks to your unique style. Whether you’re dressing up for a special occasion or keeping it casual, our pieces are made to inspire and empower. Shop with us and discover the perfect blend of comfort, elegance, and individuality.</p>
              <p>At Clotree, we’re passionate about helping you grow your style effortlessly. Explore our collection today and discover fashion that feels as good as it looks!</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>To empower individuals to express their unique style through high-quality, comfortable clothing that blends trend and authenticity. To create a seamless shopping experience with thoughtfully curated collections that prioritize comfort, quality, and style.</p>
          </div>
         </div>

         <div className='text-xl py-4'>
            <Title text1={'WHY'} text2={'CHOOSE US'}/>
         </div>

         <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assurance:</b>
              <p className='text-gray-600'>At Clotree, we are committed to delivering high-quality clothing that combines comfort, durability, and style. Every piece is crafted from premium materials and goes through strict quality checks to ensure excellence. Shop confidently, knowing our products are made to look good and last long. </p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p className='text-gray-600'>At Clotree, we prioritize your convenience with a seamless shopping experience. Enjoy easy navigation, secure checkout, and fast delivery right to your doorstep. We’re here to make stylish shopping effortless and enjoyable. </p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service:</b>
              <p className='text-gray-600'>At Clotree, exceptional customer service is our promise. We’re dedicated to providing a friendly and supportive shopping experience, from personalized assistance to quick resolutions. Your satisfaction is our priority—shop with confidence knowing we’re here for you every step of the way. </p>
            </div>
         </div>
    <NewsletterBox/>
    </div>
  )
}

export default About