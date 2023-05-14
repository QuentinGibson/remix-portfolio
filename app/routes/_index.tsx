import { GrGithub, GrLinkedin, GrYoutube } from 'react-icons/gr'
import { HiMenuAlt4, HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Box from '~/components/Box';
import { useState } from 'react';
import { Theme, useTheme } from '~/utils/theme-provider';
import { Link } from '@remix-run/react';
export default function IndexRoute() {
  const [theme, setTheme] = useTheme();
  const isDark = theme === Theme.DARK;
  const changeTheme = () => {
    setTheme(isDark ? Theme.LIGHT : Theme.DARK);
  }
  return (
    <main className=" relative h-full px-4 py-4">
      <section className=" flex flex-col justify-between items-center h-full py-4">
        <div className="flex gap-4 justify-between w-full">
          <div>
            <Link to="/">
              <h1 className="font-bold text-3xl">Quentin</h1>
            </Link>
          </div>
          <div className='flex gap-2'>
            {isDark ?
              <HiOutlineSun onClick={changeTheme} className='text-2xl' /> :
              <HiOutlineMoon onClick={changeTheme} className='text-2xl' />
            }

            <HiMenuAlt4 className='text-2xl' />
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <h1 className="font-thin font-serif uppercase text-[#3c4649]">Fullstack Web Developer</h1>
          <p>Quentin Gibson</p>
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
