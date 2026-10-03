const ridge = (seed, amp, base, w = 3000) => {
  let d = 'M0 600'
  for (let x = 0; x <= w; x += 20) {
    const y = base - amp * (Math.sin(x / (180 + seed * 40) + seed) * 0.5 + Math.sin(x / (70 + seed * 13) + seed * 2) * 0.3 + Math.sin(x / 410 + seed * 3) * 0.6)
    d += `L${x} ${y.toFixed(1)}`
  }
  return d + `L${w} 600Z`
}

export const Layer = ({ cls, seed, amp, base, fill, h = 'h-[60%]' }) => (
  <svg className={`${cls} ${h} absolute bottom-0 left-0`} style={{ width: '300vw' }} viewBox="0 0 3000 600" preserveAspectRatio="none">
    <path d={ridge(seed, amp, base)} fill={fill} />
  </svg>
)