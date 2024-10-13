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
import BottomNavbar from '../../components/bottomNav/BottomNavbar'
import NewNavbar from '../../components/NewNavbar/newNavbar'
import DashboardSection from '../../components/dashboard/Dashboard'
import ProgressBar from '../../components/slider/strip'
import Banking from '../../components/banking/banking'
import CibilScore from '../../components/cibil/cibilScore'
import Travels from '../../components/travels/travels'
import ArtificialServices from '../../components/artificialService/artificialServices'

const HomePage = () => {
  return (
    <Layout>
      <div className='bg-gray-200 pb-10'>
        {/* <NewNavbar/> */}
      <ImageSlider/>
      <ProgressBar/>
      <DashboardSection/>
      <Marquee/>
      <MainTransfer/>
      <Slider2/>
      <RechargeAndBill/>
      <Banking/>
      <CibilScore/>
      <Travels/>
      <ArtificialServices/>
      <ChooseUs/>
      <FeaturesSection/>
      <OurDreams/>
      </div>
    </Layout>

  )
}

export default HomePage