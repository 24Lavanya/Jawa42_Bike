import { Suspense, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Environment } from '@react-three/drei'

// GSAP writes into this object; the 3D bike reads it every frame.
// x is a fraction of the viewport width, s is scale, ry is rotation in radians.
export const state = { x: 0.06, y: -0.05, s: 1.5, ry: 0.55, bob: 0 }
const FACE = 0

function Bike() {
  const g = useRef()
  const { scene } = useGLTF('/bike.glb')
  const { viewport } = useThree()

  useFrame(({ clock }) => {
    const k = Math.min(1, viewport.width / 4.7)
    g.current.position.set(state.x * viewport.width, state.y + Math.sin(clock.elapsedTime * 9) * 0.006 * state.bob, 0)
    g.current.scale.setScalar(state.s * k)
    g.current.rotation.y = state.ry + FACE
  })
  return (
    <group ref={g}>
      <primitive object={scene} position={[0.06, -0.63, 0]} />
    </group>
  )
}

export default function Scene() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10">
      <Canvas camera={{ position: [0, 0.3, 4.2], fov: 35 }} dpr={[1, 2]} gl={{ alpha: true }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 4, 3]} intensity={2} />
        <Suspense fallback={null}>
          <Environment preset="city" />
          <Bike />
        </Suspense>
      </Canvas>
    </div>
  )
}
