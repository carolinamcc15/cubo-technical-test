import { navbarLinks } from '../../../utils/navigation';
import { ILinkElement } from '../../../interfaces/ILinkElement';
import { NavbarLink } from './NavLink/NavLink';
import logo from '../../../assets/logo.png';

export const Navbar = () => {
  return (
    <nav className='bg-white border-gray-200 shadow-lg sticky top-0 py-1'>
      <div className='max-w-screen-xl flex items-center justify-between mx-auto p-4'>
        <a href='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <img src={logo} className='h-8' />
          {/* <span className='self-center text-2xl font-semibold whitespace-nowrap '>Characters</span> */}
        </a>
        <div className='block' id='navbar-default'>
          <ul className='font-medium flex flex-col md:p-0 border '>
            {navbarLinks.map((link: ILinkElement) => (
              <NavbarLink linkElement={link} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
