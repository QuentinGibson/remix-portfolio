import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Box from '~/components/Box';
import { GrGithub, GrTwitter, GrYoutube } from 'react-icons/gr';
export default function IndexRoute() {
  return (
    <main className="relative h-full">
      <section>
        <img src="/img/white-man.png" alt="This is some random ass nigga" />
      </section>
      <section className="flex flex-col gap-2 w-full bg-cream">
        <div className='px-4'>
          <h1 className="font-thin font-serif uppercase text-lightDark">Fullstack Web Developer</h1>
          <h2 className='text-6xl leading-[54px] text-dark'>Quentin <br /> Gibson</h2>
        </div>
        <div className="flex flex-col">
          <div className='ml-16 border-l-2 border-dark pl-4 font-serif'>
            <p className='leading-6 text-lightDark mr-10 my-4 text-base'>Im a fullstack developer based in College Park, Ga and I enjoy playing with React. I love video games, basketball, and music.</p>
            <div className="flex gap-3">
              <GrGithub className='text-4xl' />
              <GrTwitter className='text-4xl' />
              <GrYoutube className='text-4xl' />
            </div>
            <div className="flex flex-col my-8">
              <p className='font-thin  text-lightDark'>Born In</p>
              <h3 className='font-bold '>College Park, Ga</h3>
            </div>
            <div className="flex flex-col my-8">
              <p className='font-thin text-lightDark'>Experience</p>
              <h3 className='font-bold '>10+ years</h3>
            </div>
            <div className="flex flex-col my-8">
              <p className='font-thin text-lightDark'>Birthday</p>
              <h3 className='font-bold '>November 29</h3>
            </div>
          </div>
        </div>
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
