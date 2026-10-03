import landingImg from './assets/landing-image.jpg'

const LandingSection = () => (
  <section className="relative h-dvh overflow-hidden">
    <img src={landingImg} alt="" className="hl1 absolute inset-0 h-[115%] w-full object-cover object-[65%_center] lg:object-center" />
    <div className="hero-copy relative flex h-full flex-col items-start gap-5 px-6 pt-[12vh] md:px-12 md:pt-[14vh] lg:pt-[18vh]">
      <h1 className="font-display text-[24vw] font-extrabold leading-[0.85] text-brand md:text-[18vw] lg:text-[14vw]">JAWA42</h1>
      <a href="#features" className="border border-white px-5 py-2 text-white">Find out more</a>
    </div>
  </section>
)
export default LandingSection