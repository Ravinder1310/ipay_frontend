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

const HomePage = () => {
  return (
    <Layout>
      <div className='bg-gray-300'>
      <ImageSlider/>
      <Marquee/>
      <MainTransfer/>
      <RechargeAndBill/>
      <ChooseUs/>
      <FeaturesSection/>
      <OurDreams/>
      </div>
    </Layout>

  )
}

export default HomePage