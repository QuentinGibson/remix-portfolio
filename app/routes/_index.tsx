import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Box from '~/components/Box';
import { GrGithub, GrTwitter, GrYoutube } from 'react-icons/gr';
import { HiChip, HiCreditCard, HiCubeTransparent, HiUsers } from 'react-icons/hi';
export default function IndexRoute() {
  return (
    <main className="relative h-full">
      <section className='py-8 bg-cream'>
        <div className='relative flex justify-center'>
          <img src="/img/white-man.png" className='object-fill w-full z-20' alt="This is some random ass nigga" />
          <img className='absolute bottom-0 z-10 w-full' src="/img/art.svg" alt="" />
        </div>
      </section>
      <section className="flex flex-col gap-2 w-full bg-cream py-8">
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
      <section className='py-8 bg-cream px-4'>
        <h1 className='text-5xl text-dark mb-4'>About Me</h1>
        <div className="grid grid-cols-2 gap-4 font-serif">
          <div className="flex flex-col gap-1 items-center break-words">
            <HiUsers className='text-4xl text-[#ff8059]' />
            <p className="font-bold text-2xl text-dark">10</p>
            <h2 className="text-center font-light text-lightDark">Happy Customers</h2>
          </div>
          <div className="flex flex-col gap-1 items-center break-words">
            <HiChip className='text-3xl text-[#ff8059]' />
            <p className="font-bold text-2xl text-dark">1</p>
            <h2 className="text-center font-light text-lightDark">Hackathons</h2>
          </div>
          <div className="flex flex-col gap-1 items-center break-words">
            <HiCubeTransparent className='text-4xl text-[#ff8059]' />
            <p className="font-bold text-2xl text-dark">4</p>
            <h2 className="text-center font-light text-lightDark">Remix-Run Projects</h2>
          </div>
          <div className="flex flex-col gap-1 items-center break-words">
            <HiCreditCard className='text-4xl text-[#ff8059]' />
            <p className="font-bold text-2xl text-dark">3</p>
            <h2 className="text-center font-light text-lightDark">Shopify Stores</h2>
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
