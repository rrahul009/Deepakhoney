
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import ProductFeature from '@/components/ProductFeature'
import Slider from '@/components/Slider'
import Tastimonial from '@/components/Tastimonial'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'
 
 const page = () => {
   return (
     <div> 
      {/* <Header/> */}

      <Navbar/>
       <Slider/>
       <ProductFeature/>
       <WhyChooseUs/>
       <Tastimonial/>
       <Footer/>
     </div>
   )
 }
 
 export default page