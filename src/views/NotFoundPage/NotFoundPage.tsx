import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/buttons/Button/Button';
import { ROUTES } from '../../router/routes';

const NotFoundPage = (): ReactElement => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate(ROUTES.CHARACTERS);
  };

  return (
    <main className='flex flex-col justify-center items-center min-h-[85vh] '>
      <h1 className='text-6xl md:text-8xl font-bold font-heading animate-bounce text-electric-green'>
        404
      </h1>
      <p className='text-xl mt-6 text-center mb-8'>Oops... It seems you got lost!</p>
      <Button text='Go to characters' onClickHandler={redirectToHome} />
    </main>
  );
};

export default NotFoundPage;
