import { useRoutes } from 'react-router-dom';

import { CharactersPage } from '../views/CharactersPage/CharactersPage';
import MainLayout from '../components/layout/MainLayout/MainLayout';
import { FavoritesPage } from '../views/FavoritesPage/FavoritesPage';

const AppRouter = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [{ path: '/', element: <CharactersPage /> }],
    },
    {
      path: '/favorites',
      element: <MainLayout />,
      children: [{ path: '/favorites', element: <FavoritesPage /> }],
    },
    //   {
    //     path: '*',
    //     element: <BlankLayout />,
    //     children: [{ path: '*', element: <Error /> }]
    //   },
  ]);

  return routes;
};

export default AppRouter;
