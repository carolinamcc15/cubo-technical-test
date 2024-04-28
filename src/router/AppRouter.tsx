import { useRoutes } from 'react-router-dom';

import { CharactersPage } from '../views/CharactersPage/CharactersPage';
import MainLayout from '../components/layout/MainLayout/MainLayout';
import { FavoritesPage } from '../views/FavoritesPage/FavoritesPage';
import { CharactersDetailsPage } from '../views/CharacterDetailPage/CharacterDetailPage';
import NotFoundPage from '../views/NotFoundPage/NotFoundPage';
import { ROUTES } from './routes';

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
    {
      path: '*',
      element: <MainLayout />,
      children: [{ path: '*', element: <NotFoundPage /> }],
    },
  ]);

  return routes;
};

export default AppRouter;
