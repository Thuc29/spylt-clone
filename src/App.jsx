import React from 'react'
import Hero from './section/Hero'
import gsap from 'gsap'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import Header from './section/Header'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


const App = () => {

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true
    })
  }, [])
  return (
    <main>
      <Header />
      <div id='smooth-wrapper'>
        <div id='smooth-content'>
          <Hero />
          <div className='h-dvh bg-black'>  </div>
        </div>
      </div>
    </main>
  )
}

export default App