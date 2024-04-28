import { Link, useLocation } from 'react-router-dom';

import { ILinkElement } from '../../../../interfaces/ILinkElement';

export const NavbarLink = ({ linkElement }: PropTypes) => {
  const location = useLocation();
  const isActive =
    linkElement.route === location.pathname ||
    (linkElement.name === 'All' && location.pathname === '/');

  const activeClasses = 'font-bold text-primary-dark underline';

  return (
    <li
      className={`outline-0 outline-none underline-offset-4 border-0 rounded-50 transition ease-in-out duration-200 hover:bg-gray-100 rounded-md ${
        isActive ? activeClasses : 'text-gray-500 font-regular'
      }`}
    >
      <Link to={linkElement.route} className='flex gap-2 py-2 px-3  border-none text-sm sm:text-md'>
        {linkElement.name}
      </Link>
    </li>
  );
};

type PropTypes = {
  linkElement: ILinkElement;
};
