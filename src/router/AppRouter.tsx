import { useRoutes } from 'react-router-dom';

import { CharactersPage } from '../views/CharactersPage/CharactersPage';
import MainLayout from '../components/layout/MainLayout/MainLayout';
import { FavoritesPage } from '../views/FavoritesPage/FavoritesPage';
import { ROUTES } from './routes';
import { CharactersDetailsPage } from '../views/CharacterDetailPage/CharacterDetailPage';

const AppRouter = () => {
  const routes = useRoutes([
    {
      path: ROUTES.HOME,
      element: <MainLayout />,
      children: [{ path: '/', element: <CharactersPage /> }],
    },
    {
      path: ROUTES.CHARACTERS,
      element: <MainLayout />,
      children: [
        { path: ROUTES.CHARACTERS, element: <CharactersPage /> },
        { path: ROUTES.CHARACTER_DETAIL, element: <CharactersDetailsPage /> },
      ],
    },
    {
      path: ROUTES.FAVORITES,
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
