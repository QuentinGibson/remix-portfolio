import { Link } from "@remix-run/react";
import { ReactNode } from "react";
import { GrGithub, GrLinkedin, GrYoutube } from 'react-icons/gr'
import { HiMenuAlt4, HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'
import { Theme, ThemeProvider, useTheme } from "~/utils/theme-provider";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  const [theme, setTheme] = useTheme();

  const isDark = theme === Theme.DARK;
  const changeTheme = () => {
    setTheme(isDark ? Theme.LIGHT : Theme.DARK);
  }
  return (
    <>
      <header className=" flex flex-col justify-between items-center py-4 bg-cream px-4">
        <div className="flex gap-4 justify-between w-full">
          <div>
            <Link to="/">
              <h1 className="text-2xl">Quentin</h1>
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
      </header>
      {children}
      <footer>
        <div className="flex flex-col gap-4 bg-cream py-8 items-center font-serif">
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