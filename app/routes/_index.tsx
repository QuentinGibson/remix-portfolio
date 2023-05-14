import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Box from '~/components/Box';
export default function IndexRoute() {
  return (
    <main className=" relative h-full px-4 py-4">
      <section className="flex flex-col gap-2 w-full">
        <h1 className="font-thin font-serif uppercase text-[#3c4649]">Fullstack Web Developer</h1>
        <h2 className='text-4xl'>Quentin Gibson</h2>
      </section>
      {/* <Canvas>
        <ambientLight intensity={0.1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <OrbitControls />
      </Canvas>  */}
    </main>
  );
};
