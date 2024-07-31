
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'


function App() {

  const [typeEffect] = useTypewriter({
    words: ['Web Developer', 'React Developer', 'MySQL Developer', 'Java Full Stack Developer'],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 40
  })

  return (
    <>
      <Navbar />
      <ToastContainer position='top-center' />
      <Home type={typeEffect} />
      <Footer />
    </>
  )
}

export default App
