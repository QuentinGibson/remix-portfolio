import {GrMenu, GrGithub, GrLinkedin, GrYoutube} from 'react-icons/gr'
export default function IndexRoute() {
  return (
    <main className="bg-orange-500 relative h-full px-4 py-4">
      <section className="bg-white flex flex-col justify-between items-center h-full py-4">
        <GrMenu  className='text-2xl'/>
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-bold text-xl">Fullstack Web Developer</h1>
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
    </main>
  );
};
