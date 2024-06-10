import React from 'react'
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import Footer from '../../components/footer/Footer';
import Menu from '../../components/menu/Menu';
import Dishes from '../../components/dishes/Dishes';
import { StoreContext } from '../../context/StoreContext';
import { DishList } from '../../context/StoreContext';
import { MenuList } from '../../context/StoreContext';
import './home.css'

const Home = () => {
  return (
    <>

    <main className='home main'>
      <Hero/>
      <StoreContext.Provider value={{ MenuList }}>
        <StoreContext.Consumer>
          {({ MenuList }) => <Menu MenuList={MenuList} />}
        </StoreContext.Consumer>
      </StoreContext.Provider>
      {/* <Menu/> */}
      <StoreContext.Provider value={{ DishList }}>
        <StoreContext.Consumer>
          {({ DishList }) => <Dishes DishList={DishList} />}
        </StoreContext.Consumer>
      </StoreContext.Provider>
      {/* <Dishes/> */}
    </main>

    </>
  )
}

export default Home