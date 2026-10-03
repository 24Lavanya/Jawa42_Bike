import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useProgress } from '@react-three/drei'

export default function Loader() {
  const { progress } = useProgress() 
  const [pageLoaded, setPageLoaded] = useState(document.readyState === 'complete')
  const [shown, setShown] = useState(0)
  const [gone, setGone] = useState(false)
  const root = useRef()
  const lifted = useRef(false)

  // wait for images and fonts too
  useEffect(() => {
    if (pageLoaded) return
    const f = () => setPageLoaded(true)
    window.addEventListener('load', f)
    return () => window.removeEventListener('load', f)
  }, [pageLoaded])

  // lock scrolling while loading
  useEffect(() => {
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    window.scrollTo(0, 0)
    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [])

  // count smoothly toward the real progress (held at 90 until the page has loaded)
  const target = pageLoaded ? progress : Math.min(progress, 90)
  useEffect(() => {
    const o = { v: shown }
    const tw = gsap.to(o, { v: target, duration: 0.6, ease: 'power1.out', onUpdate: () => setShown(Math.round(o.v)) })
    return () => tw.kill()

  }, [target])

  // at 100%: lift the loader up and reveal the page
  useEffect(() => {
    if (shown < 100 || lifted.current) return
    lifted.current = true
    window.scrollTo(0, 0)          
    ScrollTrigger.refresh()       
    gsap.to(root.current, {
      yPercent: -100, duration: 1.1, ease: 'power3.inOut', delay: 0.3,
      onComplete: () => {
        document.body.style.overflow = ''  
        document.documentElement.style.overflow = ''
        setGone(true)
        ScrollTrigger.refresh()
      },
    })
  }, [shown])

  if (gone) return null
  return (
    <div ref={root} className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0d0d0f] text-white">
      <p className="font-display text-[28vw] font-extrabold leading-none md:text-[14vw]">{shown}<span className="text-brand">%</span></p>
      <div className="mt-6 h-1 w-48 bg-white/15 md:w-72"><div className="h-full origin-left bg-brand" style={{ transform: `scaleX(${shown / 100})` }} /></div>
    </div>
  )
}