import { Form, Link } from "@remix-run/react";
import { ReactNode, useEffect, useState } from "react";
import { GrGithub, GrLinkedin, GrTwitter, GrYoutube } from 'react-icons/gr'
import { HiMenuAlt4, HiOutlineSun, HiOutlineMoon, HiX } from 'react-icons/hi'
import { Theme, useTheme } from "~/utils/theme-provider";
import { useMediaQuery } from "usehooks-ts";
import { useOptionalUser } from "~/utils";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [theme, setTheme] = useTheme();
  const isDark = theme === Theme.DARK;
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  let isDesktop = useMediaQuery('(min-width: 768px)')

  const user = useOptionalUser()
  const changeTheme = () => {
    setTheme(isDark ? Theme.LIGHT : Theme.DARK);
  }
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className=" flex flex-col justify-between items-center py-4 bg-cream border-b border-[#8c805e] px-4">
        <div className="flex gap-4 justify-between w-full item-center">
          <div>
            <Link prefetch="intent" to="/">
              <h1 className="text-2xl">Quentin</h1>
            </Link>
          </div>
          <div className='flex gap-2 md:gap-8'>
            {isDesktop ?
              <nav className="flex gap-4 items-center text-xl">
                <Link prefetch="intent" to="/blog">Blog</Link>
                <Link prefetch="intent" to="/projects">Projects</Link>
                <Link prefetch="intent" to="/contact">Contact</Link>
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
              <Link prefetch="intent" to="/blog" onClick={closeMenu}>Blog</Link>
              <Link prefetch="intent" to="/projects" onClick={closeMenu}>Projects</Link>
              <Link prefetch="intent" to="/contact" onClick={closeMenu}>Contact</Link>
            </nav>
          )
        }
      </header>
      {children}
      <footer className="border-t border-[#8c805e]">
        <div className="flex flex-col gap-4 bg-cream py-8 items-center font-serif text-center">
          <div className="flex gap-4 text-4xl ">
            <Link to={"https://github.com/QuentinGibson"}>
              <GrGithub />
            </Link>
            <Link to={"https://twitter.com/quent_made_it"}>
              <GrTwitter />
            </Link>
            <Link to={"https://www.youtube.com/channel/UCsX8Ahu9O9dmFyoV_fgoeaw"}>
              <GrYoutube />
            </Link>
          </div>
          <p className="font-thin">© 2023 Quentin Gibson. All Rights Resevered</p>
          <p className="font-thin">Developed by Quentin Gibson</p>
          <div className="flex gap-2">
            {!user &&
              <Link className="hover:underline" to={"/login"}>Login</Link>
            }
            {user && user.role === "ADMIN" && <Link className="hover:underline" to="admin">Admin</Link>}
            {user && <Form method="POST" action="/logout"><button className="hover:underline" type="submit">Logout</button></Form>}
          </div>
        </div>
      </footer>
    </>
  );
};
