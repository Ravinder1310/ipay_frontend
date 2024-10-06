import React from 'react'
import Layout from '../../components/Layout/Layout'
import ImageSlider from '../../components/slider/slider'
import Marquee from '../../components/marquee'
import MainTransfer from '../../components/mainTransfer/mainTransfer'
import RechargeAndBill from '../../components/recharge&BillPay/recharge&BillPay'
import ChooseUs from '../../components/chooseUs/chooseUs'
import OurDreams from '../../components/ourDreams/ourDreams'
import FeaturesSection from '../../components/features/features'
import TopNav from '../../components/topNav/topNav'
import Slider2 from '../../components/sliderCube/Slider'

const HomePage = () => {
  return (
    <Layout>
      <div className='bg-blue-500'>
      <ImageSlider/>
      <Marquee/>
      <MainTransfer/>
      <Slider2/>
      <RechargeAndBill/>
      <ChooseUs/>
      <FeaturesSection/>
      <OurDreams/>
      </div>
    </Layout>

  )
}

export default HomePage