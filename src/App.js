import React from 'react'
import './App.css';

import { Blog, Feature, Footer, Header, Possibility, WhatGTP } from './container'
import { Navbar, Brand, CTA} from './components'


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGTP/>
      <Feature/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App    
