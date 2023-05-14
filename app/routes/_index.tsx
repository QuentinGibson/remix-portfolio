import { GrGithub, GrLinkedin, GrYoutube } from 'react-icons/gr'
import { HiMenuAlt4, HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Box from '~/components/Box';
import { useState } from 'react';
export default function IndexRoute() {
  const [theme, setTheme] = useState('light');
  return (
    <main className=" relative h-full px-4 py-4">
      <section className=" flex flex-col justify-between items-center h-full py-4">

        <HiMenuAlt4 className='text-2xl' />
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-bold text-3xl">Fullstack Web Developer</h1>
          <p>- Quentin Gibson</p>
        </div>
        <footer>
          <div className="flex gap-2">
            <GrGithub />
            <GrLinkedin />
            <GrYoutube />
          </div>
        </footer>
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
