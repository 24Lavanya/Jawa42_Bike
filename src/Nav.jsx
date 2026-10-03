import React from 'react'

const Nav = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-5 text-white mix-blend-difference md:px-12">
        <span className="font-display text-2xl font-extrabold tracking-wide">JAWA</span>
        <a href="#ride" className="border border-white px-4 py-1.5 text-md">Book a test ride</a>
      </nav>

  )
}

export default Nav