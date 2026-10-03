import React from 'react'

const Footer = () => {
    return (
        <section className="relative flex h-screen flex-col items-center justify-between bg-[#0d0d0f] px-6 py-24 text-center text-white">
            <h2 className="font-display text-6xl font-extrabold md:text-8xl">Built for the road. Ready for more.</h2>
            <div className="flex gap-4">
                <a href="#" className="bg-brand px-6 py-3 font-medium">Book a test ride</a>
                <a href="#" className="border border-white px-6 py-3 font-medium">Find a dealer</a>
            </div>
        </section>
    )
}

export default Footer