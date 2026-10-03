import { FEATURES } from '../utils/data'

const FeatureSection = () => (
  <section id="features" className="relative h-[500vh] bg-white">
    <div className="sticky top-0 flex h-dvh flex-col overflow-hidden lg:flex-row">
     
      <div className="min-h-0 flex-1" />

      <div className="flex px-6 pb-10 md:px-12 md:pb-14 lg:flex-1 lg:items-center lg:px-16 lg:pb-0">
        <div className="flex w-full max-w-lg flex-col gap-3 lg:gap-4">
          <p className="font-display text-lg font-bold text-brand md:text-xl">#JAWA42FEATURES</p>

         
          <div className="grid">
            {FEATURES.map(([t, d]) => (
              <div key={t} className="feat col-start-1 row-start-1 opacity-0">
                <h2 className="font-display text-4xl font-extrabold uppercase leading-none text-neutral-400 md:text-5xl lg:text-6xl">{t}</h2>
                <p className="mt-3 max-w-md text-sm text-neutral-600 md:text-base lg:mt-4">{d}</p>
              </div>
            ))}
          </div>

          <div className="h-1 w-full bg-neutral-200"><div className="feature-progress h-full origin-left bg-brand" /></div>
        </div>
      </div>
    </div>
  </section>
)
export default FeatureSection