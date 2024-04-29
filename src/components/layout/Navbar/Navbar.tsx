import { navbarLinks } from '../../../utils/navigation';
import { ILinkElement } from '../../../interfaces/ILinkElement';
import { NavbarLink } from './NavLink/NavLink';
import logo from '../../../assets/logo.png';

export const Navbar = () => {
  return (
    <nav className='bg-white/90 border-gray-200 shadow-lg sticky top-0 py-1 z-20 px-4 rounded-b-sm'>
      <div className='max-w-screen-xl flex items-center justify-between mx-auto py-3'>
        <a href='/' className='flex items-center space-x-2 rtl:space-x-reverse'>
          <img src={logo} className='h-9' />
          <h1 className='hidden sm:block text-md font-title font-bold'>Characters</h1>
        </a>
        <div className='block' >
          <ul className='font-medium flex md:p-0 '>
            {navbarLinks.map((link: ILinkElement) => (
              <NavbarLink key={link.route} linkElement={link} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
