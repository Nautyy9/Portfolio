import React, { Suspense, useEffect, useState } from 'react'
import Header from '../layers/Header'
import Footer from '../layers/Footer'
import {Home, About, Skills, Work , Contact} from '../Components/index'
import Loading from './Loading'
import './loading.css'

function App() {
 

  return (
    <Suspense  fallback={<Loading/>}>
    <div className='bg-[#f5efe6] z-10 '>
    <header className='font-[Montserrat, sans-serif] text-[14px] scroll-smooth'>
        <Header/>
    </header>
    <main >
      <Home />
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </main>
    <footer>
        <Footer/>
    </footer>
    </div>
    </Suspense>
  )
}

export default App