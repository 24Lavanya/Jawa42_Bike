import { BEATS } from '../utils/data'
import { Layer } from '../utils/helpers'

const Road = () => (
  <section id="ride" className="relative h-[400vh]">
    <div className="sticky top-0 flex h-dvh flex-col overflow-hidden bg-gradient-to-b from-[#8fb8d8] to-[#f3e3c3]">

      {/* backgrounds */}
      <div className="absolute inset-0">
        <div className="gold absolute inset-0 bg-gradient-to-b from-[#e9893a] to-[#ffd08a] opacity-0" />
        <div className="dusk absolute inset-0 bg-gradient-to-b from-[#1b1f3a] to-[#c0506a] opacity-0" />
        <Layer cls="rl1" seed={2} amp={110} base={300} fill="#5a6d86" h="h-[80%]" />
        <Layer cls="rl2" seed={4} amp={80} base={350} fill="#34445e" h="h-[65%]" />
        <Layer cls="rl3" seed={5} amp={50} base={420} fill="#172033" h="h-[45%]" />
        <div className="road absolute inset-x-0 bottom-0 h-[40%] bg-[#0d0d0f] lg:h-[26%]"
          style={{ backgroundImage: 'repeating-linear-gradient(90deg,#e1251b 0 60px,transparent 60px 160px)', backgroundSize: '100% 4px', backgroundRepeat: 'repeat-x', backgroundPositionY: '40%' }} />
      </div>

      {/* content */}
      <div className="relative flex flex-1 flex-col">
        <div className="flex items-start gap-6 px-6 pt-20 md:px-12">
          <svg className="h-14 flex-1 md:h-20 lg:h-24" viewBox="0 0 1000 200" preserveAspectRatio="none">
            <path className="route" d="M0 190 C200 190 250 40 450 100 S750 160 1000 10" fill="none" stroke="#fff" strokeWidth="3" strokeDasharray="1" pathLength="1" vectorEffect="non-scaling-stroke" />
          </svg>
          <p className="shrink-0 text-white">
            <span className="alt font-display text-5xl font-extrabold md:text-6xl">0</span>
            <span className="font-display text-xl font-bold md:text-2xl"> m</span>
          </p>
        </div>

        
        <div className="mt-auto flex items-center lg:mb-0  mb-10 h-auto lg:flex-1 lg:justify-end justify-center px-6 md:px-12">
          <div className="grid">
            {BEATS.map((b) => (
              <h3 key={b} className="beat col-start-1 row-start-1 font-display text-5xl font-extrabold uppercase text-white opacity-0 md:text-6xl lg:text-7xl lg:text-right text-center lg:max-w-[95%]">{b}</h3>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)
export default Road