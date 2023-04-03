import React, { Suspense, useEffect, useState } from 'react'
import Header from '../layers/Header'
import Footer from '../layers/Footer'
import {Home, About, Skills, Work , Contact} from '../Components/index'
import Loading from './Loading'
import './loading.css'
import Swal from 'sweetalert2'

function App() {
  useEffect(() => {
    window.onblur = () =>{
      Swal.fire(
        {
          icon: 'warning',
          
          width: '80%',
          background: '#171717',
          title: 'Please Refresh The Page',
          confirmButtonColor : '#f4805b',
          color: 'rgb(223, 211, 195)',
          backdrop : 'rgb(223, 211, 195, 0.4)'
        }).then(() =>{
          window.location.reload()
        })
    }
    return () =>{
    }
  }, [])


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