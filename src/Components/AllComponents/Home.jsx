import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import WrapperContainer from '../WrapperContainer/WrapperContainer'
import MidFilterSection from '../MidSection/MidFilterSection'
import MidComponentParent from '../MidSection/MidComponentParent'
import TabsComponent from '../MidSection/TabsComponent'
import FurnitureFlow from '../MidSection/FurnitureFlow'
import NewsLetter from '../MidSection/NewsLetter'
import Cards from '../MidSection/Cards'
import Footer from '../Footer/Footer'
import PopUpButton from '../PopUpButton/PopUpButton'


const Home = () => {
  return (
    <div className='relative'>
      <div className='fixed flex right-4 bottom-4 z-20'>
        <PopUpButton></PopUpButton>
      </div>
      <WrapperContainer navHead>
        <Navbar></Navbar>
        <Header></Header>
      </WrapperContainer>
      <div className='midsection'>
        <WrapperContainer>
          <MidFilterSection></MidFilterSection>
          <MidComponentParent></MidComponentParent>
          <TabsComponent></TabsComponent>
          <FurnitureFlow></FurnitureFlow>
          <NewsLetter></NewsLetter>
          <Cards></Cards>
        </WrapperContainer>
        <div>
          <Footer></Footer>
        </div>
      </div>
      
    </div>
  )
}

export default Home