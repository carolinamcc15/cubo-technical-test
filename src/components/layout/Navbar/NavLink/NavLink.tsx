import { Link } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/solid';

import { ILinkElement } from '../../../../interfaces/ILinkElement';

export const NavbarLink = ({ linkElement }: PropTypes) => {
  return (
    <li>
      <Link
        to={linkElement.route}
        className='flex gap-2 py-2 px-3 no-underline border-none text-black'
        aria-current='page'
      >
        <HeartIcon className='text-black w-5' /> {linkElement.name}
      </Link>
    </li>
  );
};

type PropTypes = {
  linkElement: ILinkElement;
};
