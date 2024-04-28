import { ReactElement } from 'react';

import { FaceFrownIcon } from '@heroicons/react/24/outline';
import { Button } from '../../buttons/Button/Button';

const ErrorMessage = (): ReactElement => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <main className='flex flex-col justify-center items-center min-h-[85vh] text-gray-300 gap-5'>
      <FaceFrownIcon className='w-48' />
      <h1 className='md:text-xl font-semibold '>Could not load data, please try again later</h1>
      <Button text='Reload page' onClickHandler={reloadPage} />
    </main>
  );
};

export default ErrorMessage;
