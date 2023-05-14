import { Link } from "@remix-run/react";
import { ReactNode, useState } from "react";
import { GrGithub, GrLinkedin, GrYoutube } from 'react-icons/gr'
import { HiMenuAlt4, HiOutlineSun, HiOutlineMoon, HiX } from 'react-icons/hi'
import { Theme, ThemeProvider, useTheme } from "~/utils/theme-provider";
import { useMediaQuery } from "usehooks-ts";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  const [theme, setTheme] = useTheme();
  const isDark = theme === Theme.DARK;
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const changeTheme = () => {
    setTheme(isDark ? Theme.LIGHT : Theme.DARK);
  }
  return (
    <>
      <header className=" flex flex-col justify-between items-center py-4 bg-[#ebe0c2] border-b border-[#8c805e] px-4">
        <div className="flex gap-4 justify-between w-full item-center">
          <div>
            <Link to="/">
              <h1 className="text-2xl">Quentin</h1>
            </Link>
          </div>
          <div className='flex gap-2 md:gap-8'>
            {isDesktop ?
              <nav className="flex gap-4 items-center text-xl">
                <Link to="/blog">Blog</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </nav> :
              <button>
                {isMenuOpen ?
                  <HiX onClick={() => setIsMenuOpen(false)} className='text-2xl' /> :
                  <HiMenuAlt4 onClick={() => setIsMenuOpen(true)} className='text-2xl' />
                }
              </button>
            }
            <button>
              {isDark ?
                <HiOutlineSun onClick={changeTheme} className='text-2xl' /> :
                <HiOutlineMoon onClick={changeTheme} className='text-2xl' />
              }
            </button>
          </div>
        </div>
        {isDesktop ?
          null :
          isMenuOpen && (
            <nav className="flex gap-4 my-2">
              <Link to="/blog">Blog</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          )
        }
      </header>
      {children}
      <footer>
        <div className="flex flex-col gap-4 bg-cream py-8 items-center font-serif text-center">
          <div className="flex gap-4 text-4xl ">
            <Link to={""}>
              <GrGithub />
            </Link>
            <Link to={""}>
              <GrLinkedin />
            </Link>
            <Link to={""}>
              <GrYoutube />
            </Link>
          </div>
          <p className="font-thin">© 2023 Quentin Gibson. All Rights Resevered</p>
          <p className="font-thin">Developed by Quentin Gibson</p>
        </div>
      </footer>
    </>
  );
};